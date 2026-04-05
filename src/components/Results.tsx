"use client";

import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const STATS = [
  { value: 1200, label: "セッション", suffix: "+", decimals: 0 },
  { value: 98, label: "目標達成率", suffix: "%", decimals: 0 },
  { value: 4.9, label: "お客様満足度", suffix: "", decimals: 1 },
  { value: 6, label: "年の指導歴", suffix: "年", decimals: 0 },
];

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const countRef = useCountUp(stat.value, 2000, stat.decimals);

  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span
          ref={countRef}
          className="font-[family-name:var(--font-cormorant)] text-offwhite text-5xl md:text-6xl font-light"
        >
          0
        </span>
        {stat.suffix && (
          <span className="font-[family-name:var(--font-cormorant)] text-gold text-2xl md:text-3xl font-light">
            {stat.suffix}
          </span>
        )}
      </div>
      <div className="w-10 h-px bg-gold mx-auto mt-4 mb-3" />
      <p className="text-warmgray text-xs tracking-[0.1em]">{stat.label}</p>
    </div>
  );
}

export default function Results() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em]">
            RESULTS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
