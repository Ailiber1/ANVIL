"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const show = phase >= 2;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="ANVILパーソナルトレーニングスタジオ内でトレーニングを行う様子"
          fill
          priority
          className={`object-cover transition-transform duration-[8s] ease-out ${
            phase >= 1 ? "scale-100" : "scale-110"
          }`}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

      {/* Giant ANVIL watermark */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-[3s] ease-out ${
          show ? "opacity-[0.03]" : "opacity-0"
        }`}
      >
        <span className="font-[family-name:var(--font-cormorant)] text-offwhite text-[30vw] md:text-[24vw] font-bold tracking-[0.2em] leading-none">
          ANVIL
        </span>
      </div>

      {/* Side decorative — desktop only */}
      <div className={`absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 transition-all duration-1000 ${show ? "opacity-100" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1.8s" }}>
        <div className="w-px h-16 bg-gold/30" />
        <span className="text-gold/50 text-[9px] tracking-[0.3em] font-[family-name:var(--font-cormorant)] [writing-mode:vertical-rl]">
          PERSONAL TRAINING
        </span>
        <div className="w-px h-16 bg-gold/30" />
      </div>

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 text-center px-6 max-w-[1100px] mx-auto">

        {/* Overline */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "0s" }}>
          <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
            <div className="w-8 md:w-14 h-px bg-gold/50" />
            <p className="font-[family-name:var(--font-cormorant)] text-gold/70 text-[10px] md:text-[11px] tracking-[0.5em] uppercase">
              Personal Training Studio
            </p>
            <div className="w-8 md:w-14 h-px bg-gold/50" />
          </div>
        </div>

        {/* ===== HEADLINE — AWARD-LEVEL TYPOGRAPHY ===== */}
        {/* Line 1: 鍛えるのは、 — lighter, wider tracking */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
          <p className="font-[family-name:var(--font-noto)] text-offwhite/80 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-light tracking-[0.25em] md:tracking-[0.35em] mb-3 md:mb-4">
            鍛えるのは、
          </p>
        </div>

        {/* Line 2: 体だけじゃない。 — MASSIVE, bold, gold accent */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <h1 className="relative inline-block">
            <span className="font-[family-name:var(--font-noto)] text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black leading-[1.05] tracking-[0.02em] text-offwhite whitespace-nowrap">
              体だけじゃない
            </span>
            {/* Gold period — oversized accent */}
            <span className="font-[family-name:var(--font-cormorant)] text-gold text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-light leading-none align-baseline inline-block translate-y-[0.05em]">
              .
            </span>
          </h1>
        </div>

        {/* English accent — positioned as design element */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "0.7s" }}>
          <p className="font-[family-name:var(--font-cormorant)] text-gold/30 text-[11px] md:text-[13px] tracking-[0.4em] italic mt-5 md:mt-7 mb-10 md:mb-14 uppercase">
            Forge your body &mdash; Shape your life
          </p>
        </div>

        {/* Divider */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "0.85s" }}>
          <div className="w-16 h-px bg-gold/30 mx-auto mb-10 md:mb-12" />
        </div>

        {/* Sub copy */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "1s" }}>
          <p className="text-warmgray/70 text-[12px] md:text-[14px] leading-[2.4] mb-12 md:mb-16 max-w-[500px] mx-auto tracking-[0.03em]">
            姿勢、自信、習慣、人生。
            <br />
            ANVILは、あなたの&#x201C;変わりたい&#x201D;に本気で向き合う
            <br className="hidden md:inline" />
            完全マンツーマンのパーソナルトレーニングスタジオです。
          </p>
        </div>

        {/* CTA */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "1.2s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="btn-shimmer text-obsidian font-medium px-12 py-4 text-[12px] tracking-[0.12em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.25)] inline-block uppercase"
            >
              無料カウンセリングを予約する
            </a>
            <a
              href="#program"
              className="group border border-offwhite/25 text-offwhite font-medium px-12 py-4 text-[12px] tracking-[0.12em] hover:border-gold hover:text-gold transition-all duration-500 inline-block relative overflow-hidden uppercase"
            >
              <span className="relative z-10">プログラムを見る</span>
              <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* LINE */}
        <div className={`hero-reveal ${show ? "hero-visible" : ""}`} style={{ transitionDelay: "1.4s" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINEで予約する"
            className="inline-flex items-center gap-2 text-warmgray/50 text-[10px] tracking-[0.08em] hover:text-line-green transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-line-green/50">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEでも予約できます
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hero-reveal ${show ? "hero-visible" : ""}`}
        style={{ transitionDelay: "2s" }}
      >
        <span className="text-warmgray/40 text-[8px] tracking-[0.4em] font-[family-name:var(--font-cormorant)] uppercase">
          Scroll
        </span>
        <div className="w-px h-14 bg-warmgray/15 relative overflow-hidden">
          <div className="w-full h-5 bg-gold/30 animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
