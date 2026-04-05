"use client";

import { DemoLineButton, DemoPhoneButton } from "./DemoToast";

const FOOTER_NAV = [
  { label: "Program", href: "#program" },
  { label: "Trainer", href: "#trainer" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deepblack py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <p className="font-[family-name:var(--font-cormorant)] text-gold/20 text-[3rem] md:text-[5rem] font-bold tracking-[0.2em] leading-none">ANVIL<span className="text-gold/10">.</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-12 md:gap-16 mb-16">
          <div>
            <div className="space-y-3 text-warmgray/60 text-[12px] leading-[1.9]">
              <p>〒150-0001 東京都渋谷区神宮前1-2-3 ANVILビル2F</p>
              <p>営業時間: 7:00 - 22:00（不定休）</p>
              <p>
                TEL:{" "}
                <DemoPhoneButton className="hover:text-gold transition-colors duration-300 text-warmgray/60">03-xxxx-xxxx</DemoPhoneButton>
              </p>
            </div>

            <div className="flex gap-5 mt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-warmgray/40 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <DemoLineButton className="text-warmgray/40 hover:text-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </DemoLineButton>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href} className="font-[family-name:var(--font-cormorant)] text-warmgray/50 text-[13px] tracking-[0.1em] hover:text-gold transition-colors duration-300 uppercase">{item.label}</a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a href="/contact" className="btn-shimmer text-obsidian text-[12px] font-medium px-8 py-3 tracking-[0.08em] text-center uppercase">Counseling</a>
            <DemoLineButton className="bg-line-green text-white text-[12px] font-medium px-8 py-3 tracking-[0.05em] hover:bg-[#05b34c] transition-colors text-center">LINE</DemoLineButton>
          </div>
        </div>

        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warmgray/30 text-[10px] tracking-[0.08em]">&copy; 2025 ANVIL Personal Training Studio. All rights reserved.</p>
          <p className="text-warmgray/20 text-[10px]">Demo site by Previo</p>
        </div>
      </div>
    </footer>
  );
}
