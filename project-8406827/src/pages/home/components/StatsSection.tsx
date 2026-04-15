import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/mocks/resume";

function StatItem({ value, label, delay, started }: { value: string; label: string; delay: number; started: boolean }) {
  const numericMatch = value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.replace(/^[^\d]*[\d.]+/, "");
  const count = useCountUp(Math.round(numeric), 1600, started);

  return (
    <div
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div className="text-[clamp(2rem,4.5vw,3.5rem)] font-thin text-white leading-none mb-3 tabular-nums">
        {prefix}{started ? count : numeric}{suffix}
      </div>
      <div className="text-white/30 text-xs tracking-[0.25em] uppercase">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-black py-20 md:py-28 px-8 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} delay={i * 120} started={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
