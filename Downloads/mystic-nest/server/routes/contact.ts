import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, company, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subject = `Website Contact: ${name} - ${company ?? ""}`;
    const text = `New contact submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company ?? ""}\n\nMessage:\n${message}`;
    const html = `<p>New contact submission</p>\n<ul>\n  <li><strong>Name:</strong> ${name}</li>\n  <li><strong>Email:</strong> ${email}</li>\n  <li><strong>Company:</strong> ${company ?? ""}</li>\n</ul>\n<p><strong>Message:</strong></p>\n<p>${message.replace(/\n/g, "<br />")}</p>`;

    // Use configured SMTP if available, otherwise use Ethereal test account for development
    let transporter;
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: String(process.env.SMTP_SECURE) === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // fallback: create ethereal account and use it (dev only)
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const toAddress = process.env.CONTACT_DESTINATION_EMAIL ?? "info@pyrunai.com";

    const mailOptions = {
      from: `${name} <${email}>`,
      to: toAddress,
      subject,
      text,
      html,
    } as const;

    const info = await transporter.sendMail(mailOptions as any);

    // If using ethereal, return preview URL to help devs inspect
    const previewUrl = nodemailer.getTestMessageUrl(info) ?? undefined;

    // Log success for debugging
    const usingSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    console.log(`✓ Email sent${usingSmtp ? " via SMTP" : " via Ethereal (test)"} to ${toAddress}`);
    if (previewUrl) {
      console.log(`  Preview: ${previewUrl}`);
    }

    return res.status(200).json({ ok: true, previewUrl, usingSmtp, destination: toAddress });
  } catch (err) {
    console.error("✗ Contact send error:", err);
    return res.status(500).json({ error: "Failed to send message", details: String(err) });
  }
};
