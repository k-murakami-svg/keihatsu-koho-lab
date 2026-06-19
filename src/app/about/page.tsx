import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FAQ } from '@/components/FAQ'
import { SectionHeading } from '@/components/SectionHeading'
import { JsonLd } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: '啓発広報ラボについて | 会社概要・株式会社アトムストーリー',
  description:
    '啓発広報ラボは株式会社アトムストーリーが運営する、業界団体・公益法人の啓発広報の専門メディアです。運営方針・会社概要・取材依頼の窓口をご案内します。',
}

const company = [
  ['会社名', '株式会社アトムストーリー'],
  ['設立', '2013年6月'],
  ['代表者', '村上 賢太（代表取締役）'],
  ['所在地', '〒107-0062 東京都港区南青山3丁目1番36号 青山丸竹ビル6F'],
  ['電話番号', '03-6822-2676'],
  ['公式サイト', 'https://atom-story.com/'],
  ['姉妹サイト', 'https://parapara-manga.com/'],
]

const businesses = [
  'パラパラ漫画ムービー制作',
  'ストーリーマーケティング支援',
  '啓発広報支援（啓発広報ラボ）',
  'SNS運用代行',
  '啓発キャラクター制作',
]

export default function AboutPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '啓発広報ラボはどんなサービスを提供していますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つでサポートします。成果定義から効果検証まで一貫してご提供します。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのような団体が対象ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '業界団体・公益法人・一般財団法人・一般社団法人・NPO・行政の啓発広報担当者の方々を主な対象としています。',
        },
      },
      {
        '@type': 'Question',
        name: '相談だけでも可能ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。「何から相談すればいいか分からない」段階からお受けします。まずは現状をお聞かせください。',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              About
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              啓発広報ラボについて
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              啓発広報ラボは、業界団体・公益法人・一般社団法人の啓発広報を支援する専門メディアです。株式会社アトムストーリーが運営しています。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
            <div>
              <SectionHeading title="ラボの位置づけ" align="left" />
              <div className="mt-5 lg:mt-6">
                <Image
                  src="/images/about-position-flow.png"
                  alt="想いを整理する、伝わる形にする、共感を生み出す、行動につなげる、文化をつくる流れ"
                  width={1024}
                  height={1024}
                  className="mx-auto w-full max-w-[620px] object-contain lg:-ml-5 lg:max-w-[660px]"
                />
              </div>
            </div>
            <div className="space-y-6 lg:pt-[74px]">
              <article className="rounded border border-border bg-white p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-[92px_1fr] md:items-start">
                  <Image
                    src="/images/about-card-lab.png"
                    alt=""
                    width={160}
                    height={160}
                    className="h-20 w-20 rounded-full object-contain md:h-[92px] md:w-[92px]"
                  />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy">
                      啓発広報ラボとは
                    </h2>
                    <p className="mt-5 text-[15px] leading-body text-text md:text-base">
                      法律・自主規制・業界の使命に基づいた啓発活動を行う業界団体・公益法人の広報担当者の方々を主な対象とし、企画から制作・運用・効果検証まで一貫して伴走支援しています。
                    </p>
                  </div>
                </div>
              </article>
              <article className="rounded border border-border bg-cream p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-[92px_1fr] md:items-start">
                  <Image
                    src="/images/about-card-reason.png"
                    alt=""
                    width={160}
                    height={160}
                    className="h-20 w-20 rounded-full object-contain md:h-[92px] md:w-[92px]"
                  />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy">
                      なぜラボを立ち上げたか
                    </h2>
                    <div className="mt-5 space-y-5 text-[15px] leading-body text-text md:text-base">
                      <p>
                        業界団体・公益法人の啓発広報は、社会にとって重要な活動です。しかし、担当者の方々から「やっているのに、伝わってる実感がない」「成果をどう測ればいいか分からない」という声を多く伺ってきました。
                      </p>
                      <p>
                        私たちは、500社以上のパラパラ漫画ムービー制作で培ったストーリーマーケティングの知見を活かし、業界団体・公益法人の啓発広報に特化したチームとして、「伝わった実感」を取り戻すための活動を展開しています。
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded border border-border bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-navy">運営チーム</h2>
              <dl className="mt-6 space-y-4 text-[15px] leading-body">
                <div>
                  <dt className="font-bold text-navy">編集長</dt>
                  <dd className="text-text">村上 賢太（株式会社アトムストーリー代表取締役）</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">編集部</dt>
                  <dd className="text-text">株式会社アトムストーリー</dd>
                </div>
              </dl>
            </article>
            <article className="rounded border border-border bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-navy">取材・寄稿の窓口</h2>
              <p className="mt-5 text-[15px] leading-body text-text">
                業界団体・公益法人などで啓発広報に取り組まれている団体への取材を行っています。掲載方針と合うかを確認させていただき、個別に詳細をご相談いたします。
              </p>
              <div className="mt-7">
                <Button href="/contact/" variant="secondary">
                  取材のお問い合わせはこちら →
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="会社概要" />
          <div className="mx-auto mt-12 max-w-4xl rounded border border-border bg-white">
            {company.map(([label, value]) => (
              <div key={label} className="grid border-b border-border last:border-0 md:grid-cols-[180px_1fr]">
                <dt className="bg-cream px-5 py-4 text-sm font-bold text-navy">{label}</dt>
                <dd className="px-5 py-4 text-[15px] leading-body text-text">{value}</dd>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <h3 className="font-serif text-2xl font-bold text-navy">主な事業</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {businesses.map((business) => (
                <div key={business} className="rounded border border-border bg-white p-5 text-[15px] font-bold text-navy">
                  {business}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <SectionHeading title="よくあるご質問" />
          <div className="mt-12">
            <FAQ />
          </div>
        </Container>
      </section>
    </>
  )
}
