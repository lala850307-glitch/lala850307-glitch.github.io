import { Link } from "react-router-dom";
import { profile } from "@/mocks/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111] px-8 md:px-16 pt-20 pb-10 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[clamp(4rem,15vw,12rem)] font-black text-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
          LAYLA TANG
        </span>
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Open to<br />
              <span className="font-thin italic text-white/30">new</span><br />
              opportunities.
            </h3>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", path: "/" },
                { label: "Projects", path: "/project" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/60 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Connect</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={profile.github} target="_blank" rel="nofollow noreferrer" className="text-white/60 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2">
                  <i className="ri-github-line text-white/20" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="text-white/60 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2">
                  <i className="ri-linkedin-line text-white/20" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="text-white/60 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2"
              >
                <i className="ri-mail-line text-white/20" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="text-white/60 text-sm hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2"
              >
                <i className="ri-phone-line text-white/20" />
                {profile.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-[0.8em] uppercase">LAYLA TANG / {year}</p>
          <p className="text-white/20 text-xs tracking-widest">Taiwan</p>
        </div>
      </div>
    </footer>
  );
}
