import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-400">
      <div className="container py-12 grid gap-10 md:grid-cols-5">
        <div>
          <div className="mb-4">
            <Logo className="brightness-0 invert" />
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Enterprise AI and data analytics platform transforming business
            decisions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Products</h3>
          <nav className="flex flex-col gap-3">
            <a href="#products" className="text-sm hover:text-white transition">
              Agentic AI
            </a>
            <a href="#products" className="text-sm hover:text-white transition">
              Decision Intelligence
            </a>
            <a href="#products" className="text-sm hover:text-white transition">
              Data Backbone
            </a>
            <a href="#products" className="text-sm hover:text-white transition">
              Automation Suite
            </a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Solutions</h3>
          <nav className="flex flex-col gap-3">
            <a
              href="#solutions"
              className="text-sm hover:text-white transition"
            >
              By Industry
            </a>
            <a
              href="#solutions"
              className="text-sm hover:text-white transition"
            >
              By Use Case
            </a>
            <a
              href="#how-it-works"
              className="text-sm hover:text-white transition"
            >
              Case Studies
            </a>
            <a
              href="#resources"
              className="text-sm hover:text-white transition"
            >
              Resources
            </a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <nav className="flex flex-col gap-3">
            <a href="#about" className="text-sm hover:text-white transition">
              About Us
            </a>
            <a href="#contact" className="text-sm hover:text-white transition">
              Contact
            </a>
            <a href="#contact" className="text-sm hover:text-white transition">
              Careers
            </a>
            <a href="#contact" className="text-sm hover:text-white transition">
              Blog
            </a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
          <div className="space-y-2 text-sm">
            <p>
              <a
                href="mailto:info@pyrunai.com"
                className="hover:text-white transition"
              >
                info@pyrunai.com
              </a>
            </p>
            <p>
              <a
                href="tel:+918180907138"
                className="hover:text-white transition"
              >
                +91 8180907138
              </a>
            </p>
            <p>Nashik, India</p>
            <p className="pt-2">
              <a
                href="https://www.linkedin.com/company/109349964/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition font-medium"
              >
                LinkedIn →
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pyrun AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
