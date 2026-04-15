import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/mocks/resume";

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const [activeGroup, setActiveGroup] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const current = skillGroups.find((g) => g.id === activeGroup) ?? skillGroups[0];

  return (
    <section id="experience" ref={ref} className="w-full bg-[#f5f4f0] py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <div>
            <span className="text-black/30 text-xs tracking-[0.4em] uppercase block mb-4">Technical Expertise</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-black leading-tight tracking-tight">Skills</h2>
          </div>
          <p className="text-black/40 text-sm max-w-xs leading-relaxed">
            跨越商業分析、AI 工程與零售營運的複合技能組合。
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className="flex gap-2 mb-10 flex-wrap"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
        >
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeGroup === g.id
                  ? "bg-black text-white"
                  : "border border-black/20 text-black/50 hover:border-black/50 hover:text-black"
              }`}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div
          className="border-t border-black/10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.3s" }}
        >
          <div className="py-10">
            <p className="text-black/30 text-xs tracking-[0.3em] uppercase mb-8">// {current.categoryEn}</p>
            <div className="flex flex-wrap gap-3">
              {current.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="group relative border border-black/10 bg-white rounded-xl px-6 py-4 hover:border-black hover:bg-black transition-all duration-300 cursor-default"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.5s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms, background 0.3s, border-color 0.3s`,
                  }}
                >
                  <span className="text-sm font-medium text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
