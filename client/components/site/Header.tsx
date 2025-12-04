import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import Reveal from "@/components/ux/Reveal";
import { useState } from "react";

const nav = [
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Our Services" },
  { href: "#leadership-team", label: "Leadership Team" },
  { href: "#resources", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-16 items-center justify-between">
        <Reveal delay={0.35}>
          <Logo />
        </Reveal>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-50"
          >
            <a href="#contact">Schedule Demo</a>
          </Button>
          <Button
            asChild
            className="bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <a href="https://www.upwork.com/agencies/pyrunai/" target="_blank" rel="noopener noreferrer">Connect Upwork</a>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base py-1 text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-emerald-500/30 text-emerald-600"
              >
                <a href="#contact">Schedule Demo</a>
              </Button>
              <Button
                asChild
                className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                <a href="https://www.upwork.com/agencies/pyrunai/" target="_blank" rel="noopener noreferrer">Connect Upwork</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
