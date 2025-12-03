import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const allProjects: Project[] = [
  {
    id: "1",
    title: "Credit Card Financial Analysis",
    description:
      "Comprehensive financial analysis dashboard with revenue insights by demographics, salary groups, and behavioral patterns. Features advanced segmentation and customer profiling.",
    category: "Data",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F528e295264584555850310d72d50941b?format=webp&width=600",
  },
  {
    id: "2",
    title: "Uber Trip Analysis Report",
    description:
      "Complete trip analysis platform with vehicle type breakdown, booking trends, customer insights, and interactive visualizations for market intelligence.",
    category: "Data",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2Fb0cf887967dd436482dd2d217ea2210b?format=webp&width=600",
  },
  {
    id: "3",
    title: "Deepfake Detection System",
    description:
      "Advanced AI software using deep learning models to accurately detect and classify real vs fake images with high precision for security applications.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Customer Interactive Chatbot",
    description:
      "Intelligent chatbot solution for customer engagement featuring natural language processing and real-time interaction capabilities for seamless support.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Retail E-Commerce Platforms",
    description:
      "Custom website development for retail businesses including clothing stores and hardware shops with inventory management and point-of-sale integration.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Predictive Maintenance System",
    description:
      "ML-powered predictive maintenance platform for industrial equipment. Reduced downtime by 40% with sensor data and advanced ML models.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceCategory?: string;
}

export function PortfolioModal({
  isOpen,
  onClose,
  serviceCategory,
}: PortfolioModalProps) {
  const [randomProjects, setRandomProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (isOpen) {
      setRandomProjects(allProjects);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
        <div
          className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 flex items-center justify-between border-b bg-white p-6">
            <div>
              <h2 className="text-2xl font-bold">Our Projects</h2>
              <p className="text-sm text-foreground/70 mt-1">
                {serviceCategory
                  ? `Projects in ${serviceCategory}`
                  : "Featured work across all categories"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-foreground/10 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {randomProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden border bg-white hover:shadow-lg transition"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-primary/10 to-[hsl(var(--brand-green))/0.1]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-foreground/70">
                        {project.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="mt-4 w-fit bg-gradient-to-r from-primary to-[hsl(var(--brand-green))] text-white hover:from-primary/90 hover:to-[hsl(var(--brand-green))]/90"
                    >
                      <a href="#contact" onClick={onClose}>
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-6 bg-gradient-to-r from-primary/5 to-[hsl(var(--brand-green))/0.05]">
            <p className="text-sm text-foreground/70 mb-4">
              Ready to discuss your project? Let's connect!
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-[hsl(var(--brand-green))] text-white hover:from-primary/90 hover:to-[hsl(var(--brand-green))]/90"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
