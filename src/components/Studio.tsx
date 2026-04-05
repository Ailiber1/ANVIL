"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Studio() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const imgRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="bg-obsidian py-[140px] md:py-[180px]">
      {/* Section title — left aligned, large */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <div ref={titleRef} className="fade-in-up">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Facility
          </p>
          <span className="font-[family-name:var(--font-cormorant)] text-gold/20 text-[3rem] md:text-[5rem] font-light leading-none tracking-[0.1em]">
            STUDIO
          </span>
        </div>
      </div>

      {/* Full-bleed image with reveal */}
      <div ref={imgRef} className="reveal-image-up relative w-full h-[450px] md:h-[700px] overflow-hidden">
        <Image
          src="/images/facility.jpg"
          alt="ANVILの完全個室トレーニングスタジオ内観"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/30 to-obsidian/60" />

        {/* Overlay text — centered, minimal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/70 text-[13px] md:text-[16px] tracking-[0.3em] mb-5 uppercase">
            Private &amp; Reserved
          </p>
          <h3 className="font-[family-name:var(--font-noto)] text-offwhite text-[1.3rem] md:text-[1.8rem] font-bold leading-[1.6]">
            完全個室・完全予約制
          </h3>
          <div className="w-10 h-px bg-gold/40 my-6" />
          <p className="text-warmgray/80 text-[13px] md:text-[15px] leading-[1.8]">
            あなただけの空間で、集中できる60分を。
          </p>
        </div>
      </div>
    </section>
  );
}
