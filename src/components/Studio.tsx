"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Studio() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-obsidian py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <span className="font-[family-name:var(--font-cormorant)] text-gold/30 text-5xl md:text-7xl font-light leading-none">
          STUDIO
        </span>
      </div>

      {/* Full-bleed image */}
      <div ref={ref} className="fade-in-up relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/facility.jpg"
          alt="ANVIL施設"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-obsidian/80" />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-[family-name:var(--font-cormorant)] text-gold text-lg md:text-xl tracking-[0.2em] mb-4">
            完全個室・完全予約制
          </p>
          <p className="text-offwhite text-sm md:text-base leading-[1.8]">
            あなただけの空間で、集中できる60分を。
          </p>
        </div>
      </div>
    </section>
  );
}
