import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About", path: "/", hash: "#about" },
  { label: "Skills", path: "/", hash: "#skills" },
  { label: "Experience", path: "/", hash: "#experience" },
  { label: "Projects", path: "/project", hash: "" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isHome = location.pathname === "/";
  const textColor = scrolled || !isHome ? "text-black" : "text-white";

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    if (item.hash && isHome) {
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-sm font-black tracking-[0.25em] uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${textColor}`}
          >
            LAYLA TANG
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              item.hash && isHome ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs tracking-[0.25em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${textColor} opacity-50 hover:opacity-100`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px bg-current w-0 group-hover:w-full transition-all duration-300" />
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-xs tracking-[0.25em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
                    location.pathname === item.path && !item.hash
                      ? textColor
                      : `${textColor} opacity-50 hover:opacity-100`
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                      location.pathname === item.path && !item.hash ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:layla.tang@email.com"
              className={`hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                scrolled || !isHome
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white/50 text-white hover:border-white"
              }`}
            >
              Contact
            </a>
            <button
              className={`md:hidden flex flex-col gap-1.5 cursor-pointer ${textColor}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          item.hash ? (
            <button
              key={item.label}
              onClick={() => { handleNavClick(item); setMenuOpen(false); }}
              className="text-white text-3xl font-thin tracking-widest uppercase cursor-pointer hover:opacity-60 transition-opacity"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              className="text-white text-3xl font-thin tracking-widest uppercase cursor-pointer hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          )
        ))}
        <a
          href="mailto:layla.tang@email.com"
          className="text-white/40 text-sm tracking-[0.3em] uppercase mt-4 cursor-pointer hover:text-white transition-colors"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}
