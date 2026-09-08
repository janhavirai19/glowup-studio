const testimonials = [
  {
    name: "Aarohi",
    text: "Absolutely loved my experience at GlowUp! The team understood exactly what I wanted.",
  },
  {
    name: "Riya",
    text: "The atmosphere is beautiful and the service is even better. My new go-to beauty studio.",
  },
  {
    name: "Ananya",
    text: "I booked the Signature Glow package and honestly felt like a completely new person!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fffaf8] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
            Client Love
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            What They Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="text-lg tracking-widest">
                ★★★★★
              </div>

              <p className="mt-6 leading-8 text-black/60">
                "{review.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ead5ce] font-bold text-[#8d6257]">
                  {review.name[0]}
                </div>

                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-black/40">
                    Verified Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}