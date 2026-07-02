import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 啓発広報ラボ',
  description: '啓発広報ラボのプライバシーポリシーです。',
}

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. 取得する情報',
      body: [
        '当サイトでは、お問い合わせフォームの利用時に、お名前、所属・団体名、メールアドレス、電話番号、お問い合わせ内容、お困りごと・課題感などをご入力いただく場合があります。',
        'また、アクセス解析のため、Cookie等を通じて閲覧状況に関する情報を取得する場合があります。',
      ],
    },
    {
      title: '2. 利用目的',
      body: [
        '取得した個人情報は、お問い合わせへの回答、資料送付、取材・相談内容の確認、サービス改善、当サイトの運営管理のために利用します。',
        '取得した情報を、本人の同意なく上記目的以外に利用することはありません。',
      ],
    },
    {
      title: '3. 第三者提供',
      body: [
        '法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供することはありません。',
      ],
    },
    {
      title: '4. 外部サービスの利用',
      body: [
        '当サイトでは、コンテンツ管理にmicroCMS、お問い合わせメールの送信にResendを利用します。これらのサービスを通じて、サイト運営に必要な範囲で情報が処理される場合があります。',
        'また、アクセス解析のためにGoogle Analytics 4を利用します。Google AnalyticsではCookieを使用し、個人を特定しない形でアクセス情報を収集します。',
      ],
    },
    {
      title: '5. 安全管理',
      body: [
        '取得した個人情報について、漏えい、滅失、毀損、不正アクセス等を防止するため、必要かつ適切な安全管理措置を講じます。',
      ],
    },
    {
      title: '6. 開示・訂正・削除等',
      body: [
        '本人から個人情報の開示、訂正、利用停止、削除等の請求があった場合、法令に基づき適切に対応します。',
      ],
    },
    {
      title: '7. プライバシーポリシーの変更',
      body: [
        '本ポリシーの内容は、法令の変更や当サイトの運営方針に応じて、予告なく変更する場合があります。変更後の内容は、当サイトに掲載した時点で効力を生じるものとします。',
      ],
    },
    {
      title: '8. お問い合わせ窓口',
      body: [
        '個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。',
      ],
    },
  ]

  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              プライバシーポリシー
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[15px] leading-body text-text md:text-base">
              啓発広報ラボ（以下「当サイト」といいます）は、株式会社アトムストーリー（以下「当社」といいます）が運営しています。当社は、当サイトにおける個人情報の取り扱いについて、以下のとおり定めます。
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="rounded border border-border bg-white p-8">
                  <h2 className="font-serif text-2xl font-bold text-navy">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-body text-text md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded border border-border bg-cream p-8 text-[15px] leading-body text-text">
              <p className="font-bold text-navy">運営会社</p>
              <p className="mt-3">
                株式会社アトムストーリー
                <br />
                〒107-0062 東京都港区南青山3丁目1番36号 青山丸竹ビル6F
                <br />
                啓発広報ラボ：https://keihatsu-koho-lab.jp/
              </p>
              <p className="mt-5 text-sm text-[#666666]">制定日：2026年6月14日</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
