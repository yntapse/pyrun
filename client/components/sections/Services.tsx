import { useNavigate } from "react-router-dom";
import Reveal from "@/components/ux/Reveal";
import { Button } from "@/components/ui/button";

const products = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    desc: "Custom AI models, NLP, computer vision, and automation to accelerate outcomes.",
    category: "AI/ML",
    icon: "🤖",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    desc: "ETL, dashboards, and insight pipelines to power better decisions.",
    category: "Data Analytics",
    icon: "📊",
  },
  {
    slug: "web-development",
    title: "Web/App Development",
    desc: "Modern, fast web apps and APIs tailored to your business.",
    category: "Web Development",
    icon: "💻",
  },
  {
    slug: "power-bi",
    title: "Power BI Solutions",
    desc: "Interactive BI dashboards and data models for clarity and scale.",
    category: "Power BI",
    icon: "📈",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleLearnMore = (slug: string) => {
    navigate(`/product/${slug}`);
  };

  return (
    <section id="products" className="scroll-mt-24 py-12 md:py-16 bg-white">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert solutions across AI, data, web, and BI to drive measurable
              impact.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={0.06 * i}>
              <div className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition duration-300 hover:shadow-lg hover:border-emerald-200 h-full flex flex-col">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.title}
                </h3>
                <p className="text-xs text-emerald-600 font-medium mt-2 mb-3 uppercase tracking-wide">
                  {product.category}
                </p>
                <p className="mt-2 text-sm text-gray-600 flex-1 leading-relaxed">
                  {product.desc}
                </p>
                <Button
                  onClick={() => handleLearnMore(product.slug)}
                  className="mt-4 text-sm bg-emerald-500 text-white hover:bg-emerald-600"
                >
                  Learn More →
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
