"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Essential Glow",
    price: "₹999",
    description: "Perfect for your regular beauty routine.",
    features: [
      "Hair Styling",
      "Basic Facial",
      "Manicure",
      "Beauty Consultation",
    ],
    icon: "✦",
  },
  {
    name: "Signature Glow",
    price: "₹1,999",
    description: "Our most popular complete beauty experience.",
    features: [
      "Premium Hair Styling",
      "Luxury Facial",
      "Manicure + Pedicure",
      "Makeup Touch-Up",
      "Head Massage",
    ],
    popular: true,
    icon: "♡",
  },
  {
    name: "Ultimate Glow",
    price: "₹3,999",
    description: "A complete premium transformation experience.",
    features: [
      "Hair Spa",
      "Advanced Facial",
      "Manicure + Pedicure",
      "Professional Makeup",
      "Full Body Spa",
      "Personal Consultation",
    ],
    icon: "✧",
  },
];

export default function Pricing() {
  const [visiblePlans, setVisiblePlans] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const plans = document.querySelectorAll(".pricing-card");
            plans.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePlans((prev) => [...prev, index]);
              }, index * 200);
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
      id="pricing"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />

        <div className="bg-orb absolute top-[-10%] left-[-5%] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#a87567]/10 blur-[100px] sm:blur-[120px] animate-float-slow" />
        <div className="bg-orb absolute bottom-[-10%] right-[-5%] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#c98f82]/10 blur-[80px] sm:blur-[100px] animate-float-slower" />
        <div className="bg-orb absolute top-[50%] left-[50%] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#b98274]/5 blur-[60px] sm:blur-[80px] animate-float-medium" />

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
              ✦ Pricing Plans ✦
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Choose Your</span>{" "}
            <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
              Glow
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/50 max-w-xl mx-auto">
            Select the perfect package that fits your beauty needs and budget.
          </p>

          <div className="mt-6 sm:mt-8 mx-auto h-[2px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#a87567]/50 to-transparent" />
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] ${
                plan.popular
                  ? "border-[#a87567]/30 bg-white/10 shadow-2xl shadow-[#a87567]/10 hover:shadow-[#a87567]/20"
                  : "hover:border-[#a87567]/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#a87567]/5"
              } ${
                visiblePlans.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className={`absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/0 via-[#a87567]/0 to-[#a87567]/0 transition-all duration-700 blur-[1px] ${
                  plan.popular
                    ? "group-hover:from-[#a87567]/40 group-hover:via-[#d8a99b]/30 group-hover:to-[#a87567]/40"
                    : "group-hover:from-[#a87567]/20 group-hover:via-[#d8a99b]/10 group-hover:to-[#a87567]/20"
                }`}
              />

              {plan.popular && (
                <div className="absolute -top-3 right-4 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#a87567]/30">
                    <span className="animate-pulse">✦</span>
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#a87567] to-[#c98f82] text-white shadow-lg shadow-[#a87567]/30"
                    : "bg-gradient-to-br from-[#a87567]/20 to-[#c98f82]/10 text-[#d8a99b] group-hover:from-[#a87567] group-hover:to-[#c98f82] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#a87567]/20"
                }`}
              >
                {plan.icon}
              </div>

              <p
                className={`relative mt-4 sm:mt-5 text-sm font-semibold uppercase tracking-[0.15em] ${
                  plan.popular ? "text-[#d8a99b]" : "text-white/40"
                }`}
              >
                {plan.name}
              </p>

              <h3
                className={`relative mt-1 sm:mt-2 text-3xl sm:text-4xl font-bold ${
                  plan.popular ? "text-white" : "text-white/80"
                }`}
              >
                {plan.price}
                <span className="text-sm font-normal text-white/30 ml-1">/session</span>
              </h3>

              <p
                className={`relative mt-3 sm:mt-4 text-sm ${
                  plan.popular ? "text-white/60" : "text-white/40"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`relative my-6 sm:my-8 h-px ${
                  plan.popular ? "bg-gradient-to-r from-[#a87567]/50 to-[#c98f82]/50" : "bg-white/10"
                }`}
              />

              <ul className="relative space-y-3 sm:space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      plan.popular ? "text-white/70" : "text-white/50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-[#a87567]" : "text-[#a87567]/50"
                      }`}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative mt-6 sm:mt-8 block w-full rounded-full px-6 py-3.5 sm:py-4 text-center text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#a87567] to-[#c98f82] text-white shadow-lg shadow-[#a87567]/20 hover:shadow-2xl hover:shadow-[#a87567]/40"
                    : "border border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:shadow-xl"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Book Package
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>

              <div className="absolute bottom-4 right-4 text-xs font-bold text-white/10">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-xs sm:text-sm text-white/30">
            All packages include free consultation. Custom packages available upon request.
          </p>
          <a
            href="#contact"
            className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#a87567] hover:text-[#d8a99b] transition-colors duration-300 group"
          >
            Need a custom plan?
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
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