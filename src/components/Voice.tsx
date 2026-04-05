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
    <section className="bg-obsidian py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em]">
            VOICE
          </h2>
          <p className="text-warmgray text-sm mt-4">お客様の声</p>
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
      className="fade-in-up bg-charcoal border border-gold/20 p-8 md:p-10"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
          <span className="font-[family-name:var(--font-cormorant)] text-gold text-sm font-semibold">
            {voice.initial}
          </span>
        </div>
        <p className="text-warmgray text-xs">{voice.attr}</p>
      </div>

      <p className="text-offwhite text-sm leading-[1.8] mb-6">
        {voice.text}
      </p>

      <div className="border-t border-gold/20 pt-4">
        <p className="text-gold text-xs font-medium">{voice.result}</p>
      </div>
    </div>
  );
}
