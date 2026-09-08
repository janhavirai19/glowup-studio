"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "gallery", "pricing", "testimonials", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-[#a87567]/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a
            href="#home"
            className="group relative text-2xl sm:text-3xl font-bold tracking-tight transition-all duration-300"
          >
            <span className="text-white">Glow</span>
            <span className="bg-gradient-to-r from-[#a87567] to-[#c98f82] bg-clip-text text-transparent">
              Up
            </span>
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a87567] to-[#c98f82] group-hover:w-full transition-all duration-500" />
          </a>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/10 shadow-lg shadow-[#a87567]/5"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <>
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82]" />
                    <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#a87567]/10 to-[#c98f82]/10 blur-sm" />
                  </>
                )}
              </a>
            ))}

            <a
              href="#contact"
              className="group ml-2 relative overflow-hidden rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-5 lg:px-7 py-2.5 lg:py-3 text-sm font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#a87567]/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Now
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  →
                </span>
              </span>
              <span className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#a87567]/30 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  open ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-40 h-full w-[85%] max-w-sm bg-gradient-to-b from-[#0a0a0a] to-[#1a0a0a] border-l border-white/10 shadow-2xl shadow-[#a87567]/10 transition-all duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6 pt-24">
          <div className="mb-8">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Glow</span>
              <span className="bg-gradient-to-r from-[#a87567] to-[#c98f82] bg-clip-text text-transparent">
                Up
              </span>
            </span>
            <p className="mt-1 text-[10px] text-white/30 tracking-widest">
              LUXURY BEAUTY STUDIO
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-6 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`group relative px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/10 shadow-lg shadow-[#a87567]/5"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a87567] animate-pulse" />
                  )}
                </span>
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#a87567] to-[#c98f82]" />
                )}
              </a>
            ))}
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-6 py-4 text-center font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#a87567]/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Appointment
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000" />
          </a>

          <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
            <p className="text-xs text-white/20">123 Glow Street, Pune</p>
            <p className="text-xs text-white/20">+91 98765 43210</p>
            <p className="text-xs text-white/20">Mon-Sat: 9:00 AM - 9:00 PM</p>
            
            <div className="flex gap-2 pt-2">
              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/20 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567]"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/20 transition-all duration-300 hover:border-[#a87567]/30 hover:bg-[#a87567]/10 hover:text-[#a87567]"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}