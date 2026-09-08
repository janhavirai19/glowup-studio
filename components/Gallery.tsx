"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    title: "Hair Transformation",
    category: "Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    title: "Makeup Artistry",
    category: "Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
    title: "Skincare Glow",
    category: "Skincare",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    title: "Bridal Beauty",
    category: "Bridal",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    title: "Spa Wellness",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    title: "Nail Art",
    category: "Nails",
  },
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = document.querySelectorAll(".gallery-image");
            images.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index]);
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
      id="gallery"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a0a0a]" />

        <div className="bg-orb absolute top-[-10%] right-[-5%] h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#a87567]/10 blur-[100px] sm:blur-[120px] animate-float-slow" />
        <div className="bg-orb absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#c98f82]/10 blur-[80px] sm:blur-[100px] animate-float-slower" />
        <div className="bg-orb absolute top-[50%] left-[50%] h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#b98274]/5 blur-[60px] sm:blur-[80px] animate-float-medium" />

        <div className="absolute inset-0 opacity-30 bg-gradient-to-tl from-[#a87567]/5 via-transparent to-[#c98f82]/5 animate-gradient" />

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

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-[#a87567]/30 bg-white/5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a87567] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d8a99b] group-hover:text-[#a87567] transition-colors duration-300">
                ✦ Our Portfolio ✦
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">GlowUp</span>{" "}
              <span className="bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
                Gallery
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-white/50">
            A little inspiration from our studio, our artists and
            our beautiful clients.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 h-[2px] w-16 sm:w-20 bg-gradient-to-r from-[#a87567]/50 to-transparent" />

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`gallery-image relative group overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ${
                visibleImages.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              } ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
    
              <div className="relative p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#a87567]/20 via-[#d8a99b]/10 to-[#a87567]/20 group-hover:from-[#a87567]/40 group-hover:via-[#d8a99b]/30 group-hover:to-[#a87567]/40 transition-all duration-700">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-[280px] sm:h-[320px] md:h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

          
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#a87567] mb-1 sm:mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {image.title}
                    </h3>
                    <a
                      href="#contact"
                      className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#d8a99b] hover:text-white transition-colors duration-300 group/link"
                    >
                      View Project
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                  <div className="absolute -inset-[1px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#a87567]/0 via-[#d8a99b]/0 to-[#a87567]/0 group-hover:from-[#a87567]/40 group-hover:via-[#d8a99b]/30 group-hover:to-[#a87567]/40 transition-all duration-700 blur-[2px] pointer-events-none" />
                </div>
              </div>
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10 text-xs font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[#a87567]/30 bg-white/5 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#a87567]/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#a87567]/10"
          >
            <span>View Full Portfolio</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              →
            </span>
          </a>
          <p className="mt-4 text-xs text-white/30">Explore our latest work</p>
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