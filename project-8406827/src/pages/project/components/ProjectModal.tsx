import { useEffect, useRef } from "react";

interface Highlight {
  label: string;
  desc: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  metric: string;
  highlights: Highlight[];
  videoUrl?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Slow motion playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#f5f4f0] rounded-2xl"
        style={{
          animation: "modalIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center bg-black/10 hover:bg-black hover:text-white text-black rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Close"
        >
          <i className="ri-close-line text-lg" />
        </button>

        {/* Video hero */}
        {project.videoUrl && (
          <div className="relative w-full overflow-hidden rounded-t-2xl bg-black" style={{ aspectRatio: "16/9" }}>
            <video
              ref={videoRef}
              src={project.videoUrl}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Metric badge */}
            {project.metric && (
              <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-sm text-white text-xs tracking-widest px-4 py-2 rounded-full font-mono">
                {project.metric}
              </div>
            )}

            {/* Slow motion badge */}
            <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white/70 text-xs tracking-widest px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              0.5× SLOW
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-5 left-5">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{project.category} · {project.year}</p>
              <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight max-w-lg">{project.title}</h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Description */}
          <p className="text-black/60 text-base leading-relaxed mb-10 max-w-2xl">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="mb-10">
              <p className="text-black/30 text-xs tracking-[0.3em] uppercase mb-6">Project Highlights</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.highlights.map((h) => (
                  <div key={h.label} className="bg-white rounded-xl p-6 border border-black/5">
                    <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{h.label}</span>
                    <p className="text-black/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-black/10">
            <span className="text-black/30 text-xs tracking-widest uppercase mr-2 self-center">Tools</span>
            {project.tags.map((tag) => (
              <span key={tag} className="bg-black text-white text-xs tracking-wider px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
