import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'お問い合わせ | 啓発広報ラボ',
  description:
    '啓発広報ラボへのご相談・取材依頼はこちらから。業界団体・公益法人の広報担当者の方からのお問い合わせをお待ちしています。担当者より追ってご返信いたします。',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Contact
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              お問い合わせ
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              啓発広報に関するご相談・取材依頼を、こちらからお寄せください。担当者より追ってご返信いたします。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <aside className="rounded border border-border bg-cream p-8">
              <h2 className="font-serif text-2xl font-bold text-navy">
                ご相談いただける内容
              </h2>
              <ul className="mt-6 space-y-4 text-[15px] leading-body text-text">
                <li className="border-b border-border pb-4">啓発広報の企画・整理</li>
                <li className="border-b border-border pb-4">パラパラ漫画動画の制作相談</li>
                <li className="border-b border-border pb-4">SNS広告・キャンペーン運用</li>
                <li className="border-b border-border pb-4">取材・インタビュー掲載のご相談</li>
                <li>資料請求・その他のお問い合わせ</li>
              </ul>
            </aside>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
