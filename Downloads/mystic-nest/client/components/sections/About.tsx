import Reveal from "@/components/ux/Reveal";

export default function About() {
  const advantages = [
    {
      title: "Proven Expertise",
      desc: "Certified AI/ML engineers, BI specialists and full-stack developers with deep industry experience.",
    },
    {
      title: "Enterprise Grade",
      desc: "Secure, scalable platforms designed for mission-critical operations and future-ready architectures.",
    },
    {
      title: "Fast Implementation",
      desc: "Accelerated implementation with minimal disruption to your existing workflows.",
    },
    {
      title: "24/7 Support",
      desc: "24/7 monitoring and dedicated assistance to ensure peak performance and reliability.",
    },
  ];

  return (
    <section id="solutions" className="scroll-mt-24 py-16 md:py-24 bg-gray-50">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Enterprises Trust PyrunAi for Digital Transformation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We deliver intelligent, scalable solutions that transform businesses through AI, analytics and modern development.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-8 md:p-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver creative and effective Solutions strategies tailored to our clients’ needs.
To build lasting relationships with our clients through exceptional service and results.

To foster a collaborative and inclusive work environment for our team.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Data-Driven
                </h4>
                <p className="text-gray-600 text-sm">
                  Decisions powered by advanced analytics and actionable insights.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scalable</h4>
                <p className="text-gray-600 text-sm">
                  Solutions designed to grow with your business and adapt to future needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure</h4>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade security and compliance.Enterprise-grade security and compliance at every level.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
