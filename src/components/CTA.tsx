"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "03-xxxx-xxxx";

export default function CTA() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div ref={ref} className="fade-in-up relative z-10 text-center px-6 py-[120px] max-w-[800px] mx-auto">
        <p className="font-[family-name:var(--font-cormorant)] text-gold text-lg md:text-xl tracking-[0.2em] mb-6">
          START YOUR JOURNEY
        </p>
        <h2 className="font-[family-name:var(--font-noto)] text-2xl md:text-3xl font-bold text-offwhite mb-10">
          まずは、無料カウンセリングから。
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/contact"
            className="bg-gold text-obsidian font-medium px-8 py-4 text-sm tracking-[0.05em] hover:bg-[#b8963f] transition-colors duration-300 inline-block"
          >
            カウンセリングを予約する
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-line-green text-white font-medium px-8 py-4 text-sm tracking-[0.05em] hover:bg-[#05b34c] transition-colors duration-300 inline-flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで相談する
          </a>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="border border-offwhite text-offwhite font-medium px-8 py-4 text-sm tracking-[0.05em] hover:bg-offwhite/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            電話で予約
          </a>
        </div>

        <p className="text-warmgray text-xs">
          営業時間 7:00 - 22:00（不定休）
        </p>
      </div>
    </section>
  );
}
