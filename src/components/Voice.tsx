"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VOICES = [
  {
    initial: "S.T",
    attr: "30代女性 / BODY MAKEプログラム",
    text: "産後の体型戻しで通い始めて3ヶ月。体重は-6kgですが、それ以上に姿勢が変わって「最近キレイになったね」と言われるようになりました。毎回のトレーニングが楽しみです。",
    result: "3ヶ月で体重-6kg・体脂肪率-8%",
  },
  {
    initial: "K.M",
    attr: "40代男性 / CONDITIONプログラム",
    text: "10年来の腰痛が嘘のように改善。整体やマッサージでは一時的だった痛みが、トレーニングで根本から変わりました。デスクワーク後の辛さがなくなったのが一番嬉しい。",
    result: "慢性腰痛が改善・鎮痛薬が不要に",
  },
  {
    initial: "A.Y",
    attr: "30代男性 / PERFORMANCEプログラム",
    text: "ゴルフのスコアアップが目的で入会。体幹と柔軟性が上がり、飛距離が20ヤード伸びました。青山さんの知識量がすごくて、毎回新しい発見があります。",
    result: "飛距離+20ヤード・ベストスコア更新",
  },
];

export default function Voice() {
  const titleRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-obsidian py-[140px] md:py-[160px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-20">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/40 text-[11px] tracking-[0.5em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[2rem] md:text-[2.8rem] text-gold tracking-[0.15em]">
            VOICE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {VOICES.map((voice, i) => (
            <VoiceCard key={i} voice={voice} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VoiceCard({ voice, index }: { voice: typeof VOICES[0]; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="fade-in-up group bg-charcoal border border-gold/10 p-8 md:p-10 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Quote mark */}
        <span className="font-[family-name:var(--font-cormorant)] text-gold/10 text-[4rem] font-light absolute -top-4 -left-1 leading-none select-none">
          &ldquo;
        </span>

        <div className="flex items-center gap-4 mb-8 pt-6">
          <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
            <span className="font-[family-name:var(--font-cormorant)] text-gold text-[13px] font-semibold tracking-[0.05em]">
              {voice.initial}
            </span>
          </div>
          <p className="text-warmgray/60 text-[11px] tracking-[0.03em]">{voice.attr}</p>
        </div>

        <p className="text-offwhite/90 text-[13px] leading-[2] mb-8">
          {voice.text}
        </p>

        <div className="border-t border-gold/15 pt-5">
          <p className="text-gold/80 text-[11px] font-medium tracking-[0.05em]">{voice.result}</p>
        </div>
      </div>
    </div>
  );
}
