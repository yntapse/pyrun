import Reveal from "@/components/ux/Reveal";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Implementing Agentic AI for Enterprise Automation",
    date: "Sep 2025",
    category: "AI",
    excerpt:
      "A comprehensive guide to deploying autonomous AI agents that learn and adapt to your business processes.",
    readTime: "8 min",
  },
  {
    title: "Building Reliable Data Pipelines at Scale",
    date: "Aug 2025",
    category: "Data Engineering",
    excerpt:
      "Best practices for designing ETL pipelines that handle millions of records with fault tolerance and monitoring.",
    readTime: "6 min",
  },
  {
    title: "Decision Intelligence: From Data to Decisions",
    date: "Jul 2025",
    category: "Business Intelligence",
    excerpt:
      "How to build decision intelligence systems that provide real-time insights to executives and operators.",
    readTime: "10 min",
  },
];

export default function Blog() {
  return (
    <section id="resources" className="scroll-mt-24 py-12 md:py-16 bg-white">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Resources & Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn from industry experts about AI, data, and analytics best
              practices.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <a
                href="#contact"
                className="block bg-white rounded-lg border border-gray-200 p-6 transition hover:shadow-lg hover:border-blue-200 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {post.readTime} read
                  </span>
                  <span className="text-blue-600 font-semibold text-sm">
                    Read →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-2 h-auto text-base"
            >
              <a href="#contact">View All Articles</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
