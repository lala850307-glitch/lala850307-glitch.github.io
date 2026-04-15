import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { profile } from "@/mocks/resume";

const HIGHLIGHTS = [
  {
    label: "AI",
    title: "分位數回歸模型",
    desc: "採用 LightGBM 分位數回歸 (P10/P50/P90)，推算市場合理成交底價與風險區間，MAPE 達 11.3%。",
  },
  {
    label: "API",
    title: "政府實價登錄串接",
    desc: "串接內政部實價登錄開放 API，自動化數據清洗與定期更新，確保模型使用最新市場數據。",
  },
  {
    label: "PM",
    title: "專案管理",
    desc: "擔任 PM 角色，運用甘特圖控管 4 人團隊進度，協調數據工程、模型訓練與前端開發三條線並行。",
  },
  {
    label: "WEB",
    title: "動態估價網站",
    desc: "成功將繁雜資料轉化為具備獨立域名的動態估價網站，使用者可即時輸入條件查詢預估房價區間。",
  },
];

const TECH_STACK = [
  { group: "Machine Learning", items: ["LightGBM", "Scikit-learn", "分位數回歸", "特徵工程"] },
  { group: "Data Engineering", items: ["Python", "Pandas", "NumPy", "實價登錄 API"] },
  { group: "Visualization", items: ["Power BI", "Matplotlib", "Seaborn"] },
  { group: "Project Management", items: ["甘特圖", "4人團隊", "Notion"] },
];

function useReveal() {
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
  return { ref, visible };
}

