import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ux/Reveal";

interface ProductInfo {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  features: string[];
  useCases: string[];
  technologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
  images: {
    main: string;
    gallery: string[];
  };
  video?: string;
  demoLink?: string;
  documentationLink?: string;
  color: string;
}

const productData: Record<string, ProductInfo> = {
  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Custom AI models, NLP, computer vision, and automation to accelerate outcomes.",
    longDescription:
      "Our AI and Machine Learning solutions leverage cutting-edge algorithms and deep learning frameworks to solve complex business challenges. From predictive analytics to natural language processing, we build intelligent systems that learn and adapt to your specific needs.",
    icon: "🤖",
    category: "AI/ML",
    features: [
      "Custom ML models tailored to your data",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics and forecasting",
      "Automated decision systems",
      "Real-time model inference",
      "Model monitoring and optimization",
      "Explainable AI interpretability",
    ],
    useCases: [
      "Predictive maintenance for equipment",
      "Customer behavior prediction",
      "Fraud detection systems",
      "Image recognition and classification",
      "Sentiment analysis",
      "Recommendation engines",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "AWS SageMaker",
    ],
    results: [
      { metric: "Accuracy Improvement", value: "95%+" },
      { metric: "Processing Time Reduction", value: "70%" },
      { metric: "Cost Savings", value: "$2M+" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1677442d019cecf8f7b84b87e90e3305d9ae5e8e?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1677442d019cecf8f7b84b87e90e3305d9ae5e8e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      ],
    },
    video: "/videos/aiml.mp4",
    demoLink: "https://example.com/ai-demo",
    documentationLink: "https://docs.example.com/ai-ml",
    color: "blue",
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data Analytics",
    description:
      "ETL, dashboards, and insight pipelines to power better decisions.",
    longDescription:
      "Transform raw data into actionable insights with our comprehensive data analytics platform. We design and implement scalable data pipelines, interactive dashboards, and analytics solutions that help you make data-driven decisions.",
    icon: "📊",
    category: "Data Analytics",
    features: [
      "ETL pipeline design and implementation",
      "Data warehouse architecture",
      "Real-time analytics dashboards",
      "Data quality monitoring",
      "Advanced analytics and modeling",
      "Data visualization",
      "Self-service BI tools",
      "Data governance frameworks",
    ],
    useCases: [
      "Sales and revenue analytics",
      "Customer analytics and segmentation",
      "Operational metrics tracking",
      "Market trend analysis",
      "Performance dashboards",
      "Cohort analysis",
    ],
    technologies: [
      "SQL",
      "Python",
      "Apache Spark",
      "Tableau",
      "Power BI",
      "Airflow",
      "Snowflake",
    ],
    results: [
      { metric: "Query Performance", value: "10x faster" },
      { metric: "Data Pipeline Uptime", value: "99.9%" },
      { metric: "Decision Time", value: "4x reduction" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
      ],
    },
    video: "/videos/aiml.mp4",
    demoLink: "https://example.com/analytics-demo",
    documentationLink: "https://docs.example.com/analytics",
    color: "purple",
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    description: "Modern, fast web apps and APIs tailored to your business.",
    longDescription:
      "We build scalable, high-performance web applications and APIs using modern technologies and best practices. Our solutions are designed for reliability, security, and optimal user experience.",
    icon: "💻",
    category: "Web Development",
    features: [
      "Full-stack web applications",
      "RESTful and GraphQL APIs",
      "Progressive Web Apps (PWAs)",
      "Responsive design",
      "Single Page Applications (SPAs)",
      "Server-side rendering",
      "Real-time features with WebSockets",
      "Mobile-optimized interfaces",
    ],
    useCases: [
      "Enterprise dashboards",
      "E-commerce platforms",
      "SaaS applications",
      "Real-time collaboration tools",
      "Content management systems",
      "Mobile applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Next.js",
    ],
    results: [
      { metric: "Page Load Time", value: "<1s" },
      { metric: "Uptime", value: "99.99%" },
      { metric: "User Satisfaction", value: "4.9/5" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=400&h=300&fit=crop",
      ],
    },
    video: "/videos/aiml.mp4",
    demoLink: "https://example.com/web-demo",
    documentationLink: "https://docs.example.com/web",
    color: "green",
  },
  "power-bi": {
    slug: "power-bi",
    title: "Power BI Solutions",
    description:
      "Interactive BI dashboards and data models for clarity and scale.",
    longDescription:
      "Unlock the full potential of Microsoft Power BI with our expert solutions. We design and develop enterprise-grade BI solutions that transform complex data into compelling visual stories.",
    icon: "📈",
    category: "Power BI",
    features: [
      "Custom Power BI dashboards",
      "Advanced DAX formulas",
      "Data modeling optimization",
      "Real-time data integration",
      "Row-level security (RLS)",
      "Paginated reports",
      "Mobile BI apps",
      "Performance optimization",
    ],
    useCases: [
      "Executive KPI dashboards",
      "Sales performance tracking",
      "Financial reporting",
      "Inventory management",
      "HR analytics",
      "Operational metrics",
    ],
    technologies: [
      "Power BI",
      "DAX",
      "M Language",
      "SQL Server",
      "Azure Analysis Services",
    ],
    results: [
      { metric: "Dashboard Load Time", value: "<2s" },
      { metric: "User Adoption", value: "95%+" },
      { metric: "Insights Generated", value: "+40%" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1612900895297-1d34f4d2d55f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1612900895297-1d34f4d2d55f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=400&h=300&fit=crop",
      ],
    },
    video: "/videos/aiml.mp4",
    demoLink: "https://example.com/powerbi-demo",
    documentationLink: "https://docs.example.com/powerbi",
    color: "yellow",
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? productData[slug] : null;

  useEffect(() => {
    // Only scroll to top on initial load, not on back navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white border-b border-gray-200">
        <div className="container">
          <Button
            onClick={() => navigate("/#products", { state: { fromProduct: true } })}
            variant="outline"
            className="mb-6 border-gray-300"
          >
            ← Back to Services
          </Button>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{product.icon}</span>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                  {product.category}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {product.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Image and Overview */}
      <section className="py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              {product.video ? (
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto"
                  poster={product.images.main}
                >
                  <source src={product.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={product.images.main}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.longDescription}
              </p>
              <div className="space-y-3">
                {product.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, i) => (
              <Reveal key={feature} delay={0.06 * i}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Robust {product.category.toLowerCase()} capability
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Use Cases
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.useCases.map((useCase, i) => (
              <Reveal key={useCase} delay={0.06 * i}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {useCase}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Proven solution for {useCase.toLowerCase()}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Results & Impact
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {product.results.map((result, i) => (
              <Reveal key={result.metric} delay={0.06 * i}>
                <div className="bg-white rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {result.metric}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Gallery</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {product.images.gallery.map((image, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img
                    src={image}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Technologies Used
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.technologies.map((tech, i) => (
              <Reveal key={tech} delay={0.06 * i}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-center justify-between hover:shadow-lg transition">
                  <span className="font-semibold text-gray-900">{tech}</span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's explore how {product.title} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {product.demoLink && (
                <Button
                  asChild
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  <a href={product.demoLink} target="_blank" rel="noreferrer">
                    View Demo
                  </a>
                </Button>
              )}
              {product.documentationLink && (
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-emerald-600/20"
                >
                  <a
                    href={product.documentationLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read Documentation
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-emerald-600/20"
              >
                <a href="/#contact">Schedule Consultation</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
