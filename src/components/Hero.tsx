"use client";

import Image from "next/image";

const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="ANVILトレーニング風景"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
        <p className="font-[family-name:var(--font-cormorant)] text-gold text-xs md:text-sm tracking-[0.3em] mb-6 md:mb-8">
          PERSONAL TRAINING STUDIO
        </p>
        <h1 className="font-[family-name:var(--font-noto)] text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-offwhite mb-6 md:mb-8">
          鍛えるのは、体だけじゃない。
        </h1>
        <p className="text-warmgray text-sm md:text-base leading-[2] md:leading-[2.2] mb-10 md:mb-12 whitespace-pre-line">
          {`姿勢、自信、習慣、人生。\nANVILは、あなたの\u201C変わりたい\u201Dに本気で向き合う\n完全マンツーマンのパーソナルトレーニングスタジオです。`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/contact"
            className="bg-gold text-obsidian font-medium px-8 py-4 text-sm tracking-[0.05em] hover:bg-[#b8963f] transition-colors duration-300 inline-block"
          >
            無料カウンセリングを予約する
          </a>
          <a
            href="#program"
            className="border border-offwhite text-offwhite font-medium px-8 py-4 text-sm tracking-[0.05em] hover:bg-offwhite/10 transition-colors duration-300 inline-block"
          >
            プログラムを見る
          </a>
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-warmgray text-xs hover:text-line-green transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-line-green">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINEでも予約できます
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-warmgray/60 text-[10px] tracking-[0.2em] font-[family-name:var(--font-cormorant)]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-warmgray/30 relative overflow-hidden">
          <div className="w-full h-4 bg-gold/60 animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
