import { useEffect, useRef, useState } from "react";
import { profile } from "@/mocks/resume";

const visions = [
  {
    term: "短期目標",
    title: "數據驅動決策",
    desc: "運用大數據工具建置即時視覺化決策儀表板，將複雜數據轉譯為前線能執行的降本增效策略。",
  },
  {
    term: "中長期目標",
    title: "AI 生態整合",
    desc: "實現技術研發與商業實績的深度對齊，成為能將數據產值最大化的技術領導者。",
  },
];

const CTA_LINES = [
  { text: "Let's work", bold: true },
  { text: "together.", italic: true },
];

export default function CtaSection() {
  const [visible, setVisible] = useState(false);
  const [lineRevealed, setLineRevealed] = useState([false, false]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timers = CTA_LINES.map((_, i) =>
      setTimeout(() => setLineRevealed((prev) => { const n = [...prev]; n[i] = true; return n; }), 200 + i * 180)
    );
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <>
      {/* Career Vision */}
      <section className="w-full bg-black py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div
            className="text-center mb-16"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase block mb-4">Career Vision</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-thin text-white leading-tight tracking-tight">
              Where I&apos;m<br />
              <span className="italic text-white/30">headed.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visions.map((v, i) => (
              <div
                key={v.term}
                className="border border-white/10 rounded-2xl p-8 md:p-10 group hover:border-white/30 transition-colors duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                }}
              >
                <span className="text-white/25 text-xs tracking-[0.3em] uppercase block mb-4">{v.term}</span>
                <h3 className="text-white text-xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ref} className="w-full bg-[#f5f4f0] py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">

          {/* Portrait photo — B&W, cropped to half-head */}
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-16 bg-black"
            style={{
              height: "500px",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.96)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            <img
              src="https://res.cloudinary.com/dtspydnpm/image/upload/f_auto,q_auto/431CB924-40A7-48CE-BC21-411DBE210517_fxfedv"
              alt="Layla Tang"
              style={{
                position: "absolute",
                top: "-5%",
                left: "0%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "115%",
                objectFit: "cover",
                objectPosition: "top center",
                filter: "grayscale(100%) contrast(1.2) brightness(0.7)",
                animation: visible ? "kenBurns 18s ease-in-out infinite alternate" : "none",
              }}
            />
            {/* Bottom fade into section bg */}
            <div
              className="absolute left-0 right-0 bottom-0"
              style={{
                height: "55%",
                background: "linear-gradient(to top, #f5f4f0 0%, rgba(245,244,240,0.6) 45%, transparent 100%)",
              }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.38) 100%)" }}
            />
            {/* Marquee */}
            <div className="absolute bottom-6 left-0 right-0 overflow-hidden pointer-events-none">
              <div className="whitespace-nowrap animate-marquee flex gap-16">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <span key={idx} className="text-black/10 text-xs tracking-[0.6em] uppercase">
                    Business Analytics · Retail Operations · Data Engineering · AI Solutions ·
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA text */}
          <div className="text-center">
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-tight tracking-tight mb-4">
              {CTA_LINES.map((line, i) => (
                <span key={line.text} className="block overflow-hidden">
                  <span
                    className={`block ${line.bold ? "font-bold text-black" : "font-thin italic text-black/30"}`}
                    style={{
                      transform: lineRevealed[i] ? "translateY(0)" : "translateY(110%)",
                      opacity: lineRevealed[i] ? 1 : 0,
                      transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
                    }}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h2>

            <p
              className="text-black/40 text-sm mb-10 max-w-md mx-auto"
              style={{ opacity: lineRevealed[1] ? 1 : 0, transition: "opacity 0.7s ease 0.4s" }}
            >
              歡迎洽談合作機會、數據分析專案或任何商業策略需求。
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{
                opacity: lineRevealed[1] ? 1 : 0,
                transform: lineRevealed[1] ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
              }}
            >
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 bg-black text-white text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-black/80 transition-colors duration-300 cursor-pointer whitespace-nowrap relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
                <span className="relative">Email Me</span>
                <span className="relative group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="nofollow noreferrer"
                className="group inline-flex items-center gap-3 border border-black text-black text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-github-line" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
