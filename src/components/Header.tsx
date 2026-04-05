"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Program", href: "#program" },
  { label: "Trainer", href: "#trainer" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "03-xxxx-xxxx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-5 md:py-6">
          <a
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-gold text-[1.4rem] md:text-[1.6rem] font-bold tracking-[0.2em] hover:text-[#b8963f] transition-colors duration-300"
          >
            ANVIL<span className="text-gold/30">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-cormorant)] text-offwhite/80 text-[13px] tracking-[0.12em] hover:text-gold transition-colors duration-300 uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="btn-shimmer text-obsidian text-[11px] font-medium px-6 py-2.5 tracking-[0.1em] uppercase"
            >
              Counseling
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-60"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-px bg-offwhite transition-all duration-400 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-offwhite transition-all duration-400 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian transition-all duration-600 flex flex-col items-center justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-cormorant)] text-offwhite text-[1.5rem] tracking-[0.15em] hover:text-gold transition-colors uppercase"
              style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : "0s" }}
            >
              {item.label}
            </a>
          ))}
          <div className="w-10 h-px bg-gold/20 mt-2" />
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-shimmer text-obsidian text-[13px] font-medium px-10 py-3.5 tracking-[0.1em] uppercase mt-2"
          >
            Counseling
          </a>
          <div className="flex gap-8 mt-6">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-line-green/80 text-[12px] flex items-center gap-2 hover:text-line-green transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              LINE
            </a>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="text-offwhite/60 text-[12px] flex items-center gap-2 hover:text-offwhite transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
