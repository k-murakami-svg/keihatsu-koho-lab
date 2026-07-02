'use client'

import { useState } from 'react'

const purposes = ['啓発広報のご相談', '取材のご依頼', '資料請求', 'その他']

type Status = 'idle' | 'sending' | 'success' | 'error'

type WindowWithGtag = Window & {
  gtag?: (command: 'event', eventName: string, params?: Record<string, string>) => void
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setMessage('')

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.message ?? '送信できませんでした。')
      }

      const purpose = typeof payload.purpose === 'string' ? payload.purpose : ''
      ;(window as WindowWithGtag).gtag?.('event', 'generate_lead', {
        form_name: 'contact',
        inquiry_type: purpose,
      })

      setStatus('success')
      setMessage('お問い合わせありがとうございます。担当者より追ってご返信いたします。')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(
        error instanceof Error
          ? error.message
          : '送信できませんでした。時間をおいて再度お試しください。',
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-border bg-white p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy">お名前 *</span>
          <input
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded border border-border px-4 py-3 text-base text-text outline-none transition-colors focus:border-navy"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">所属・団体名 *</span>
          <input
            name="organization"
            type="text"
            required
            className="mt-2 w-full rounded border border-border px-4 py-3 text-base text-text outline-none transition-colors focus:border-navy"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">メールアドレス *</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded border border-border px-4 py-3 text-base text-text outline-none transition-colors focus:border-navy"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">電話番号</span>
          <input
            name="phone"
            type="tel"
            className="mt-2 w-full rounded border border-border px-4 py-3 text-base text-text outline-none transition-colors focus:border-navy"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-navy">ご用件 *</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {purposes.map((purpose) => (
            <label
              key={purpose}
              className="flex items-center gap-3 rounded border border-border px-4 py-3 text-[15px] text-text transition-colors hover:border-navy hover:bg-cream"
            >
              <input
                name="purpose"
                type="radio"
                value={purpose}
                required
                className="h-4 w-4 accent-mustard"
              />
              <span>{purpose}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-sm font-bold text-navy">お問い合わせ内容 *</span>
        <textarea
          name="message"
          required
          rows={7}
          className="mt-2 w-full rounded border border-border px-4 py-3 text-base leading-body text-text outline-none transition-colors focus:border-navy"
        />
      </label>

      <label className="mt-6 block">
        <span className="text-sm font-bold text-navy">お困りごと・課題感</span>
        <span className="mt-1 block text-xs leading-body text-[#666666]">
          より具体的なご提案のため、現状のお困りごとがあればお聞かせください。
        </span>
        <textarea
          name="concern"
          rows={5}
          className="mt-2 w-full rounded border border-border px-4 py-3 text-base leading-body text-text outline-none transition-colors focus:border-navy"
        />
      </label>

      <p className="mt-6 text-xs leading-body text-[#666666]">
        送信前に
        <a href="/privacy/" className="font-bold text-navy">
          プライバシーポリシー
        </a>
        をご確認ください。
      </p>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-mustard px-7 py-3.5 text-base font-bold text-white transition-colors duration-200 hover:bg-mustard-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? '送信中...' : '送信する →'}
        </button>
      </div>

      {message ? (
        <p
          className={`mt-6 rounded border p-4 text-[15px] leading-body ${
            status === 'success'
              ? 'border-mustard bg-mustard-50 text-navy'
              : 'border-border bg-cream text-text'
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  )
}
