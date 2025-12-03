import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Testimonials from "@/components/sections/Testimonials";
import Executives from "@/components/sections/Executives";
import Contact from "@/components/sections/Contact";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to hash if coming from navigation (not initial page load)
    if (location.hash && location.state) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-background">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Executives />
      <Blog />
      <Contact />
    </div>
  );
}
