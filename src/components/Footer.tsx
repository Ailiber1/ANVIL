const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "03-xxxx-xxxx";

const FOOTER_NAV = [
  { label: "Program", href: "#program" },
  { label: "Trainer", href: "#trainer" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deepblack py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-12 md:gap-16 mb-12">
          {/* Logo + info */}
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-gold text-3xl font-bold tracking-[0.15em] mb-6">
              ANVIL
            </p>
            <div className="space-y-2 text-warmgray text-xs leading-[1.8]">
              <p>〒150-0001 東京都渋谷区神宮前1-2-3 ANVILビル2F</p>
              <p>営業時間: 7:00 - 22:00（不定休）</p>
              <p>
                TEL:{" "}
                <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hover:text-gold transition-colors">
                  {PHONE}
                </a>
              </p>
            </div>

            {/* SNS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-[#b8963f] transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-[#b8963f] transition-colors"
                aria-label="LINE"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {FOOTER_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-warmgray text-sm hover:text-gold transition-colors tracking-[0.05em]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <a
              href="/contact"
              className="bg-gold text-obsidian text-sm font-medium px-8 py-3 tracking-[0.05em] hover:bg-[#b8963f] transition-colors text-center"
            >
              無料カウンセリング
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-line-green text-white text-sm font-medium px-8 py-3 tracking-[0.05em] hover:bg-[#05b34c] transition-colors text-center"
            >
              LINE予約
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warmgray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warmgray/60 text-[10px] tracking-[0.05em]">
            &copy; 2025 ANVIL Personal Training Studio. All rights reserved.
          </p>
          <p className="text-warmgray/40 text-[10px]">
            ※デモサイトのため架空の事業所です
          </p>
        </div>
      </div>
    </footer>
  );
}
