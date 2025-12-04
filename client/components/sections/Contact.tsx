import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ux/Reveal";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const fd = new FormData(e.currentTarget);
      const body = Object.fromEntries(fd.entries());

      const res = await fetch("https://pyrun-2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to send");

      const data = await res.json();
      setStatus("success");
      // clear form
      formRef.current?.reset();

      // Log details for debugging
      if (data?.previewUrl) {
        console.info("📧 Email preview URL:", data.previewUrl);
      }
      console.info("📨 Email sent:", {
        mode: data?.usingSmtp ? "SMTP (production)" : "Ethereal (test/dev)",
        destination: data?.destination,
        previewUrl: data?.previewUrl,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container grid gap-8 lg:grid-cols-3 items-start">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Started Today
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a demo to see how we can transform your data operations.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  required
                  name="name"
                  placeholder="John Doe"
                  className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Company Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Company</label>
                <input
                  name="company"
                  placeholder="Company Name"
                  className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 bg-emerald-500 text-white hover:bg-emerald-600 h-11 text-base font-semibold"
                >
                  {status === "sending" ? "Sending..." : "Schedule Demo"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-emerald-600">Thanks — we received your message.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">Failed to send. Try again later.</p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="bg-white rounded-lg border border-gray-200 p-8 sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:info@pyrunai.com" className="text-lg font-semibold text-blue-600 hover:underline">info@pyrunai.com</a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Phone</p>
                <a href="tel:+918180907138" className="text-lg font-semibold text-blue-600 hover:underline">+91 8180907138</a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Our Offices</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 font-medium">🇮🇳 India</p>
                    <p className="text-sm text-gray-600">Nashik, Maharashtra</p>
                    <div className="border-b border-gray-200 mt-3"></div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">🇺🇸 USA</p>
                    <p className="text-sm text-gray-600">Manhattan, New York</p>
                    <div className="border-b border-gray-200 mt-3"></div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">🇮🇪 Ireland</p>
                    <p className="text-sm text-gray-600">Dublin</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">Serving global enterprises</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"></p>
                <a href="https://www.linkedin.com/company/109349964/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"></a>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900"><span className="font-semibold">Response time:</span> Within 24 hours</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-white rounded-lg border border-gray-200 p-8 sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119994.89308641857!2d73.68777044999999!3d20.0110624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb96ebd97b1f%3A0x933b62096f6187c8!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nashik Location"
              ></iframe>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Headquarters:</span> Nashik, Maharashtra, India
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
