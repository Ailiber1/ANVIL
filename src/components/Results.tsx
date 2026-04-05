"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const STATS = [
  { value: 1200, label: "セッション", suffix: "+", decimals: 0 },
  { value: 98, label: "目標達成率", suffix: "%", decimals: 0 },
  { value: 4.9, label: "お客様満足度", suffix: "", decimals: 1 },
  { value: 6, label: "年の指導歴", suffix: "年", decimals: 0 },
];

function StatItem({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const countRef = useCountUp(stat.value, 2200, stat.decimals);
  const itemRef = useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <div ref={itemRef} className="fade-in-up text-center relative" style={{ transitionDelay: `${index * 0.2}s` }}>
      <div className="flex items-baseline justify-center gap-1">
        <span
          ref={countRef}
          className="font-[family-name:var(--font-cormorant)] text-offwhite text-[3.5rem] md:text-[5rem] font-light counter-glow"
        >
          0
        </span>
        {stat.suffix && (
          <span className="font-[family-name:var(--font-cormorant)] text-gold text-[1.5rem] md:text-[2rem] font-light">
            {stat.suffix}
          </span>
        )}
      </div>
      <div className="w-8 h-px bg-gold/30 mx-auto mt-5 mb-4" />
      <p className="text-warmgray/70 text-[11px] tracking-[0.15em] uppercase">{stat.label}</p>
    </div>
  );
}

export default function Results() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-charcoal relative py-[140px] md:py-[160px] overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[family-name:var(--font-cormorant)] text-offwhite/[0.02] text-[20vw] font-bold tracking-[0.2em] leading-none">
          RESULTS
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div ref={titleRef} className="fade-in-up text-center mb-20">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Achievement
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            RESULTS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
