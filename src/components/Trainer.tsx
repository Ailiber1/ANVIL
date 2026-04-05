"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CERTIFICATIONS = [
  "NSCA-CPT（全米ストレングス&コンディショニング協会認定）",
  "NASM-PES（全米スポーツ医学アカデミー認定）",
  "健康運動指導士",
  "食生活アドバイザー2級",
];

export default function Trainer() {
  const imgRef = useScrollAnimation<HTMLDivElement>(0.1);
  const textRef = useScrollAnimation<HTMLDivElement>(0.15);
  const lineRef = useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <section id="trainer" className="bg-obsidian py-[140px] md:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-12 md:gap-20 items-start">
        {/* Photo — clip-path reveal from bottom */}
        <div ref={imgRef} className="reveal-image-up relative h-[500px] md:h-[700px] img-hover-zoom">
          <Image
            src="/images/trainer.jpg"
            alt="ANVIL代表トレーナー 青山健二のプロフィール写真"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-gold/20 pointer-events-none" />
        </div>

        {/* Profile */}
        <div ref={textRef} className="fade-in-up relative">
          <span className="font-[family-name:var(--font-cormorant)] text-gold/8 text-[5rem] md:text-[7rem] font-light absolute -top-8 right-0 select-none pointer-events-none leading-none tracking-[0.05em]">
            02
          </span>
          <div className="relative pt-14 md:pt-20">
            <p className="font-[family-name:var(--font-cormorant)] text-gold/60 text-[11px] tracking-[0.4em] uppercase mb-6">
              Trainer
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-gold text-[1.5rem] md:text-[2rem] tracking-[0.12em]">
              KENJI AOYAMA
            </p>
            <p className="text-offwhite text-base mt-1 mb-1">青山 健二</p>
            <p className="text-warmgray/60 text-[11px] tracking-[0.05em] mb-8">
              ANVIL 代表トレーナー / コンディショニングスペシャリスト
            </p>

            <div ref={lineRef} className="line-expand w-12 h-px bg-gold mb-8" />

            {/* Certifications */}
            <div className="space-y-3 mb-10">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px]">
                  <span className="w-1.5 h-px bg-gold/60 mt-2.5 shrink-0" />
                  <span className="text-warmgray/80">{cert}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/15 pt-8">
              <p className="text-warmgray text-[13px] md:text-[14px] leading-[2.2]">
                大手フィットネスクラブで6年間、延べ1,200名以上を指導。
                「見た目を変える」だけでなく「日常の質を上げる」トレーニングを信条に、
                2020年ANVILを設立。
              </p>
              <p className="text-warmgray text-[13px] md:text-[14px] leading-[2.2] mt-4">
                一人ひとりの体の特性を見極め、最短で最大の効果を引き出す
                プログラム設計を得意とする。
              </p>
              <p className="text-offwhite/90 text-[13px] md:text-[14px] leading-[2.2] mt-8 border-l-2 border-gold/40 pl-5 italic">
                「体づくりは、人生を変える最もシンプルな方法です。
                あなたの&#x201C;変わりたい&#x201D;という気持ちに、全力で応えます。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
