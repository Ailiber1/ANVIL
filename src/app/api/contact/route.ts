import { NextResponse } from "next/server";
import { resend, FROM_EMAIL, ADMIN_EMAIL } from "@/lib/resend";

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  category: string;
  datetime1?: string;
  datetime2?: string;
  message?: string;
  _hp?: string; // honeypot
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    // Honeypot check — silently succeed for bots
    if (body._hp) {
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    const errors: string[] = [];
    if (!body.name?.trim()) errors.push("お名前は必須です");
    if (!body.email?.trim()) errors.push("メールアドレスは必須です");
    else if (!validateEmail(body.email.trim()))
      errors.push("メールアドレスの形式が正しくありません");
    if (!body.phone?.trim()) errors.push("電話番号は必須です");
    if (!body.category?.trim()) errors.push("お問い合わせ種別は必須です");

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const name = escapeHtml(body.name.trim());
    const email = body.email.trim();
    const phone = escapeHtml(body.phone.trim());
    const category = escapeHtml(body.category.trim());
    const datetime1 = body.datetime1 ? escapeHtml(body.datetime1.trim()) : "";
    const datetime2 = body.datetime2 ? escapeHtml(body.datetime2.trim()) : "";
    const message = body.message ? escapeHtml(body.message.trim()) : "";

    const datetimeSection =
      datetime1 || datetime2
        ? `
        <tr>
          <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;vertical-align:top;">希望日時</td>
          <td style="padding:12px 16px;color:#F5F5F0;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">
            ${datetime1 ? `第1希望: ${datetime1}` : ""}
            ${datetime1 && datetime2 ? "<br>" : ""}
            ${datetime2 ? `第2希望: ${datetime2}` : ""}
          </td>
        </tr>`
        : "";

    const messageSection = message
      ? `
        <tr>
          <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;vertical-align:top;">お問い合わせ内容</td>
          <td style="padding:12px 16px;color:#F5F5F0;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);white-space:pre-wrap;">${message}</td>
        </tr>`
      : "";

    // Admin notification email
    const adminHtml = `
    <div style="background-color:#0A0A0A;padding:40px 20px;font-family:'Helvetica Neue',Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;">
        <p style="font-family:Georgia,serif;color:#C9A96E;font-size:28px;letter-spacing:0.1em;margin:0 0 8px;">ANVIL</p>
        <p style="color:#9A9A9A;font-size:12px;margin:0 0 32px;">新規お問い合わせが届きました</p>
        <table style="width:100%;border-collapse:collapse;background-color:#141414;">
          <tr>
            <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;">お名前</td>
            <td style="padding:12px 16px;color:#F5F5F0;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;">メールアドレス</td>
            <td style="padding:12px 16px;color:#F5F5F0;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;">電話番号</td>
            <td style="padding:12px 16px;color:#F5F5F0;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">${phone}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;">種別</td>
            <td style="padding:12px 16px;color:#C9A96E;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">${category}</td>
          </tr>
          ${datetimeSection}
          ${messageSection}
        </table>
      </div>
    </div>`;

    // Customer auto-reply email
    const customerHtml = `
    <div style="background-color:#0A0A0A;padding:40px 20px;font-family:'Helvetica Neue',Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;">
        <p style="font-family:Georgia,serif;color:#C9A96E;font-size:28px;letter-spacing:0.1em;margin:0 0 8px;">ANVIL</p>
        <p style="color:#9A9A9A;font-size:12px;margin:0 0 32px;">Personal Training Studio</p>

        <p style="color:#F5F5F0;font-size:15px;margin:0 0 24px;">${name} 様</p>
        <p style="color:#F5F5F0;font-size:14px;line-height:1.8;margin:0 0 24px;">
          この度はお問い合わせいただき、誠にありがとうございます。<br>
          以下の内容で承りました。1営業日以内にご返信いたします。
        </p>

        <table style="width:100%;border-collapse:collapse;background-color:#141414;margin:0 0 32px;">
          <tr>
            <td style="padding:12px 16px;color:#9A9A9A;font-size:13px;border-bottom:1px solid rgba(201,169,110,0.15);width:140px;">種別</td>
            <td style="padding:12px 16px;color:#C9A96E;font-size:14px;border-bottom:1px solid rgba(201,169,110,0.15);">${category}</td>
          </tr>
          ${datetimeSection}
          ${messageSection}
        </table>

        <div style="border-top:1px solid rgba(201,169,110,0.2);padding-top:24px;margin-top:8px;">
          <p style="color:#9A9A9A;font-size:12px;line-height:1.8;margin:0;">
            お急ぎの場合は、お電話またはLINEにてご連絡ください。<br><br>
            ANVIL Personal Training Studio<br>
            〒150-0001 東京都渋谷区神宮前1-2-3 ANVILビル2F<br>
            TEL: 03-xxxx-xxxx<br>
            営業時間: 7:00 - 22:00（不定休）
          </p>
        </div>
      </div>
    </div>`;

    // Send both emails
    const [adminResult, customerResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: "【ANVIL】新規お問い合わせが届きました",
        html: adminHtml,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "【ANVIL】お問い合わせを受け付けました",
        html: customerHtml,
      }),
    ]);

    const failed = [adminResult, customerResult].filter(
      (r) => r.status === "rejected"
    );
    if (failed.length > 0) {
      console.error("Email send failed:", failed);
      return NextResponse.json(
        { success: false, errors: ["メール送信に失敗しました。しばらく経ってからお試しください。"] },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, errors: ["サーバーエラーが発生しました。"] },
      { status: 500 }
    );
  }
}
