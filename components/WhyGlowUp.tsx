"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Expert Professionals",
    text: "Our experienced beauty professionals understand your individual style and needs.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Premium Products",
    text: "We use carefully selected professional-grade products for every treatment.",
    icon: "♡",
  },
  {
    number: "03",
    title: "Personalized Experience",
    text: "Every appointment is customized to help you achieve the look you actually want.",
    icon: "✧",
  },
  {
    number: "04",
    title: "Relaxing Environment",
    text: "A calm, welcoming studio where you can take a break from your busy routine.",
    icon: "❀",
  },
];

export default function WhyGlowUp() {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll(".reason-item");
            items.forEach((_, index) => {
              setTimeout(() => {
                setVisibleReasons((prev) => [...prev, index]);
              }, index * 150);
            });
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

  return (
    <section
      ref={sectionRef}
      id="why-glowup"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />

        <div className="bg-orb absolute top-[-10%] right-[-5%] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#a87567]/10 blur-[100px] sm:blur-[120px] animate-float-slow" />
        <div className="bg-orb absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#c98f82]/10 blur-[80px] sm:blur-[100px] animate-float-slower" />
        <div className="bg-orb absolute top-[50%] left-[50%] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#b98274]/5 blur-[60px] sm:blur-[80px] animate-float-medium" />

        <div className="absolute inset-0 opacity-30 bg-gradient-to-bl from-[#a87567]/5 via-transparent to-[#c98f82]/5 animate-gradient" />

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
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#a87567]/30 bg-white/5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a87567] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d8a99b] group-hover:text-[#a87567] transition-colors duration-300">
                ✦ Why Choose Us ✦
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Because you deserve</span>
              <br />
              <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
                better.
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-white/50">
              We believe beauty is not about changing who you are.
              It's about helping you feel more confident in the person
              you already are.
            </p>

            <div className="mt-6 sm:mt-8 h-[2px] w-16 sm:w-20 bg-gradient-to-r from-[#a87567]/50 to-transparent" />

            <a
              href="#contact"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#a87567]/40"
            >
              <span>Experience GlowUp</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                →
              </span>
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason.number}
                  className={`reason-item group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-[#a87567]/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#a87567]/5 ${
                    visibleReasons.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{
                    transitionDelay: `${index * 0.12}s`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-bold text-[#a87567]">
                      {reason.number}
                    </span>
                    <span className="text-lg text-[#a87567]/30 group-hover:text-[#a87567]/50 transition-colors duration-300">
                      {reason.icon}
                    </span>
                  </div>

                  <h3 className="relative mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-white/40 group-hover:text-white/50 transition-colors duration-300">
                    {reason.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a87567] to-[#c98f82] group-hover:w-full transition-all duration-700 rounded-full" />
                </div>
              ))}
            </div>
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