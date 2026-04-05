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
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="trainer" className="bg-obsidian py-[120px]">
      <div
        ref={ref}
        className="fade-in-up max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-12 md:gap-16 items-start"
      >
        {/* Photo */}
        <div className="relative h-[450px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/trainer.jpg"
            alt="トレーナー 青山 健二"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Profile */}
        <div className="relative">
          <span className="font-[family-name:var(--font-cormorant)] text-gold/20 text-6xl md:text-8xl font-light absolute -top-6 right-0 select-none pointer-events-none leading-none">
            TRAINER
          </span>
          <div className="relative pt-12 md:pt-16">
            <p className="font-[family-name:var(--font-cormorant)] text-gold text-2xl md:text-3xl tracking-[0.1em]">
              KENJI AOYAMA
            </p>
            <p className="text-offwhite text-lg mt-1 mb-1">青山 健二</p>
            <p className="text-warmgray text-xs mb-6">
              ANVIL 代表トレーナー / コンディショニングスペシャリスト
            </p>

            <div className="w-10 h-px bg-gold mb-6" />

            {/* Certifications */}
            <div className="space-y-3 mb-8">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-px bg-gold mt-2.5 shrink-0" />
                  <span className="text-warmgray">{cert}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/20 pt-6">
              <p className="text-warmgray text-sm leading-[1.8] md:leading-[2]">
                大手フィットネスクラブで6年間、延べ1,200名以上を指導。
                「見た目を変える」だけでなく「日常の質を上げる」トレーニングを信条に、
                2020年ANVILを設立。
              </p>
              <p className="text-warmgray text-sm leading-[1.8] md:leading-[2] mt-4">
                一人ひとりの体の特性を見極め、最短で最大の効果を引き出す
                プログラム設計を得意とする。
              </p>
              <p className="text-offwhite text-sm leading-[1.8] md:leading-[2] mt-6 border-l-2 border-gold/40 pl-4 italic">
                「体づくりは、人生を変える最もシンプルな方法です。
                あなたの"変わりたい"という気持ちに、全力で応えます。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
