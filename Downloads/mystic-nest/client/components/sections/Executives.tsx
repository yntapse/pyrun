import Reveal from "@/components/ux/Reveal";

const executives = [
  {
    name: "Niraj Bhavsar",
    role: "Founder & CEO",
    bio: "Former VP of AI at leading tech company with 15+ years in enterprise solutions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F3343258175734c8c910f67a735acc43f?format=webp&width=200",
  },
  {
    name: "Rushikesh Kunde",
    role: "VP Engineering",
    bio: "10+ years building scalable ML platforms. Former Google engineer specializing in distributed systems.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2Fbef7aea6cd564fb083c4a6390d3997b6?format=webp&width=200",
  },
  {
    name: "Vijay H",
    role: "VP of Sales & Partnerships",
    bio: "Brings 12 years of enterprise sales experience. Expert in strategic partnerships and customer success.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F3134e5195a08438eba3d5c3e4114944e?format=webp&width=200",
  },
  {
    name: "Piyush Kadam",
    role: "VP Product & Operations",
    bio: "8+ years in product strategy at Fortune 500 companies. Expertise in data-driven product development.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F07219d94f8a74a40af789e460df025f9?format=webp&width=200",
  },
  {
    name: "Uday Bari",
    role: "Chief Operations Officer",
    bio: "Operations leader focused on building scalable infrastructure and customer success systems.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2Fa9802190262b43fc905443194e138aeb?format=webp&width=200",
  },
  {
    name: "Yash Tapase",
    role: "Chief Technology Officer",
    bio: "Leading technical architecture and innovation. 9+ years building enterprise data systems.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F51a0cb2b3bed46839f135551fa05ec5e?format=webp&width=200",
  },
];

export default function Executives() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24 bg-gray-50">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Industry veterans committed to transforming enterprise data and
              AI.
            </p>
          </div>
        </Reveal>
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
