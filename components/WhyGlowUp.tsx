const reasons = [
  {
    number: "01",
    title: "Expert Professionals",
    text: "Our experienced beauty professionals understand your individual style and needs.",
  },
  {
    number: "02",
    title: "Premium Products",
    text: "We use carefully selected professional-grade products for every treatment.",
  },
  {
    number: "03",
    title: "Personalized Experience",
    text: "Every appointment is customized to help you achieve the look you actually want.",
  },
  {
    number: "04",
    title: "Relaxing Environment",
    text: "A calm, welcoming studio where you can take a break from your busy routine.",
  },
];

export default function WhyGlowUp() {
  return (
    <section className="bg-[#241c1a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b5aa]">
              Why GlowUp
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Because you deserve
              <span className="text-[#d8b5aa]"> better.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/60">
              We believe beauty is not about changing who you are.
              It's about helping you feel more confident in the person
              you already are.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-semibold text-[#241c1a]"
            >
              Experience GlowUp
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.number} className="border-t border-white/10 pt-6">
                <span className="text-sm text-[#d8b5aa]">
                  {reason.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-white/50">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}