"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Concept() {
  const imgRef = useScrollAnimation<HTMLDivElement>(0.2);
  const textRef = useScrollAnimation<HTMLDivElement>(0.2);
  const lineRef = useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <section className="bg-obsidian py-[140px] md:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image with clip-path reveal */}
        <div ref={imgRef} className="reveal-image relative h-[450px] md:h-[600px] img-hover-zoom">
          <Image
            src="/images/concept.jpg"
            alt="トレーニングを通じて姿勢と自信が変わるコンセプトイメージ"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/30 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30 pointer-events-none" />
        </div>

        {/* Text */}
        <div ref={textRef} className="fade-in-up relative">
          <span className="font-[family-name:var(--font-cormorant)] text-gold/10 text-[5rem] md:text-[7rem] font-light absolute -top-10 -left-2 md:-left-6 select-none pointer-events-none leading-none tracking-[0.05em]">
            01
          </span>
          <div className="relative pt-14 md:pt-20">
            <p className="font-[family-name:var(--font-cormorant)] text-gold/60 text-[11px] tracking-[0.4em] uppercase mb-6">
              Philosophy
            </p>
            <h2 className="font-[family-name:var(--font-noto)] text-[1.6rem] md:text-[2rem] font-bold text-offwhite leading-[1.6] mb-8">
              体が変われば、
              <br />
              すべてが変わる
            </h2>
            <div ref={lineRef} className="line-expand w-12 h-px bg-gold mb-8" />
            <p className="text-warmgray text-[13px] md:text-[14px] leading-[2.2]">
              筋力がつけば、姿勢が変わる。
              <br />
              姿勢が変われば、自信が生まれる。
              <br />
              自信が生まれれば、行動が変わる。
            </p>
            <p className="text-warmgray text-[13px] md:text-[14px] leading-[2.2] mt-5">
              ANVILは「鍛える」だけのジムではありません。
              <br />
              あなたの体を起点に、毎日の質そのものを引き上げる。
              <br />
              それが、私たちの考えるパーソナルトレーニングです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
