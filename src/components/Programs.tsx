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
  const ref = useScrollAnimation<HTMLDivElement>();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        index > 0 ? "mt-16 md:mt-24" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative h-[300px] md:h-[400px] overflow-hidden ${
          isReversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={program.image}
          alt={`${program.subtitle}プログラムのトレーニングイメージ`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className={isReversed ? "md:order-1" : ""}>
        <span className="font-[family-name:var(--font-cormorant)] text-gold/50 text-5xl md:text-7xl font-light leading-none">
          {program.num}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-gold text-xl md:text-2xl tracking-[0.1em] mt-3 mb-1">
          {program.title}
        </h3>
        <p className="text-warmgray text-xs mb-4">{program.subtitle}</p>
        <p className="text-gold text-xs md:text-sm mb-4 border-l-2 border-gold/30 pl-3">
          {program.target}
        </p>
        <p className="text-warmgray text-sm leading-[1.8]">{program.desc}</p>
      </div>
    </div>
  );
}

export default function Programs() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="program" className="bg-charcoal py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-16 md:mb-20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em]">
            PROGRAM
          </h2>
          <p className="text-warmgray text-sm mt-4">
            あなたの目的に合わせた3つのプログラム
          </p>
        </div>

        {PROGRAMS.map((program, i) => (
          <ProgramItem key={program.num} program={program} index={i} />
        ))}
      </div>
    </section>
  );
}
