import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ProjectModal from "./components/ProjectModal";
import { projects, profile } from "@/mocks/resume";

const VIDEO_URL = "https://storage.readdy-site.link/project_files/a713b50e-f6ea-4b8a-8a59-49e71ed6b3f7/cd7097be-8494-4601-b66f-4499670fea52_-2026-04-14-20-35-54.mp4?v=aaa6bda96de3b076dd3a6eb5fb8e547e";

// Attach video to project id=2
const projectsWithVideo = projects.map((p) =>
  p.id === 2 ? { ...p, videoUrl: VIDEO_URL } : { ...p, videoUrl: undefined }
);

const categories = ["All", "Machine Learning", "Data Engineering", "Business Analytics", "Data Visualization"];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<typeof projectsWithVideo[0] | null>(null);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? projectsWithVideo
      : projectsWithVideo.filter((p) => p.category === activeCategory);

  const handleCardClick = (project: typeof projectsWithVideo[0]) => {
    // Project 1 → dedicated detail page
    if (project.id === 1) {
      navigate("/project/real-estate");
      return;
    }
    // Project 2 (video) → modal
    if (project.videoUrl || project.highlights.length > 0) {
      setModalProject(project);
    }
  };

  const handleVideoHover = (entering: boolean) => {
    if (videoPreviewRef.current) {
      if (entering) {
        videoPreviewRef.current.playbackRate = 0.5;
        videoPreviewRef.current.play().catch(() => {});
      } else {
        videoPreviewRef.current.pause();
        videoPreviewRef.current.currentTime = 0;
      }
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#f5f4f0]">
      <Navbar />

      {/* Page header */}
      <section className="pt-36 md:pt-48 pb-16 md:pb-24 px-8 md:px-16 bg-black">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-white/30 text-xs tracking-[0.4em] uppercase block mb-6">Core Projects</span>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-thin text-white leading-[0.9] tracking-tight">
            Selected<br />
            <span className="italic font-extralight text-white/40">Projects</span>
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-black border-t border-white/5 px-8 md:px-16 py-6 sticky top-16 md:top-20 z-30">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 md:px-16 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto space-y-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 cursor-pointer"
              onClick={() => handleCardClick(project)}
              onMouseEnter={() => {
                setHoveredId(project.id);
                if (project.videoUrl) handleVideoHover(true);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
                if (project.videoUrl) handleVideoHover(false);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Media: video or image */}
                <div
                  className={`relative overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ minHeight: "300px" }}
                >
                  {project.videoUrl ? (
                    <>
                      {/* Video preview on hover */}
                      <video
                        ref={videoPreviewRef}
                        src={project.videoUrl}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style={{ opacity: hoveredId === project.id ? 1 : 0 }}
                        loop
                        muted
                        playsInline
                      />
                      {/* Static thumbnail fallback */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                        style={{ opacity: hoveredId === project.id ? 0 : 1 }}
                      />
                      {/* Video indicator */}
                      <div
                        className="absolute top-5 right-5 flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white text-xs tracking-widest px-3 py-1.5 rounded-full transition-opacity duration-300"
                        style={{ opacity: hoveredId === project.id ? 1 : 0.6 }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-white ${hoveredId === project.id ? "animate-pulse" : ""}`} />
                        {hoveredId === project.id ? "0.5× SLOW" : "VIDEO"}
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: "300px" }}
                    />
                  )}

                  {project.metric && (
                    <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-sm text-white text-xs tracking-widest px-4 py-2 rounded-full font-mono z-10">
                      {project.metric}
                    </div>
                  )}

                  {/* Click to view overlay */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 z-10 ${
                      hoveredId === project.id && (project.id === 1 || project.videoUrl || project.highlights.length > 0) ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-white text-xs tracking-[0.3em] uppercase border border-white/50 px-5 py-2.5 rounded-full flex items-center gap-2">
                      <i className={project.id === 1 ? "ri-arrow-right-up-line text-base" : "ri-play-circle-line text-base"} />
                      {project.id === 1 ? "View Project" : "View Details"}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-black/30 text-xs tracking-widest uppercase">{project.category}</span>
                    <span className="text-black/20 text-xs">·</span>
                    <span className="text-black/20 text-xs font-mono">{project.year}</span>
                    {project.videoUrl && (
                      <>
                        <span className="text-black/20 text-xs">·</span>
                        <span className="text-black/40 text-xs flex items-center gap-1">
                          <i className="ri-video-line text-xs" /> Demo 影片
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="text-xl md:text-2xl font-bold text-black tracking-tight mb-4 transition-all duration-300"
                    style={{ transform: hoveredId === project.id ? "translateX(4px)" : "translateX(0)" }}
                  >
                    {project.title}
                  </h2>

                  <p className="text-black/50 text-sm leading-relaxed mb-6">{project.description}</p>

                  {project.highlights.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {project.highlights.map((h) => (
                        <div key={h.label} className="flex items-start gap-3">
                          <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">{h.label}</span>
                          <p className="text-black/50 text-xs leading-relaxed">{h.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-black/40 text-xs tracking-wider border border-black/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.id === 1 || project.videoUrl || project.highlights.length > 0) && (
                    <div className="flex items-center gap-2 text-black/40 text-xs tracking-widest uppercase group-hover:text-black transition-colors duration-300">
                      <span>{project.id === 1 ? "Click to view full project" : "Click to view demo"}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,5vw,5rem)] font-thin text-white leading-tight tracking-tight mb-10">
            Interested in<br />
            <span className="italic text-white/30">collaborating?</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 bg-white text-black text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-white/80 transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </main>
  );
}
