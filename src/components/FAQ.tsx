"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQS = [
  {
    q: "運動経験がまったくないのですが大丈夫ですか？",
    a: "はい、まったく問題ありません。会員の約60%が運動未経験からスタートしています。お一人おひとりの体力レベルに合わせてプログラムを設計しますので、無理なく始められます。",
  },
  {
    q: "食事制限は厳しいですか？",
    a: "極端な食事制限は行いません。現在の食生活をベースに、無理なく続けられる改善をご提案します。LINEでの食事報告を通じて、日常に溶け込む形でサポートします。",
  },
  {
    q: "どのくらいの期間で効果が出ますか？",
    a: "個人差はありますが、多くの方が1ヶ月目で体の変化を実感されています。見た目の変化は2〜3ヶ月、体質の根本的な改善には3〜6ヶ月が目安です。",
  },
  {
    q: "予約のキャンセルや変更はできますか？",
    a: "前日の20時までのご連絡で、無料でキャンセル・変更が可能です。当日キャンセルの場合は1回分の消化となりますのでご了承ください。",
  },
  {
    q: "他のジムとの違いは何ですか？",
    a: "ANVILは完全個室・完全マンツーマンに加え、トレーニングだけでなく食事・生活習慣・メンタル面までトータルでサポートする点が特徴です。「通うジム」ではなく「人生を変えるパートナー」でありたいと考えています。",
  },
];

export default function FAQ() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="bg-obsidian py-[140px] md:py-[160px]">
      <div className="max-w-[800px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-20">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Questions
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            FAQ
          </h2>
        </div>

        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="fade-in-up border-b border-gold/10 group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left"
        aria-expanded={open}
      >
        <span className="text-offwhite/90 text-[13px] md:text-[14px] pr-6 group-hover:text-gold transition-colors duration-300">
          {faq.q}
        </span>
        <span
          className="font-[family-name:var(--font-cormorant)] text-gold/60 text-[1.2rem] shrink-0 transition-all duration-500 group-hover:text-gold"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-600 ease-out"
        style={{
          maxHeight: open ? "300px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-warmgray/80 text-[13px] leading-[2] pb-7 pl-0 md:pl-5">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
