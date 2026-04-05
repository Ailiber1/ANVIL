"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROGRAMS = [
  {
    num: "01",
    title: "BODY MAKE",
    subtitle: "ボディメイク",
    target: "ダイエット・筋肥大・ボディラインを整えたい方",
    desc: "体組成データと姿勢分析をもとに、あなた専用のトレーニング＋食事プランを設計。ただ痩せるのではなく、「着たい服が似合う体」を目指します。",
    image: "/images/program-1.jpg",
  },
  {
    num: "02",
    title: "CONDITION",
    subtitle: "コンディショニング",
    target: "肩こり・腰痛・慢性疲労を改善したい方",
    desc: "デスクワークや生活習慣で崩れた体のバランスを整え、痛みの根本原因にアプローチ。機能改善とトレーニングを組み合わせ、不調のない体をつくります。",
    image: "/images/program-2.jpg",
  },
  {
    num: "03",
    title: "PERFORMANCE",
    subtitle: "パフォーマンスアップ",
    target: "スポーツパフォーマンスを向上させたい方",
    desc: "競技特性に合わせた筋力・柔軟性・持久力の最適化。アスリートからゴルフ・ランニング愛好家まで、あなたの目標達成を科学的にサポートします。",
    image: "/images/program-3.jpg",
  },
];

function ProgramItem({ program, index }: { program: typeof PROGRAMS[0]; index: number }) {
  const imgRef = useScrollAnimation<HTMLDivElement>(0.15);
  const textRef = useScrollAnimation<HTMLDivElement>(0.15);
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
        index > 0 ? "mt-20 md:mt-32" : ""
      }`}
    >
      {/* Image — alternating clip direction */}
      <div
        ref={imgRef}
        className={`${isReversed ? "reveal-image-rtl md:order-2" : "reveal-image"} relative h-[350px] md:h-[500px] img-hover-zoom`}
      >
        <Image
          src={program.image}
          alt={`${program.subtitle}プログラムのトレーニングイメージ`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Text */}
      <div ref={textRef} className={`fade-in-up ${isReversed ? "md:order-1 md:text-right" : ""}`}>
        <span className="font-[family-name:var(--font-cormorant)] text-gold/10 text-[5rem] md:text-[7rem] font-light leading-none block">
          {program.num}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-gold text-[1.3rem] md:text-[1.6rem] tracking-[0.15em] mt-2 mb-1">
          {program.title}
        </h3>
        <p className="text-warmgray/60 text-[11px] tracking-[0.1em] mb-6">{program.subtitle}</p>
        <div className={`w-10 h-px bg-gold/40 mb-6 ${isReversed ? "md:ml-auto" : ""}`} />
        <p className="text-gold/80 text-[12px] md:text-[13px] mb-5 border-l-2 border-gold/30 pl-3">
          {program.target}
        </p>
        <p className="text-warmgray text-[13px] md:text-[14px] leading-[2]">{program.desc}</p>
      </div>
    </div>
  );
}

export default function Programs() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="program" className="bg-charcoal py-[140px] md:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-20 md:mb-28">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            PROGRAM
          </h2>
          <div className="w-8 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {PROGRAMS.map((program, i) => (
          <ProgramItem key={program.num} program={program} index={i} />
        ))}
      </div>
    </section>
  );
}
