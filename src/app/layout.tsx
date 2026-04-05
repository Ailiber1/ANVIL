import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANVIL - パーソナルトレーニングスタジオ",
  description:
    "完全予約制・完全個室のパーソナルトレーニングスタジオ。あなたの理想の身体を、科学的アプローチで実現します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSansJP.variable}`}>
      <body className="font-[family-name:var(--font-noto)] antialiased">
        {children}
      </body>
    </html>
  );
}
