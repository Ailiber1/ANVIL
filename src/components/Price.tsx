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
    <section id="price" className="bg-charcoal py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em]">
            PRICE
          </h2>
          <p className="text-warmgray text-sm mt-4">料金プラン</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Enrollment fee note */}
        <FeeNote />

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-gold text-obsidian font-medium px-10 py-4 text-sm tracking-[0.05em] hover:bg-[#b8963f] transition-colors duration-300"
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
    <div ref={ref} className="fade-in-up text-center mt-12">
      <p className="text-warmgray text-sm">
        入会金{" "}
        <span className="text-offwhite line-through">¥30,000</span>
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
      className={`fade-in-up relative p-8 md:p-10 ${
        plan.recommended
          ? "border-2 border-gold bg-obsidian"
          : "border border-gold/20 bg-obsidian"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-obsidian text-[10px] font-medium px-4 py-1 tracking-[0.1em]">
          RECOMMENDED
        </div>
      )}

      <h3 className="font-[family-name:var(--font-cormorant)] text-gold text-xl tracking-[0.15em] text-center">
        {plan.name}
      </h3>
      <p className="text-warmgray text-xs text-center mt-1 mb-6">
        {plan.sessions}
      </p>

      <div className="text-center mb-8">
        <span className="text-offwhite text-xs">¥</span>
        <span className="font-[family-name:var(--font-cormorant)] text-offwhite text-4xl md:text-5xl font-light">
          {plan.price}
        </span>
        <span className="text-warmgray text-xs ml-1">/月（税別）</span>
      </div>

      <div className="w-full h-px bg-gold/20 mb-6" />

      <ul className="space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-warmgray">
            <span className="text-gold mt-0.5 shrink-0">―</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
