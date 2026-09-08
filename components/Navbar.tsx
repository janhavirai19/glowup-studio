"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#fffaf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight"
        >
          Glow<span className="text-[#a87567]">Up</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm hover:text-[#a87567]">
            Home
          </a>

          <a href="#services" className="text-sm hover:text-[#a87567]">
            Services
          </a>

          <a href="#gallery" className="text-sm hover:text-[#a87567]">
            Gallery
          </a>

          <a href="#pricing" className="text-sm hover:text-[#a87567]">
            Pricing
          </a>

          <a href="#contact" className="text-sm hover:text-[#a87567]">
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#241c1a] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#a87567]"
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#fffaf8] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>
            <a href="#pricing" onClick={() => setOpen(false)}>
              Pricing
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}