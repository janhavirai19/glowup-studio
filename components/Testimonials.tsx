"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Aarohi",
    text: "Absolutely loved my experience at GlowUp! The team understood exactly what I wanted.",
    rating: 5,
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Riya",
    text: "The atmosphere is beautiful and the service is even better. My new go-to beauty studio.",
    rating: 5,
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ananya",
    text: "I booked the Signature Glow package and honestly felt like a completely new person!",
    rating: 5,
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll(".testimonial-card");
            items.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTestimonials((prev) => [...prev, index]);
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

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
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
              ✦ Client Love ✦
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">What</span>{" "}
            <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
              They Say
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/50 max-w-xl mx-auto">
            Real stories from real people who trusted us with their beauty journey.
          </p>

          <div className="mt-6 sm:mt-8 mx-auto h-[2px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#a87567]/50 to-transparent" />
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <div
              key={review.name}
              className={`testimonial-card group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#a87567]/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#a87567]/5 ${
                visibleTestimonials.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/5 via-transparent to-[#c98f82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/0 via-[#a87567]/0 to-[#a87567]/0 group-hover:from-[#a87567]/20 group-hover:via-[#d8a99b]/10 group-hover:to-[#a87567]/20 transition-all duration-700 blur-[1px]" />

              <div className="relative flex items-center gap-1 text-lg sm:text-xl text-[#a87567]">
                {renderStars(review.rating)}
                <span className="text-sm text-white/20 ml-2">({review.rating}.0)</span>
              </div>

              <div className="relative mt-3 text-4xl text-[#a87567]/10 font-serif">
                "
              </div>

              <p className="relative mt-[-8px] text-sm sm:text-base leading-6 sm:leading-7 text-white/60 group-hover:text-white/70 transition-colors duration-300">
                {review.text}
              </p>

              <div className="relative mt-6 sm:mt-8 flex items-center gap-4">
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-[#a87567]/20 group-hover:border-[#a87567]/40 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#a87567] border-2 border-[#0a0a0a]" />
                </div>

                <div>
                  <p className="font-semibold text-white group-hover:text-[#d8a99b] transition-colors duration-300">
                    {review.name}
                  </p>
                  <p className="text-xs text-white/30">
                    {review.location} • Verified Client
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-gradient-to-r from-[#a87567] to-[#c98f82] group-hover:w-1/2 transition-all duration-700 -translate-x-1/2 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <span className="text-lg sm:text-xl text-[#a87567]">★</span>
            <span className="text-xs sm:text-sm text-white/40">
              Rated <span className="text-white font-semibold">4.9</span> out of 5.0
            </span>
            <span className="text-lg sm:text-xl text-[#a87567]">★</span>
          </div>
          <p className="mt-4 text-xs text-white/30">Join our happy clients today</p>
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