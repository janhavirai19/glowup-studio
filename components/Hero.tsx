"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magicTrails, setMagicTrails] = useState<{ x: number; y: number; id: number; size: number; opacity: number }[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number; id: number; size: number; speedX: number; speedY: number; color: string; life: number }[]>([]);
  const trailIdRef = useRef(0);
  const particleIdRef = useRef(0);

  const words = ["Radiance", "Confidence", "Elegance", "Wellness", "Beauty"];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setTypedText(fullWord.substring(0, typedText.length - 1));
      } else {
        setTypedText(fullWord.substring(0, typedText.length + 1));
      }

      let delta = 150 - Math.random() * 50;
      if (isDeleting) delta /= 2;

      if (!isDeleting && typedText === fullWord) {
        delta = 2000;
        setIsDeleting(true);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      timeout = setTimeout(handleTyping, delta);
    };

    timeout = setTimeout(handleTyping, 500);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, loopNum]);

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.getElementById("stats-section");
      if (stats) {
        const rect = stats.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }

      const scrollY = window.scrollY;
      if (scrollY > 0) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            addMagicTrail(x, y, 15 + Math.random() * 10, 0.6 + Math.random() * 0.3);
          }, i * 50);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addMagicTrail = (x: number, y: number, size: number = 20, opacity: number = 0.8) => {
    setMagicTrails(prev => {
      const newTrail = {
        x,
        y,
        id: trailIdRef.current++,
        size: size,
        opacity: opacity
      };
      const filtered = prev.filter(t => t.id > trailIdRef.current - 20);
      return [...filtered, newTrail];
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      addMagicTrail(e.clientX, e.clientY, 25, 0.9);
      
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 10 + Math.random() * 20;
        setTimeout(() => {
          addMagicTrail(
            e.clientX + Math.cos(angle) * distance,
            e.clientY + Math.sin(angle) * distance,
            8 + Math.random() * 12,
            0.4 + Math.random() * 0.3
          );
        }, i * 20);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#a87567", "#d8a99b", "#c98f82", "#b98274", "#f4e7e2", "#ffd700"];
      setParticles(prev => {
        const newParticle = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          id: particleIdRef.current++,
          size: 2 + Math.random() * 6,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8 - 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 100 + Math.random() * 100
        };
        const filtered = prev.filter(p => p.life > 0);
        return [...filtered, newParticle];
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.speedX,
          y: p.y + p.speedY,
          life: p.life - 1
        })).filter(p => p.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMagicTrails(prev => {
        const filtered = prev.filter(t => t.id > trailIdRef.current - 25);
        return filtered;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] cursor-none"
    >
      <div
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-screen"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          width: 30,
          height: 30,
          background: 'radial-gradient(circle, rgba(168,117,103,0.9) 0%, rgba(216,169,155,0.6) 40%, rgba(168,117,103,0) 70%)',
          boxShadow: '0 0 40px rgba(168,117,103,0.8), 0 0 80px rgba(168,117,103,0.4), 0 0 120px rgba(168,117,103,0.2)',
          transition: 'all 0.05s ease-out',
          transform: 'translate(-50%, -50%) scale(1)',
        }}
      />

      <div
        className="fixed pointer-events-none z-[101] rounded-full border-2 border-[#a87567]/60"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          width: 50,
          height: 50,
          background: 'radial-gradient(circle, rgba(168,117,103,0.2) 0%, rgba(168,117,103,0) 70%)',
          boxShadow: '0 0 60px rgba(168,117,103,0.3), inset 0 0 60px rgba(168,117,103,0.1)',
          transition: 'all 0.15s ease-out',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse-ring 2s ease-in-out infinite'
        }}
      />

      <div
        className="fixed pointer-events-none z-[99] rounded-full border border-[#a87567]/20"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          width: 80,
          height: 80,
          transition: 'all 0.2s ease-out',
          transform: 'translate(-50%, -50%)',
          animation: 'spin-slow 10s linear infinite'
        }}
      />

      {magicTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[98] rounded-full"
          style={{
            left: trail.x,
            top: trail.y,
            width: trail.size * (1 - index / 25),
            height: trail.size * (1 - index / 25),
            background: `radial-gradient(circle, rgba(168,117,103,${trail.opacity * (1 - index / 25)}) 0%, rgba(216,169,155,${trail.opacity * 0.5 * (1 - index / 25)}) 40%, rgba(168,117,103,0) 70%)`,
            transform: 'translate(-50%, -50%) scale(1)',
            filter: `blur(${index * 0.5}px)`,
            boxShadow: `0 0 ${20 + index * 2}px rgba(168,117,103,${0.3 * (1 - index / 25)})`,
            transition: 'all 0.05s ease-out',
            opacity: 1 - index / 25
          }}
        />
      ))}

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 20px ${p.color}60, 0 0 40px ${p.color}30`,
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: p.life / 200 + 0.2,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a1a] animate-gradient" />
        
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#a87567]/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#c98f82]/15 blur-[100px] animate-float-slower" />
        <div className="absolute top-[40%] left-[50%] h-[400px] w-[400px] rounded-full bg-[#b98274]/10 blur-[100px] animate-float-medium" />
        
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,117,103,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,117,103,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }} 
        />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[80vh]">
          
          <div className="order-2 lg:order-1">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#a87567]/30 bg-white/5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#a87567] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d8a99b] group-hover:text-[#a87567] transition-colors duration-300">
                ✦ Luxury Beauty Studio ✦
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">Your Glow.</span>
              <br />
              <span className="text-white">Your</span>{" "}
              <span className="relative inline-block bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] bg-clip-text text-transparent animate-gradient-text">
                Story.
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 h-[2px] sm:h-[3px] w-full rounded-full bg-gradient-to-r from-[#a87567] via-[#d8a99b] to-[#a87567] animate-pulse" />
                <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-xl sm:text-2xl animate-sparkle">✦</span>
              </span>
            </h1>

            <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="text-base sm:text-lg md:text-xl font-semibold text-white/60">Discover</span>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#a87567] to-[#d8a99b] bg-clip-text text-transparent min-w-[70px] sm:min-w-[90px] md:min-w-[120px]">
                {typedText}
                <span className="inline-block h-4 w-0.5 sm:h-5 md:h-6 bg-[#a87567] animate-blink ml-0.5"></span>
              </span>
            </div>

            <p className="mt-4 sm:mt-5 md:mt-7 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/50">
              Step into a world where luxury meets transformation.
              Experience premium beauty treatments crafted to reveal
              your most radiant self.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-9 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group relative rounded-full bg-gradient-to-r from-[#a87567] to-[#c98f82] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-medium text-white shadow-xl shadow-[#a87567]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#a87567]/40 overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Book Your Glow
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                    →
                  </span>
                </span>
                <span className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000" />
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/5 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/40 hover:shadow-xl w-full sm:w-auto text-center"
              >
                Explore Services
              </a>
            </div>

            <div
              id="stats-section"
              className={`mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="group cursor-default">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-[#a87567] group-hover:to-[#d8a99b] transition-all duration-300">
                  5K+
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/40">Happy Clients</p>
              </div>

              <div className="h-8 sm:h-10 md:h-12 w-px bg-white/10" />

              <div className="group cursor-default">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-[#a87567] group-hover:to-[#d8a99b] transition-all duration-300">
                  4.9<span className="text-[#a87567]">★</span>
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/40">Average Rating</p>
              </div>

              <div className="h-8 sm:h-10 md:h-12 w-px bg-white/10" />

              <div className="group cursor-default">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-[#a87567] group-hover:to-[#d8a99b] transition-all duration-300">
                  8+
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/40">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="absolute inset-[-15%] sm:inset-[-20%] rounded-full border border-[#a87567]/10 animate-spin-slow" />
            <div className="absolute inset-[-5%] sm:inset-[-10%] rounded-full border border-[#a87567]/5 animate-spin-slower" />
            
            <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-[#a87567]/30 via-[#d8a99b]/20 to-transparent blur-2xl sm:blur-3xl animate-pulse" />

            <div className="group relative overflow-hidden rounded-[30px] sm:rounded-[36px] md:rounded-[42px] border border-white/20 bg-white/5 p-1.5 sm:p-2 shadow-2xl shadow-[#a87567]/10 backdrop-blur-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-[#a87567]/30">
              <div className="overflow-hidden rounded-[24px] sm:rounded-[30px] md:rounded-[36px] relative">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85"
                  alt="GlowUp Studio beauty salon"
                  className="h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px] xl:h-[580px] w-full object-cover transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-1.5 sm:inset-2 rounded-[24px] sm:rounded-[30px] md:rounded-[36px] bg-gradient-to-t from-black/50 via-transparent to-white/10" />
                <div className="absolute top-0 left-[-100%] h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[200%] transition-all duration-1000" />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 md:-bottom-7 md:-left-4 rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 p-3 sm:p-4 md:p-5 shadow-2xl backdrop-blur-xl animate-float">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#a87567] to-[#d8a99b] text-base sm:text-lg md:text-xl shadow-lg">
                  ✦
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-white/40">
                    Your beauty destination
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold text-white">
                    Feel • Look • Glow
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-6 sm:-right-3 sm:top-8 md:-right-5 md:top-10 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 shadow-xl backdrop-blur-xl animate-float-delayed">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm md:text-base animate-sparkle">✨</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white whitespace-nowrap">Premium Beauty</span>
              </div>
            </div>

            <div className="absolute top-[40%] -left-4 sm:-left-5 md:-left-6 lg:-left-8 rounded-full border border-white/20 bg-white/10 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 shadow-lg backdrop-blur-md animate-float-medium hidden sm:block">
              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-white/70">✦ Top Rated</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
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
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(200%) rotate(12deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out 1.5s infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 6s linear infinite; }
        .animate-shimmer-delayed { animation: shimmer 6s linear 3s infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 25s linear infinite; }
        .animate-gradient { animation: gradient 15s ease infinite; background-size: 400% 400%; }
        .animate-gradient-text { animation: gradient-text 3s ease infinite; background-size: 200% 200%; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}