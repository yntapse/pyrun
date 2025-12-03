import Reveal from "@/components/ux/Reveal";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Manufacturing Optimization",
    industry: "Manufacturing",
    challenge: "Reduce equipment downtime and maintenance costs",
    solution:
      "Implemented predictive maintenance using sensor data and ML models",
    result: "35% reduction in downtime, $2M annual savings",
    impact: "Efficiency",
  },
  {
    title: "Retail Analytics",
    industry: "Retail",
    challenge: "Real-time inventory and sales visibility",
    solution: "Built enterprise BI dashboards with automated alerts",
    result: "20% inventory improvement, faster decision-making",
    impact: "Analytics",
  },
  {
    title: "Financial Risk Intelligence",
    industry: "Finance",
    challenge: "Complex risk assessment across portfolios",
    solution: "AI-powered decision intelligence platform",
    result: "40% faster risk evaluation, enhanced compliance",
    impact: "Decision Intelligence",
  },
];

export default function Portfolio() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how enterprises transform their operations with our solutions.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.title} delay={i * 0.06}>
              <article className="group bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 p-6 transition hover:shadow-lg hover:border-blue-200 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {study.impact}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {study.title}
                </h3>

                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Challenge
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Solution
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {study.solution}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded p-3 border border-green-200">
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                      Result
                    </p>
                    <p className="text-sm text-green-900 font-semibold mt-1">
                      {study.result}
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-gray-200 text-emerald-600 hover:bg-emerald-50 text-sm"
                >
                  Read Full Case Study →
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
