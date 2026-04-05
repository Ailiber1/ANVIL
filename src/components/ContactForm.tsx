"use client";

import { useState, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "無料カウンセリングの予約",
  "体験トレーニングについて",
  "料金・プランについて",
  "その他のお問い合わせ",
];

const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL || "https://line.me/R/ti/p/@anvil-demo";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "03-xxxx-xxxx";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  server?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const showDatetime = category === "無料カウンセリングの予約";

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!data.get("name")?.toString().trim()) errs.name = "お名前を入力してください";
    const email = data.get("email")?.toString().trim() || "";
    if (!email) {
      errs.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "正しいメールアドレスを入力してください";
    }
    if (!data.get("phone")?.toString().trim()) errs.phone = "電話番号を入力してください";
    if (!data.get("category")?.toString().trim()) errs.category = "お問い合わせ種別を選択してください";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const clientErrors = validate(data);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          category: data.get("category"),
          datetime1: data.get("datetime1") || "",
          datetime2: data.get("datetime2") || "",
          message: data.get("message") || "",
          _hp: data.get("_hp") || "",
        }),
      });

      const result = await res.json();
      if (result.success) {
        router.push("/contact/complete");
      } else {
        setErrors({ server: result.errors?.[0] || "送信に失敗しました。" });
      }
    } catch {
      setErrors({ server: "送信に失敗しました。しばらく経ってからお試しください。" });
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full bg-charcoal border border-gold/20 text-offwhite text-sm px-4 py-3 placeholder:text-warmgray focus:border-gold focus:outline-none transition-colors";
  const labelBase = "block text-offwhite text-sm mb-2";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <div className="absolute opacity-0 pointer-events-none" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            お名前 <span className="text-gold text-xs ml-1">必須</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="山田 太郎"
            className={inputBase}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            メールアドレス <span className="text-gold text-xs ml-1">必須</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            className={inputBase}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            電話番号 <span className="text-gold text-xs ml-1">必須</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="090-1234-5678"
            className={inputBase}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className={labelBase}>
            お問い合わせ種別 <span className="text-gold text-xs ml-1">必須</span>
          </label>
          <select
            id="category"
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%239A9A9A%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_8px] bg-[right_16px_center] bg-no-repeat pr-10`}
          >
            <option value="" disabled>
              選択してください
            </option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
        </div>

        {/* Datetime fields — shown only for counseling */}
        {showDatetime && (
          <div className="space-y-4 p-5 border border-gold/10 bg-obsidian">
            <p className="text-warmgray text-xs">ご希望の日時をお選びください</p>
            <div>
              <label htmlFor="datetime1" className={labelBase}>
                第1希望
              </label>
              <input
                id="datetime1"
                name="datetime1"
                type="datetime-local"
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="datetime2" className={labelBase}>
                第2希望
              </label>
              <input
                id="datetime2"
                name="datetime2"
                type="datetime-local"
                className={inputBase}
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelBase}>
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="ご質問やご要望がありましたらご記入ください"
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Server error */}
        {errors.server && (
          <div className="bg-red-900/20 border border-red-500/30 px-4 py-3">
            <p className="text-red-400 text-sm">{errors.server}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto bg-gold text-obsidian font-medium text-sm px-12 py-4 tracking-[0.05em] hover:bg-[#b8963f] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "送信中..." : "送信する"}
        </button>
      </div>

      {/* Contact alternatives */}
      <div className="mt-12 pt-8 border-t border-gold/10">
        <p className="text-warmgray text-sm mb-6">
          お急ぎの場合はお電話またはLINEでご連絡ください
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="flex items-center justify-center gap-3 border border-gold/20 px-6 py-3 text-offwhite text-sm hover:border-gold transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {PHONE}
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-line-green text-white text-sm font-medium px-6 py-3 hover:bg-[#05b34c] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE予約
          </a>
        </div>
      </div>
    </form>
  );
}
