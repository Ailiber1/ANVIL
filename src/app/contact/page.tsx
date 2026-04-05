import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | ANVIL - パーソナルトレーニングスタジオ",
  description:
    "ANVILへのお問い合わせ・無料カウンセリングのご予約はこちら。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-obsidian min-h-screen pt-[80px] md:pt-[100px]">
        <section className="max-w-[640px] mx-auto px-6 py-16 md:py-24">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-gold tracking-[0.1em]">
              CONTACT
            </h1>
            <p className="text-warmgray text-sm mt-4">
              お問い合わせ・無料カウンセリングのご予約
            </p>
          </div>

          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
