import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PHONE = process.env.NEXT_PUBLIC_PHONE || "03-xxxx-xxxx";
const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";

export const metadata: Metadata = {
  title: "送信完了 | ANVIL - パーソナルトレーニングスタジオ",
  description: "お問い合わせの送信が完了しました。",
};

export default function ContactCompletePage() {
  return (
    <>
      <Header />
      <main className="bg-obsidian min-h-screen pt-[80px] md:pt-[100px]">
        <section className="max-w-[640px] mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            {/* Check icon */}
            <div className="w-16 h-16 mx-auto mb-8 border-2 border-gold flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em] mb-6">
              THANK YOU
            </h1>
            <p className="text-offwhite text-base mb-3">
              お問い合わせありがとうございます
            </p>
            <p className="text-warmgray text-sm leading-[1.8] mb-8">
              内容を確認の上、1営業日以内にご返信いたします。<br />
              確認メールをお送りしましたので、ご確認ください。
            </p>

            {/* Urgent contact */}
            <div className="border border-gold/10 bg-charcoal p-6 mb-10">
              <p className="text-warmgray text-sm mb-4">
                お急ぎの場合はお電話またはLINEでご連絡ください
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${PHONE.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 text-offwhite text-sm hover:text-gold transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {PHONE}
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-line-green text-sm hover:opacity-80 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINE予約
                </a>
              </div>
            </div>

            {/* Back to top */}
            <a
              href="/"
              className="inline-block bg-gold text-obsidian font-medium text-sm px-10 py-4 tracking-[0.05em] hover:bg-[#b8963f] transition-colors duration-300"
            >
              トップに戻る
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
