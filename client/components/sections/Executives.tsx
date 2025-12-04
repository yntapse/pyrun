import Reveal from "@/components/ux/Reveal";

const executives = [
  {
    name: "Niraj Bhavsar",
    role: "Founder",
    bio: "Niraj Bhavsar, Founder of PyrunAi Services, leads with a strong vision for AI-driven growth. His leadership empowers teams to turn data into real business impact.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F3343258175734c8c910f67a735acc43f?format=webp&width=200",
  },
  {
    name: "Rushikesh Kunde",
    role: "Co-Founder",
    bio: "Rushikesh Kunde, Co-Founder of PyrunAi Services, leads with strong analytical insight. He turns data into clear, actionable business decisions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2Fbef7aea6cd564fb083c4a6390d3997b6?format=webp&width=200",
  },
  {
    name: "Vijay H",
    role: "Co-Founder",
    bio: "Vijay H, Co-Founder of PyrunAi Services, leads with expertise in Power BI solutions. He specializes in creating clear, impactful dashboards for smarter decisions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F3134e5195a08438eba3d5c3e4114944e?format=webp&width=200",
  },
  {
    name: "Piyush Kadam",
    role: "Chief Executive Officer",
    bio: "Piyush Kadam, CEO of PyrunAi Services, leads with expertise in Power BI and data analytics.He drives clarity, precision and insight-based decision-making.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F07219d94f8a74a40af789e460df025f9?format=webp&width=200",
  },
  {
    name: "Uday Bari",
    role: "Chief Operations Officer",
    bio: "Uday Bari, COO of PyrunAi Services, leads operations with strong cloud engineering expertise. He ensures smooth, efficient and scalable delivery.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2Fa9802190262b43fc905443194e138aeb?format=webp&width=200",
  },
  {
    name: "Yash Tapase",
    role: "Chief Technology Officer",
    bio: "Yash Tapase, CTO of PyrunAi Services, excels in Data Science, AI/ML and software development. He drives smart, scalable tech solutions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F51a0cb2b3bed46839f135551fa05ec5e?format=webp&width=200",
  },
];

export default function Executives() {
  return (
    <section id="about" className="scroll-mt-24 py-12 md:py-16 bg-gray-50">
      <div className="container">
        {/* About PyrunAI Services Section */}
        <Reveal>
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About PyrunAI Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PyrunAI Services is a technology partner focused on building intelligent, scalable, and secure solutions that drive business optimization. We help organizations reduce costs, streamline operations, and accelerate innovation through data and AI, modern app and web development, and robust engineering practices.
            </p>
          </div>
        </Reveal>

        {/* Leadership Team Section */}
        <div id="leadership-team" className="scroll-mt-24">
          <Reveal>
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Leadership Team
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Industry veterans committed to transforming enterprise data and
                AI.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec, i) => (
            <Reveal key={exec.name} delay={0.06 * i}>
              <div className="bg-white rounded-lg border border-gray-200 p-6 transition hover:shadow-lg h-full">
                <div className="mb-4">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {exec.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3">
                  {exec.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
