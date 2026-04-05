"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STEPS = [
  {
    num: "01",
    title: "お問い合わせ",
    desc: "フォーム・LINE・お電話からお気軽にご連絡ください。",
  },
  {
    num: "02",
    title: "無料カウンセリング",
    desc: "目標・体の悩み・生活習慣をヒアリング。最適なプランをご提案します。",
  },
  {
    num: "03",
    title: "体験トレーニング",
    desc: "実際のトレーニングを60分体験。相性やスタジオの雰囲気をご確認ください。",
  },
  {
    num: "04",
    title: "ご入会",
    desc: "ご納得いただけたらご入会手続きへ。体験当日なら入会金無料です。",
  },
];

export default function Flow() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-[140px] md:py-[160px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-20">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Getting Started
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            FLOW
          </h2>
        </div>

        {/* Desktop: horizontal / Mobile: vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
          {STEPS.map((step, i) => (
            <FlowStep key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  step,
  index,
  isLast,
}: {
  step: typeof STEPS[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="fade-in-up relative flex md:flex-col items-start md:items-center text-left md:text-center group"
      style={{ transitionDelay: `${index * 0.18}s` }}
    >
      {/* Step number */}
      <div className="shrink-0 mr-6 md:mr-0 md:mb-6 flex flex-col items-center">
        <span className="font-[family-name:var(--font-cormorant)] text-gold text-[2rem] md:text-[2.5rem] font-light tracking-[0.1em] group-hover:text-gold/80 transition-colors">
          {step.num}
        </span>
        {/* Vertical gold line (mobile) */}
        {!isLast && (
          <div className="hidden max-md:block w-px h-16 bg-gold/20 mt-3" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 md:px-4">
        <h3 className="text-offwhite text-[14px] font-medium mb-3 tracking-[0.03em]">
          {step.title}
        </h3>
        <p className="text-warmgray/70 text-[12px] leading-[1.9]">{step.desc}</p>
      </div>

      {/* Horizontal connecting line (desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-5 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-gold/15" />
      )}
    </div>
  );
}
