"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Concept() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-obsidian py-[120px]">
      <div
        ref={ref}
        className="fade-in-up max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        {/* Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/concept.jpg"
            alt="ANVILのコンセプト"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="relative">
          <span className="font-[family-name:var(--font-cormorant)] text-gold/30 text-6xl md:text-8xl font-light absolute -top-8 -left-2 md:-left-4 select-none pointer-events-none leading-none">
            PHILOSOPHY
          </span>
          <div className="relative pt-12 md:pt-16">
            <h2 className="font-[family-name:var(--font-noto)] text-2xl md:text-3xl font-bold text-offwhite leading-relaxed mb-6">
              体が変われば、
              <br />
              すべてが変わる
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-warmgray text-sm md:text-base leading-[1.8] md:leading-[2]">
              筋力がつけば、姿勢が変わる。
              <br />
              姿勢が変われば、自信が生まれる。
              <br />
              自信が生まれれば、行動が変わる。
            </p>
            <p className="text-warmgray text-sm md:text-base leading-[1.8] md:leading-[2] mt-4">
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
