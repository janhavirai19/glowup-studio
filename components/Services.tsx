"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "✦",
    title: "Hair Styling",
    description:
      "Cuts, styling, coloring and treatments designed around your personality.",
    color: "from-[#a87567] to-[#c98f82]",
  },
  {
    icon: "♡",
    title: "Skin Care",
    description:
      "Relaxing facials and advanced skincare treatments for healthy glowing skin.",
    color: "from-[#d8a99b] to-[#a87567]",
  },
  {
    icon: "✧",
    title: "Makeup",
    description:
      "Professional makeup looks for parties, weddings, shoots and special occasions.",
    color: "from-[#c98f82] to-[#b98274]",
  },
  {
    icon: "◌",
    title: "Nail Care",
    description:
      "Beautiful manicures and nail treatments with attention to every detail.",
    color: "from-[#b98274] to-[#a87567]",
  },
  {
    icon: "☼",
    title: "Spa & Wellness",
    description:
      "Relax your body and refresh your mind with our premium wellness treatments.",
    color: "from-[#a87567] to-[#d8a99b]",
  },
  {
    icon: "❀",
    title: "Bridal Glow",
    description:
      "Complete bridal beauty packages created for your most special day.",
    color: "from-[#c98f82] to-[#a87567]",
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
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
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offset = scrollY * 0.1;
        
        const orbs = sectionRef.current.querySelectorAll(".orb");
        orbs.forEach((orb, i) => {
          (orb as HTMLElement).style.transform = `translateY(${offset * (i + 1) * 0.2}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />

        <div className="orb absolute top-[-10%] left-[-5%] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#a87567]/10 blur-[100px] sm:blur-[120px] animate-float-slow" />
        <div className="orb absolute bottom-[-10%] right-[-5%] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#c98f82]/10 blur-[80px] sm:blur-[100px] animate-float-slower" />
        <div className="orb absolute top-[50%] left-[50%] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#b98274]/5 blur-[60px] sm:blur-[80px] animate-float-medium" />

        <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-[#a87567]/5 via-transparent to-[#c98f82]/5 animate-gradient" />

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
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#a87567]/30 bg-white/5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a87567] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d8a99b] group-hover:text-[#a87567] transition-colors duration-300">
              ✦ Premium Services ✦
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Beauty,</span>{" "}
            <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
              Your Way
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/50 max-w-xl mx-auto">
            Everything you need to look good, feel good and glow with
            confidence.
          </p>

          <div className="mt-6 sm:mt-8 mx-auto h-[2px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#a87567]/50 to-transparent" />
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#a87567]/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#a87567]/10 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/0 via-[#a87567]/0 to-[#a87567]/0 group-hover:from-[#a87567]/30 group-hover:via-[#d8a99b]/20 group-hover:to-[#a87567]/30 transition-all duration-700 blur-[1px]" />

              <div
                className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} text-xl sm:text-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#a87567]/30`}
              >
                {service.icon}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="relative mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="relative mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-white/50 group-hover:text-white/60 transition-colors duration-300">
                {service.description}
              </p>

              <a
                href="#contact"
                className="relative mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a87567] group-hover:text-[#d8a99b] transition-all duration-300 group-hover:gap-3"
              >
                Learn More
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  →
                </span>
              </a>

              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-gradient-to-r from-[#a87567] to-[#c98f82] group-hover:w-1/2 transition-all duration-700 -translate-x-1/2 rounded-full" />

              <div className="absolute top-4 right-4 text-xs font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[#a87567]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#a87567]/40"
          >
            <span>Book Your Experience</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              →
            </span>
          </a>
          <p className="mt-4 text-xs text-white/30">Start your glow journey today</p>
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