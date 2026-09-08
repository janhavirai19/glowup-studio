const plans = [
  {
    name: "Essential Glow",
    price: "₹999",
    description: "Perfect for your regular beauty routine.",
    features: [
      "Hair Styling",
      "Basic Facial",
      "Manicure",
      "Beauty Consultation",
    ],
  },
  {
    name: "Signature Glow",
    price: "₹1,999",
    description: "Our most popular complete beauty experience.",
    features: [
      "Premium Hair Styling",
      "Luxury Facial",
      "Manicure + Pedicure",
      "Makeup Touch-Up",
      "Head Massage",
    ],
    popular: true,
  },
  {
    name: "Ultimate Glow",
    price: "₹3,999",
    description: "A complete premium transformation experience.",
    features: [
      "Hair Spa",
      "Advanced Facial",
      "Manicure + Pedicure",
      "Professional Makeup",
      "Full Body Spa",
      "Personal Consultation",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
            Packages
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Choose Your Glow
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-[#241c1a] text-white shadow-2xl"
                  : "border border-black/10 bg-[#fffaf8]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-[#ead5ce] px-4 py-2 text-xs font-bold text-[#241c1a]">
                  MOST POPULAR
                </span>
              )}

              <p
                className={`text-sm ${
                  plan.popular ? "text-white/60" : "text-black/50"
                }`}
              >
                {plan.name}
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                {plan.price}
              </h3>

              <p
                className={`mt-4 ${
                  plan.popular ? "text-white/60" : "text-black/55"
                }`}
              >
                {plan.description}
              </p>

              <div className="my-8 h-px bg-current opacity-10" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-6 py-4 text-center font-semibold ${
                  plan.popular
                    ? "bg-white text-[#241c1a]"
                    : "bg-[#241c1a] text-white"
                }`}
              >
                Book Package
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}