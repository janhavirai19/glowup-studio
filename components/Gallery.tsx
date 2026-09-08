const images = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#f7efec] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
              Our Work
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              GlowUp Gallery
            </h2>
          </div>

          <p className="max-w-md text-black/55">
            A little inspiration from our studio, our artists and
            our beautiful clients.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className={`group overflow-hidden rounded-3xl ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <img
                src={image}
                alt={`GlowUp gallery ${index + 1}`}
                className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}