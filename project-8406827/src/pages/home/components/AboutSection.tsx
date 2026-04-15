import { useEffect, useRef, useState } from "react";
import { coreTraits } from "@/mocks/resume";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="skills" className="w-full bg-[#f5f4f0] py-24 md:py-36 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <span className="text-black/30 text-xs tracking-[0.4em] uppercase block mb-4">Core Traits / 核心特質</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-black leading-tight tracking-tight">
            What drives<br />
            <span className="font-thin italic text-black/40">my work.</span>
          </h2>
        </div>

        {/* Traits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreTraits.map((trait, i) => (
            <div
              key={trait.title}
              className="bg-white rounded-2xl p-8 border border-black/5 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center mb-6">
                <span className="text-black/20 text-xs font-mono tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-base font-bold text-black mb-4 tracking-tight">{trait.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{trait.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