export default function RealEstatePage() {
  const hero = useReveal();
  const highlights = useReveal();
  const tech = useReveal();
  const outcome = useReveal();

  return (
    <main className="w-full min-h-screen bg-[#f5f4f0]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: "90vh" }}>
        {/* Cover image — placeholder, replace later */}
        <img
          src="https://readdy.ai/api/search-image?query=Taiwan%20Taipei%20city%20aerial%20night%20view%20real%20estate%20property%20data%20visualization%20dark%20moody%20cinematic%20minimal%20black&width=1920&height=1080&seq=re-hero&orientation=landscape"
          alt="大台北房地產預測模型"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
          style={{ animation: "kenBurns 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />

        {/* Back button */}
        <div className="absolute top-24 left-8 md:left-16 z-10">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-white/50 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <span>←</span> Back to Projects
          </Link>
        </div>

        {/* Content */}
        <div
          ref={hero.ref}
          className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-20 md:pb-28"
          style={{ minHeight: "90vh" }}
        >
          <div className="max-w-screen-xl mx-auto w-full">
            <div
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              <span className="inline-block border border-white/30 text-white/50 text-xs tracking-[0.3em] uppercase px-4 py-2 mb-6">
                Machine Learning · 2025 · PM Project
              </span>
            </div>

            <div className="overflow-hidden mb-6">
              <h1
                className="text-[clamp(2.5rem,7vw,6.5rem)] font-black text-white leading-[0.9] tracking-tighter"
                style={{
                  transform: hero.visible ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s",
                }}
              >
                大台北房地產<br />
                <span className="font-thin italic text-white/40">價格預測模型</span>
              </h1>
            </div>

            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{
                opacity: hero.visible ? 1 : 0,
                transition: "opacity 0.7s ease 0.7s",
              }}
            >
              {["MAPE 11.3%", "4人團隊", "LightGBM", "獨立域名網站"].map((tag) => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs tracking-wider px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Placeholder notice */}
            <div
              className="inline-flex items-center gap-3 border border-white/20 text-white/40 text-xs tracking-widest uppercase px-6 py-3 rounded-full"
              style={{ opacity: hero.visible ? 1 : 0, transition: "opacity 0.7s ease 0.9s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
              Demo 網站串接中 — Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Overview ── */}
      <section className="w-full bg-[#f5f4f0] py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-black/30 text-xs tracking-[0.4em] uppercase block mb-6">Project Overview</span>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-black leading-tight tracking-tight mb-8">
                將複雜房市數據<br />
                <span className="font-thin italic text-black/40">轉化為決策工具</span>
              </h2>
              <p className="text-black/55 text-base leading-relaxed mb-6">
                作為專案經理 (PM)，我主導這個 4 人跨職能團隊，從數據蒐集、模型訓練到前端部署，完整走完一個 ML 產品的生命週期。
              </p>
              <p className="text-black/55 text-base leading-relaxed">
                核心模型採用 <strong className="text-black font-semibold">LightGBM 分位數回歸</strong>，不只預測單一房價，更輸出 P10/P50/P90 三個信心區間，讓使用者能評估投資風險而非只看均值。最終 MAPE 達 <strong className="text-black font-semibold">11.3%</strong>，並部署為具備獨立域名的動態估價網站。
              </p>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "11.3%", label: "MAPE 預測誤差", sub: "LightGBM 分位數回歸" },
                { value: "4人", label: "跨職能團隊", sub: "PM 角色主導" },
                { value: "P10~P90", label: "風險區間輸出", sub: "三段式信心區間" },
                { value: "獨立域名", label: "動態估價網站", sub: "即時查詢部署" },
              ].map((m, i) => (
                <div
                  key={m.label}
                  className="bg-white rounded-2xl p-6 border border-black/5"
                  style={{
                    opacity: hero.visible ? 1 : 0,
                    transform: hero.visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.6s ease ${i * 100 + 200}ms, transform 0.6s ease ${i * 100 + 200}ms`,
                  }}
                >
                  <div className="text-2xl md:text-3xl font-thin text-black mb-2 tabular-nums">{m.value}</div>
                  <div className="text-black/70 text-sm font-medium mb-1">{m.label}</div>
                  <div className="text-black/30 text-xs">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="w-full bg-black py-24 md:py-32 px-8 md:px-16">
        <div ref={highlights.ref} className="max-w-screen-xl mx-auto">
          <div
            className="mb-16"
            style={{ opacity: highlights.visible ? 1 : 0, transform: highlights.visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase block mb-4">Key Features</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-thin text-white leading-tight tracking-tight">
              專案亮點
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                className="border border-white/10 rounded-2xl p-8 group hover:border-white/30 transition-colors duration-300"
                style={{
                  opacity: highlights.visible ? 1 : 0,
                  transform: highlights.visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                }}
              >
                <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-5">{h.label}</span>
                <h3 className="text-white text-lg font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">{h.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="w-full bg-[#f5f4f0] py-24 md:py-32 px-8 md:px-16">
        <div ref={tech.ref} className="max-w-screen-xl mx-auto">
          <div
            className="mb-16"
            style={{ opacity: tech.visible ? 1 : 0, transform: tech.visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="text-black/30 text-xs tracking-[0.4em] uppercase block mb-4">Tech Stack</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-black leading-tight tracking-tight">
              使用技術
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((group, gi) => (
              <div
                key={group.group}
                className="bg-white rounded-2xl p-6 border border-black/5"
                style={{
                  opacity: tech.visible ? 1 : 0,
                  transform: tech.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${gi * 100}ms, transform 0.6s ease ${gi * 100}ms`,
                }}
              >
                <p className="text-black/30 text-xs tracking-[0.3em] uppercase mb-5">{group.group}</p>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-black/20 shrink-0" />
                      <span className="text-black/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome / Demo placeholder ── */}
      <section className="w-full bg-black py-24 md:py-32 px-8 md:px-16">
        <div ref={outcome.ref} className="max-w-screen-xl mx-auto text-center">
          <div
            style={{ opacity: outcome.visible ? 1 : 0, transform: outcome.visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase block mb-6">Live Demo</span>
            <h2 className="text-[clamp(2rem,5vw,5rem)] font-thin text-white leading-tight tracking-tight mb-6">
              動態估價網站<br />
              <span className="italic text-white/30">串接中</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-12 leading-relaxed">
              Demo 網站即將上線，屆時可直接輸入條件查詢大台北各區房價預估區間與投資風險評分。
            </p>

            {/* Placeholder demo frame */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 mb-12">
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="text-white/20 text-xs ml-3 font-mono tracking-wider">taipei-realestate-predictor.com</span>
              </div>
              <div className="aspect-video bg-[#111] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-s-slash-line text-white/20 text-3xl" />
                  </div>
                  <p className="text-white/20 text-xs tracking-[0.3em] uppercase">Demo 畫面 — 串接後自動顯示</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="nofollow noreferrer"
                className="group inline-flex items-center gap-3 border border-white/30 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-github-line" />
                View on GitHub
              </a>
              <Link
                to="/project"
                className="group inline-flex items-center gap-3 text-white/40 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>←</span> Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
