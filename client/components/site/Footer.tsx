const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F2c0f175112574a688331f4867144b1a6?format=webp&width=64";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-400">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company Name */}
          <div>
            <div className="mb-4">
              <img src={LOGO_URL} alt="PyrunAi Services" className="h-12 w-12 rounded mb-3" />
            </div>
            <h3 className="font-semibold text-white mb-2">PyrunAi Services</h3>
            <p className="text-sm">Smart services. Balanced lives.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/" className="hover:text-white transition">
                • Home
              </a>
              <a href="#about" className="hover:text-white transition">
                • About Us
              </a>
              <a href="#products" className="hover:text-white transition">
                • Services
              </a>
              <a href="#contact" className="hover:text-white transition">
                • Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+917972959441"
                  className="hover:text-white transition"
                >
                  📞 ‪+91-7972959441‬
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@pyrunai.com"
                  className="hover:text-white transition"
                >
                  📧 info@pyrunai.com
                </a>
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-2">Address</h4>
              <p className="text-sm">India, Maharashtra, Nashik </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href="https://www.linkedin.com/company/pyrunai-services"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                • LinkedIn
              </a>
              <a
                href="https://www.instagram.com/pyrunai_services?igsh=MW9kZWsyZWI4YmdoaA=="
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                • Instagram
              </a>
              <a
                href="https://www.upwork.com/agencies/1979170626525317058/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                • Upwork
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 PyrunAi Services. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
