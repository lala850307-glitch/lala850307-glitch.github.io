import { useEffect, useRef, useState } from "react";
import { profile } from "@/mocks/resume";


const LINES = ["Hello! I'm", "Layla Tang"];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [revealed, setRevealed] = useState([false, false, false]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const timers = [0, 1, 2].map((i) =>
      setTimeout(() => setRevealed((prev) => { const n = [...prev]; n[i] = true; return n; }), 300 + i * 220)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute z-20 rounded-full"
        style={{
          width: 500, height: 500,
          left: mouse.x - 250, top: mouse.y - 250,
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />
      <Particles />

      {/* Background */}
      <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20minimal%20office%20workspace%20professional%20moody%20atmospheric%20black%20texture%20high%20contrast%20monochrome%20elegant&width=1920&height=1080&seq=layla-hero&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover object-top opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-screen px-8 md:px-16 pb-16 md:pb-24 pt-32">
        <div className="max-w-screen-xl mx-auto w-full">
          {/* Label */}
          <div className="mb-6 overflow-hidden"
            style={{ opacity: revealed[0] ? 1 : 0, transform: revealed[0] ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="inline-block border border-white/40 text-white/70 text-xs tracking-[0.3em] uppercase px-4 py-2">
              Business Analyst · Retail Operations Strategist
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black text-white leading-[0.9] tracking-tighter mb-8 md:mb-10">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className={`block ${i === 1 ? "text-white" : "font-thin text-white/70"}`}
                  style={{
                    transform: revealed[i] ? "translateY(0)" : "translateY(110%)",
                    opacity: revealed[i] ? 1 : 0,
                    transition: `transform 0.85s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease`,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Intro */}
          <div
            className="max-w-2xl mb-10"
            style={{ opacity: revealed[1] ? 1 : 0, transform: revealed[1] ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s" }}
          >
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              {profile.intro}
            </p>
            <p className="text-white/90 text-sm md:text-base font-medium border-l-2 border-white/40 pl-4 italic">
              {profile.tagline}
            </p>
          </div>

          {/* Keywords */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            style={{ opacity: revealed[2] ? 1 : 0, transform: revealed[2] ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s" }}
          >
            {profile.keywords.map((kw) => (
              <span key={kw} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs tracking-wider px-4 py-2 rounded-full">
                {kw}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ opacity: revealed[2] ? 1 : 0, transition: "opacity 0.8s ease 0.65s" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 bg-white text-black text-xs tracking-[0.2em] uppercase px-7 py-3.5 rounded-full hover:bg-white/80 transition-colors duration-300 whitespace-nowrap cursor-pointer relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-black/5 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
              <span className="relative">Contact Me</span>
              <span className="relative group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <button
              onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-white/50 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              View Skills
              <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/20 hero-scroll-line" />
      </div>
    </section>
  );
}

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
  }));
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            animation: `floatParticle ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
