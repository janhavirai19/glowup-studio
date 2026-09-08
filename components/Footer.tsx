"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] right-[-20%] h-[400px] w-[400px] rounded-full bg-[#a87567]/5 blur-[100px]" />
        <div className="absolute bottom-[-50%] left-[-20%] h-[300px] w-[300px] rounded-full bg-[#c98f82]/5 blur-[80px]" />
        <div className="absolute top-[30%] left-[50%] h-[200px] w-[200px] rounded-full bg-[#b98274]/3 blur-[60px]" />
      
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,117,103,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,117,103,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
        
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="group inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#a87567] to-[#c98f82] text-white shadow-lg shadow-[#a87567]/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#a87567]/40">
                <span className="text-sm sm:text-base">✦</span>
              </div>
              <div>
                <span className="text-white">Glow</span>
                <span className="bg-gradient-to-r from-[#a87567] to-[#c98f82] bg-clip-text text-transparent">
                  Up
                </span>
                <span className="block mt-0.5 h-[2px] w-0 bg-gradient-to-r from-[#a87567] to-[#c98f82] group-hover:w-full transition-all duration-500" />
              </div>
            </a>
            <p className="mt-3 sm:mt-4 max-w-xs text-sm text-white/30 leading-relaxed">
              Beauty, wellness and confidence — all under one roof. 
              Your glow journey starts here.
            </p>
            
            <div className="mt-4 sm:mt-6 flex gap-2.5">
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567] hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567] hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567] hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567] hover:-translate-y-0.5"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.244 3.768-5.486 0-2.867-2.06-4.873-5.008-4.873-3.41 0-5.409 2.559-5.409 5.198 0 1.03.394 2.131.889 2.732.098.119.112.224.084.345-.091.378-.293 1.194-.332 1.361-.052.215-.174.262-.394.158-1.472-.686-2.392-2.834-2.392-4.558 0-3.712 2.696-7.122 7.778-7.122 4.082 0 7.257 2.909 7.257 6.799 0 4.059-2.558 7.324-6.108 7.324-1.193 0-2.314-.62-2.698-1.351 0 0-.588 2.246-.732 2.795-.266 1.024-.988 2.304-1.471 3.085.75.231 1.532.353 2.337.353 6.621 0 11.988-5.367 11.988-11.987C23.988 5.367 18.62 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {["Home", "Services", "Gallery", "Pricing", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-sm text-white/30 transition-all duration-300 hover:text-[#d8a99b]"
                  >
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 text-[#a87567]">✦</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                "Hair Styling",
                "Skin Care",
                "Makeup",
                "Nail Care",
                "Spa & Wellness",
                "Bridal Glow",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/30 transition-all duration-300 hover:text-[#d8a99b]"
                  >
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 text-[#a87567]">✦</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/30">
                <span className="mt-0.5 text-[#a87567]">✦</span>
                <span>123 Glow Street, Pune, Maharashtra</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/30">
                <span className="mt-0.5 text-[#a87567]">✦</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/30">
                <span className="mt-0.5 text-[#a87567]">✦</span>
                <span>hello@glowupstudio.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/30">
                <span className="mt-0.5 text-[#a87567]">✦</span>
                <span>Mon-Sat: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h4 className="text-sm font-semibold text-white">
                Subscribe to our newsletter
              </h4>
              <p className="text-xs text-white/30">
                Get exclusive offers and beauty tips
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("✨ Thank you for subscribing!");
              }}
              className="flex w-full max-w-sm gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#a87567] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,117,103,0.1)]"
              />
              <button
                type="submit"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#a87567]/40"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/20">
              © {currentYear} GlowUp Studio. All rights reserved by <span className="text-[#a87567]">Janhavi Rai</span>.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/20">
              <a href="#" className="transition-all duration-300 hover:text-[#a87567] hover:underline underline-offset-2">
                Privacy Policy
              </a>
              <span className="text-white/10">|</span>
              <a href="#" className="transition-all duration-300 hover:text-[#a87567] hover:underline underline-offset-2">
                Terms of Service
              </a>
              <span className="text-white/10">|</span>
              <a href="#" className="transition-all duration-300 hover:text-[#a87567] hover:underline underline-offset-2">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}