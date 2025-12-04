import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, company, message, consultationDate } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const isConsultation = !!consultationDate;
    const subject = isConsultation 
      ? `Consultation Request: ${name} - ${consultationDate}`
      : `Website Contact: ${name} - ${company ?? ""}`;
    
    const text = isConsultation
      ? `New consultation request\n\nName: ${name}\nEmail: ${email}\nPreferred Date: ${consultationDate}\n\nMessage:\n${message}`
      : `New contact submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company ?? ""}\n\nMessage:\n${message}`;
    
    const html = isConsultation
      ? `<h2>New Consultation Request</h2>\n<ul>\n  <li><strong>Name:</strong> ${name}</li>\n  <li><strong>Email:</strong> ${email}</li>\n  <li><strong>Preferred Date:</strong> ${consultationDate}</li>\n</ul>\n<p><strong>Message:</strong></p>\n<p>${message.replace(/\n/g, "<br />")}</p>`
      : `<p>New contact submission</p>\n<ul>\n  <li><strong>Name:</strong> ${name}</li>\n  <li><strong>Email:</strong> ${email}</li>\n  <li><strong>Company:</strong> ${company ?? ""}</li>\n</ul>\n<p><strong>Message:</strong></p>\n<p>${message.replace(/\n/g, "<br />")}</p>`;

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
        tls: {
          rejectUnauthorized: false, // Accept self-signed certificates in development
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
        tls: {
          rejectUnauthorized: false, // Accept self-signed certificates in development
        },
      });
    }

    const toAddress = process.env.CONTACT_DESTINATION_EMAIL ?? "info@pyrunai.com";

    // Send email to admin
    const mailOptions = {
      from: `${name} <${email}>`,
      to: toAddress,
      subject,
      text,
      html,
    } as const;

    const info = await transporter.sendMail(mailOptions as any);

    // Send confirmation email to user
    const userMailOptions = {
      from: toAddress,
      to: email,
      subject: consultationDate 
        ? `Consultation Request Confirmed - ${consultationDate}`
        : "Thank you for contacting PyrunAi",
      text: consultationDate
        ? `Dear ${name},\n\nThank you for scheduling a consultation with PyrunAi!\n\nWe have received your request for: ${consultationDate}\n\nOur team will contact you shortly to confirm the appointment and discuss your requirements.\n\nBest regards,\nPyrunAi Team\n\nEmail: info@pyrunai.com\nPhone: +91 8180907138`
        : `Dear ${name},\n\nThank you for contacting PyrunAi!\n\nWe have received your message and our team will get back to you within 24 hours.\n\nBest regards,\nPyrunAi Team\n\nEmail: info@pyrunai.com\nPhone: +91 8180907138`,
      html: consultationDate
        ? `<h2>Consultation Request Confirmed</h2><p>Dear ${name},</p><p>Thank you for scheduling a consultation with PyrunAi!</p><p><strong>Requested Date:</strong> ${consultationDate}</p><p>Our team will contact you shortly to confirm the appointment and discuss your requirements.</p><br/><p>Best regards,<br/><strong>PyrunAi Team</strong></p><p>Email: info@pyrunai.com<br/>Phone: +91 8180907138</p>`
        : `<h2>Thank You for Contacting Us</h2><p>Dear ${name},</p><p>Thank you for contacting PyrunAi!</p><p>We have received your message and our team will get back to you within 24 hours.</p><br/><p>Best regards,<br/><strong>PyrunAi Team</strong></p><p>Email: info@pyrunai.com<br/>Phone: +91 8180907138</p>`,
    };

    await transporter.sendMail(userMailOptions as any);

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
