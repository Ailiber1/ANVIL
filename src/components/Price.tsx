"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PLANS = [
  {
    name: "LIGHT",
    price: "32,000",
    sessions: "月4回",
    features: ["パーソナルトレーニング60分×4", "食事指導（LINE相談）", "トレーニングウェア貸出"],
    recommended: false,
  },
  {
    name: "STANDARD",
    price: "56,000",
    sessions: "月8回",
    features: ["パーソナルトレーニング60分×8", "食事指導（毎日LINE管理）", "トレーニングウェア貸出", "プロテイン提供", "体組成測定（月2回）"],
    recommended: true,
  },
  {
    name: "PREMIUM",
    price: "78,000",
    sessions: "月12回",
    features: ["パーソナルトレーニング60分×12", "食事指導（毎日LINE管理）", "トレーニングウェア貸出", "プロテイン・サプリ提供", "体組成測定（毎回）", "姿勢分析レポート"],
    recommended: false,
  },
];

export default function Price() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="price" className="bg-charcoal py-[140px] md:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-20">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            PRICE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Enrollment fee note */}
        <FeeNote />

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block btn-shimmer text-obsidian font-medium px-12 py-4 text-[13px] tracking-[0.08em] hover:shadow-[0_0_40px_rgba(201,169,110,0.2)] transition-shadow duration-500"
          >
            まずは無料カウンセリングから
          </a>
        </div>
      </div>
    </section>
  );
}

function FeeNote() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-in-up text-center mt-14">
      <p className="text-warmgray text-[13px]">
        入会金{" "}
        <span className="text-offwhite/60 line-through">¥30,000</span>
        <span className="text-gold font-medium ml-3">
          → 体験当日のご入会で ¥0
        </span>
      </p>
    </div>
  );
}

function PlanCard({ plan, index }: { plan: typeof PLANS[0]; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`fade-in-up group relative p-8 md:p-10 transition-all duration-500 hover:translate-y-[-4px] ${
        plan.recommended
          ? "border-2 border-gold bg-obsidian hover:shadow-[0_0_60px_rgba(201,169,110,0.08)]"
          : "border border-gold/15 bg-obsidian hover:border-gold/40"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-obsidian text-[9px] font-medium px-5 py-1 tracking-[0.15em] uppercase">
          Recommended
        </div>
      )}

      <h3 className="font-[family-name:var(--font-cormorant)] text-gold text-[1.2rem] tracking-[0.2em] text-center">
        {plan.name}
      </h3>
      <p className="text-warmgray/50 text-[11px] text-center mt-1 mb-8">
        {plan.sessions}
      </p>

      <div className="text-center mb-10">
        <span className="text-offwhite/60 text-[11px]">¥</span>
        <span className="font-[family-name:var(--font-cormorant)] text-offwhite text-[2.8rem] md:text-[3.5rem] font-light tracking-[0.02em]">
          {plan.price}
        </span>
        <span className="text-warmgray/50 text-[11px] ml-1">/月（税別）</span>
      </div>

      <div className="w-full h-px bg-gold/15 mb-8" />

      <ul className="space-y-4">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-[13px] text-warmgray/80">
            <span className="text-gold/50 mt-0.5 shrink-0 text-[10px]">&#9642;</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
