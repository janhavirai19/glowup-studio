export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f4e7e2]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 md:grid-cols-2">

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
            Beauty • Wellness • Confidence
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Your Glow.
            <br />
            Your <span className="text-[#a87567]">Story.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
            Step into GlowUp Studio, where beauty meets confidence.
            Discover premium beauty treatments designed to make you
            feel your absolute best.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#241c1a] px-7 py-4 font-medium text-white transition hover:-translate-y-1"
            >
              Book Your Glow
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#241c1a] px-7 py-4 font-medium transition hover:bg-[#241c1a] hover:text-white"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-sm text-black/50">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.9★</h3>
              <p className="text-sm text-black/50">Average Rating</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">8+</h3>
              <p className="text-sm text-black/50">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
              alt="GlowUp Studio"
              className="h-[550px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm text-black/50">Your beauty destination</p>
            <p className="mt-1 font-bold">Feel • Look • Glow</p>
          </div>
        </div>

      </div>
    </section>
  );
}