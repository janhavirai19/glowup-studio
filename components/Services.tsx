const services = [
  {
    icon: "✦",
    title: "Hair Styling",
    description:
      "Cuts, styling, coloring and treatments designed around your personality.",
  },
  {
    icon: "♡",
    title: "Skin Care",
    description:
      "Relaxing facials and advanced skincare treatments for healthy glowing skin.",
  },
  {
    icon: "✧",
    title: "Makeup",
    description:
      "Professional makeup looks for parties, weddings, shoots and special occasions.",
  },
  {
    icon: "◌",
    title: "Nail Care",
    description:
      "Beautiful manicures and nail treatments with attention to every detail.",
  },
  {
    icon: "☼",
    title: "Spa & Wellness",
    description:
      "Relax your body and refresh your mind with our premium wellness treatments.",
  },
  {
    icon: "❀",
    title: "Bridal Glow",
    description:
      "Complete bridal beauty packages created for your most special day.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
            What We Offer
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Beauty, Your Way
          </h2>

          <p className="mt-5 text-black/60">
            Everything you need to look good, feel good and glow with
            confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-black/5 bg-[#fffaf8] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead5ce] text-2xl text-[#8d6257]">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-black/55">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-semibold text-[#a87567]"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}