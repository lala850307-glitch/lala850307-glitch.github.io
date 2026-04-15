import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { experiences } from "@/mocks/resume";

export default function ExperienceSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-black py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <div>
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase block mb-4">Career Milestones</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-thin text-white leading-tight tracking-tight">Experience</h2>
          </div>
          <Link
            to="/project"
            className="group inline-flex items-center gap-3 text-white/50 text-sm tracking-[0.2em] uppercase hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="relative border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
              onMouseEnter={() => setHovered(exp.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 bg-white/[0.03] pointer-events-none"
                style={{
                  opacity: hovered === exp.id ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              <div className="relative z-10 p-8 md:p-12">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1 transition-all duration-300"
                      style={{ transform: hovered === exp.id ? "translateX(4px)" : "translateX(0)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-white/50 text-sm tracking-wide">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                    <span className="text-white/60 text-sm font-mono tracking-wider">{exp.period}</span>
                    <span className="text-white/25 text-xs tracking-widest">{exp.stores}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-4">
                      <span className="text-white/20 mt-1 shrink-0 text-xs">•</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {"text" in h && h.text}
                        {"accent" in h && h.accent && (
                          <strong className="text-white font-semibold">{h.accent}</strong>
                        )}
                        {"text2" in h && h.text2}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 text-white/30 text-xs tracking-wider px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
