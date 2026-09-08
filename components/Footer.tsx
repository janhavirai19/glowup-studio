export default function Footer() {
  return (
    <footer className="bg-[#181211] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-8 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold">
              Glow<span className="text-[#d8b5aa]">Up</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
              Beauty, wellness and confidence — all under one roof.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-white/60">
            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#services" className="hover:text-white">
              Services
            </a>

            <a href="#gallery" className="hover:text-white">
              Gallery
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/40">
          © 2026 GlowUp Studio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}