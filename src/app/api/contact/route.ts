import { Resend } from 'resend'

type ContactBody = {
  name?: string
  organization?: string
  email?: string
  phone?: string
  purpose?: string
  message?: string
  concern?: string
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(req: Request) {
  const body = (await req.json()) as ContactBody
  const requiredFields = [body.name, body.organization, body.email, body.purpose, body.message]

  if (requiredFields.some((value) => !value || !String(value).trim())) {
    return Response.json(
      { message: '必須項目を入力してください。' },
      { status: 400 },
    )
  }

  const senderEmail = body.email!

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey || !to) {
    return Response.json(
      { message: '送信設定が未完了です。Resendの環境変数を設定してください。' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const safe = {
    name: escapeHtml(body.name),
    organization: escapeHtml(body.organization),
    email: escapeHtml(body.email),
    phone: escapeHtml(body.phone),
    purpose: escapeHtml(body.purpose),
    message: escapeHtml(body.message).replaceAll('\n', '<br />'),
    concern: escapeHtml(body.concern).replaceAll('\n', '<br />'),
  }

  try {
    const result = await resend.emails.send({
      from: `お問い合わせフォーム <${from}>`,
      to,
      replyTo: senderEmail,
      subject: `【啓発広報ラボ】お問い合わせ：${body.purpose}`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前：</strong>${safe.name}</p>
        <p><strong>所属・団体名：</strong>${safe.organization}</p>
        <p><strong>メール：</strong>${safe.email}</p>
        <p><strong>ご用件：</strong>${safe.purpose}</p>
        ${safe.phone ? `<p><strong>電話：</strong>${safe.phone}</p>` : ''}
        <p><strong>お問い合わせ内容：</strong></p>
        <p>${safe.message}</p>
        ${safe.concern ? `<p><strong>お困りごと・課題感：</strong></p><p>${safe.concern}</p>` : ''}
      `,
    })

    if (result.error) {
      console.error('Resend error:', result.error.message)
      return Response.json(
        { message: '送信できませんでした。設定を確認してから再度お試しください。' },
        { status: 500 },
      )
    }

    const autoReply = await resend.emails.send({
      from: `啓発広報ラボ <${from}>`,
      to: senderEmail,
      replyTo: to,
      subject: '【啓発広報ラボ】お問い合わせありがとうございます',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #2B2B2B; line-height: 1.8;">
          <p>${safe.name} 様</p>
          <p>
            この度は、啓発広報ラボへお問い合わせいただきありがとうございます。<br />
            以下の内容でお問い合わせを受け付けました。
          </p>
          <p>
            担当よりメッセージしますので、しばらくお待ちください。
          </p>

          <div style="margin: 28px 0; padding: 20px; border: 1px solid #E0E0E0; background: #FAF8F2;">
            <p style="margin-top: 0;"><strong>お問い合わせ内容の控え</strong></p>
            <p><strong>お名前：</strong>${safe.name}</p>
            <p><strong>所属・団体名：</strong>${safe.organization}</p>
            <p><strong>メールアドレス：</strong>${safe.email}</p>
            ${safe.phone ? `<p><strong>電話番号：</strong>${safe.phone}</p>` : ''}
            <p><strong>ご用件：</strong>${safe.purpose}</p>
            <p><strong>お問い合わせ内容：</strong></p>
            <p>${safe.message}</p>
            ${safe.concern ? `<p><strong>お困りごと・課題感：</strong></p><p>${safe.concern}</p>` : ''}
          </div>

          <p>
            ※このメールは自動返信です。<br />
            内容にお心当たりがない場合は、お手数ですが本メールへご返信ください。
          </p>

          <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 28px 0;" />
          <p>
            啓発広報ラボ<br />
            運営：株式会社アトムストーリー<br />
            〒107-0062 東京都港区南青山3丁目1番36号 青山丸竹ビル6F<br />
            Web：https://keihatsu-koho-lab.jp/
          </p>
        </div>
      `,
    })

    if (autoReply.error) {
      console.error('Resend auto reply error:', autoReply.error.message)
      return Response.json(
        { message: '受付メールは送信されましたが、自動返信メールを送信できませんでした。' },
        { status: 500 },
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { message: '送信できませんでした。時間をおいて再度お試しください。' },
      { status: 500 },
    )
  }
}
