"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section id="contact" className="bg-[#f4e7e2] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a87567]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Ready to
              <span className="text-[#a87567]"> Glow?</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-black/55">
              Have questions or ready to book your appointment?
              Fill out the form and our team will get back to you.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-black/40">Visit Us</p>
                <p className="mt-1 font-semibold">
                  123 Glow Street, Pune, Maharashtra
                </p>
              </div>

              <div>
                <p className="text-sm text-black/40">Call Us</p>
                <p className="mt-1 font-semibold">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-sm text-black/40">Email</p>
                <p className="mt-1 font-semibold">
                  hello@glowupstudio.com
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-white p-7 shadow-xl md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#a87567]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#a87567]"
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">
                Service
              </label>

              <select className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 outline-none">
                <option>Hair Styling</option>
                <option>Skin Care</option>
                <option>Makeup</option>
                <option>Nail Care</option>
                <option>Spa & Wellness</option>
                <option>Bridal Glow</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us what you're looking for..."
                className="mt-2 w-full resize-none rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#a87567]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#241c1a] px-6 py-4 font-semibold text-white transition hover:bg-[#a87567]"
            >
              Send Enquiry →
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}