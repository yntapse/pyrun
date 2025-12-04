import Reveal from "@/components/ux/Reveal";

const testimonials = [
  {
    name: "Kelsey Allen",
    role: "The EXP Firm",
    content:
      "PyrunAi Services revolutionized our operations with their AI-driven strategies and healthcare dashboard, delivering efficiency and milestones we never imagined.",
    image:
      "/images/kelsy.png",
    company: "The EXP Firm",
    website: "https://www.pyrunai.com",
  },
  {
    name: "Shaun Ram",
    role: "Malaysia",
    content:
      "PyrunAi's ATS dashboard made hiring effortless and strategic. I gained clarity and confidence in recruitment decisions like never before.",
    image:
      "/images/ke2.png",
    company: "Malaysia",
  },
  {
    name: "Tony",
    role: "Business Owner",
    content:
      "PyrunAi empowered us to dream big and provided the financial intelligence tools to make those dreams a reality. We feel more confident and inspired than ever.",
    image:
      "/images/tony.png",
    company: "Enterprise",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-12 md:py-16 bg-white">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Leading Enterprises
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how organizations are transforming their operations with our
              platform.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={0.06 * i}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 p-8 transition hover:shadow-lg">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-emerald-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
