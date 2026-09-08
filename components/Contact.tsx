"use client";
import { FormEvent, useState, useRef, useEffect } from "react";
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Hair Styling",
    message: "",
  });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.05;

        const bgOrbs = sectionRef.current.querySelectorAll(".bg-orb");
        bgOrbs.forEach((orb, i) => {
          (orb as HTMLElement).style.transform = `translateY(${offset * (i + 1) * 0.3}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("✨ Thank you! We will contact you shortly.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        service: "Hair Styling",
        message: "",
      });
    }, 1500);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 md:py-32"
    >      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />
        <div className="bg-orb absolute top-[-10%] left-[-5%] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#a87567]/10 blur-[100px] sm:blur-[120px] animate-float-slow" />
        <div className="bg-orb absolute bottom-[-10%] right-[-5%] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#c98f82]/10 blur-[80px] sm:blur-[100px] animate-float-slower" />
        <div className="bg-orb absolute top-[50%] left-[50%] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#b98274]/5 blur-[60px] sm:blur-[80px] animate-float-medium" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 animate-gradient" />
        <div
          className="absolute inset-0 opacity-[0.03] sm:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,117,103,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,117,103,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          <div className="absolute top-0 left-[-100%] h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#a87567]/30 bg-white/5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a87567] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d8a99b] group-hover:text-[#a87567] transition-colors duration-300">
                ✦ Get In Touch ✦
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Ready to</span>{" "}
              <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
                Glow?
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-6 sm:leading-8 text-white/50">
              Have questions or ready to book your appointment?
              Fill out the form and our team will get back to you.
            </p>
            <div className="mt-6 sm:mt-8 h-[2px] w-16 sm:w-20 bg-gradient-to-r from-[#a87567]/50 to-transparent" />
            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#a87567]/20 hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#a87567]/20 to-[#c98f82]/10 text-[#d8a99b] group-hover:from-[#a87567] group-hover:to-[#c98f82] group-hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">Visit Us</p>
                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                    123 Glow Street, Pune, Maharashtra
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#a87567]/20 hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#a87567]/20 to-[#c98f82]/10 text-[#d8a99b] group-hover:from-[#a87567] group-hover:to-[#c98f82] group-hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">Call Us</p>
                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#a87567]/20 hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#a87567]/20 to-[#c98f82]/10 text-[#d8a99b] group-hover:from-[#a87567] group-hover:to-[#c98f82] group-hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30">Email</p>
                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                    hello@glowupstudio.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl shadow-[#a87567]/5 transition-all duration-500 hover:shadow-[#a87567]/10"
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 opacity-50" />
              <div className="relative mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Book Your Appointment
                </h3>
                <p className="mt-1 text-sm text-white/40">
                  Fill in the details and we'll get back to you
                </p>
              </div>

              <div className="relative space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-white/60">
                      Your Name <span className="text-[#a87567]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#a87567] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,117,103,0.1)]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/60">
                      Phone <span className="text-[#a87567]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#a87567] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,117,103,0.1)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/60">
                    Service <span className="text-[#a87567]">*</span>
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#a87567] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,117,103,0.1)]"
                  >
                    <option value="Hair Styling">✦ Hair Styling</option>
                    <option value="Skin Care">♡ Skin Care</option>
                    <option value="Makeup">✧ Makeup</option>
                    <option value="Nail Care">◌ Nail Care</option>
                    <option value="Spa & Wellness">☼ Spa & Wellness</option>
                    <option value="Bridal Glow">❀ Bridal Glow</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-white/60">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#a87567] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,117,103,0.1)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-6 py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#a87567]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </span>
                  <span className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000" />
                </button>
                <p className="text-center text-xs text-white/20">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(200%) rotate(12deg); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-gradient-text { animation: gradient-text 3s ease infinite; background-size: 200% 200%; }
        .animate-gradient { animation: gradient 15s ease infinite; background-size: 400% 400%; }
        .animate-shimmer { animation: shimmer 6s linear infinite; }
      `}</style>
    </section>
  );
}