import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { JsonLd, siteUrl } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: '事例：家電製品協会様 視聴完了率3倍 | 啓発広報ラボ',
  description:
    '一般財団法人 家電製品協会様の啓発広報の取り組み事例。家電リサイクル法を若年層に届けるため、パラパラ漫画動画とSNS広告を組み合わせ、視聴完了率3倍を実現しました。',
  openGraph: {
    type: 'article',
  },
}

const overview = [
  ['クライアント', '一般財団法人 家電製品協会様'],
  ['業界', '家電業界（業界団体）'],
  ['法律的背景', '家電リサイクル法'],
  ['取り組み期間', '2022年〜継続中'],
  ['主な対象', '若年層（10代〜20代）'],
]

const approach = [
  {
    title: 'ブランド資産の整理',
    body: 'オリジナルキャラクターのリニューアル。家電リサイクル法を象徴する親しみやすいキャラクターを再設計。若年層が「かわいい」「親しみやすい」と感じる方向に刷新しました。',
  },
  {
    title: 'コンテンツ制作',
    body: 'パラパラ漫画動画の制作。手描きの温度感を活かし、家電リサイクルの「自分ごと」化を促進。1分尺のショート版と、3分の本編版を制作しました。',
  },
  {
    title: '運用・配信',
    body: 'Xでのプレゼントキャンペーン展開。動画をフックに、若年層への認知拡大と理解促進を狙いました。SNS広告の配信設計、効果測定までを伴走支援。',
  },
  {
    title: '二次展開',
    body: '動画コンテンツを、印刷物・公式サイト・他SNSへ二次展開。コンテンツ資産として、複数チャネルで活用しました。',
  },
]

const comments = [
  '数字だけでなく、若い世代に「自分ごと」として届いている実感がありました。',
  '啓発広報って、効果が見えにくい領域ですが、ちゃんと向き合ってくれるパートナーに出会えた感覚があります。',
  '「作って終わり」ではなく、運用・効果検証まで一貫してサポートしてもらえる安心感がありました。',
]

export default function KadenSeihinKyokaiCasePage() {
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '視聴完了率3倍を実現した、若年層向け啓発広報の取り組み',
    alternativeHeadline: '一般財団法人 家電製品協会様の事例',
    description:
      '家電リサイクル法を若年層に届けるため、パラパラ漫画動画とSNS広告・Xプレゼントキャンペーンを組み合わせた啓発施策を実施。',
    image: `${siteUrl}/images/case/kaden-seihin-kyokai-thumbnail.jpg`,
    datePublished: '2026-06-01',
    author: {
      '@type': 'Organization',
      name: '株式会社アトムストーリー',
    },
    publisher: {
      '@type': 'Organization',
      name: '株式会社アトムストーリー',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/case/kaden-seihin-kyokai/`,
    about: {
      '@type': 'Organization',
      name: '一般財団法人 家電製品協会',
      description: '家電製品の普及・リサイクルに関わる業界団体',
    },
    keywords:
      '啓発広報, 業界団体, 一般財団法人, 家電リサイクル法, パラパラ漫画, SNS広告, 若年層向け啓発',
  }

  return (
    <>
      <JsonLd data={caseJsonLd} />
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Case Study
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              視聴完了率3倍を実現した、
              <br className="hidden md:block" />
              若年層向け啓発広報の取り組み
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mt-7 text-[15px] font-bold leading-body text-text md:text-lg">
              一般財団法人 家電製品協会様の事例
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr]">
            <div className="flex aspect-video items-center justify-center rounded border border-dashed border-navy/30 bg-navy-50 text-center text-sm leading-body text-navy">
              家電製品協会様の動画・サムネイルを
              <br />
              ここに配置予定
            </div>
            <div className="rounded border border-border bg-white">
              {overview.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[120px_1fr] border-b border-border last:border-0"
                >
                  <dt className="bg-cream px-4 py-4 text-sm font-bold text-navy">{label}</dt>
                  <dd className="px-4 py-4 text-[15px] leading-body text-text">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading title="背景・課題" align="left" />
            <div className="rounded border border-border bg-white p-8">
              <div className="space-y-5 text-[15px] leading-body text-text md:text-base">
                <p>
                  家電リサイクル法は、家電製品を捨てる際の正しい処理方法を定めた重要な法律です。しかし、若年層の認知率が低く、不法投棄や違法業者による回収が課題となっていました。
                </p>
                <p>
                  「法律を理解してもらう」だけでは、若い世代に届かない。「自分ごと」として受け取ってもらえる伝え方が必要でした。
                </p>
                <p>
                  家電製品協会様は、若年層への啓発活動を強化するため、新しい表現手法を探していました。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="取り組み内容" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="rounded border border-border bg-white p-8 transition-colors duration-200 hover:border-navy"
              >
                <p className="font-en text-sm font-bold text-mustard">
                  Block {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold text-navy">{item.title}</h2>
                <p className="mt-5 text-[15px] leading-body text-text">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <SectionHeading title="成果" align="left" />
              <div className="mt-8 inline-flex rounded bg-mustard px-6 py-4 text-xl font-bold text-white">
                視聴完了率3倍
              </div>
              <p className="mt-3 text-sm text-[#666666]">一般的な動画広告比</p>
            </div>
            <div className="rounded border border-border bg-white p-8">
              <div className="space-y-5 text-[15px] leading-body text-text md:text-base">
                <p>
                  パラパラ漫画動画の視聴完了率は、一般的な動画広告の3倍を実現。特に若年層からの反応が大きく、Xでのキャンペーン参加者は当初想定の2倍を超えました。
                </p>
                <p>
                  家電製品協会様の三善様からは、「数字だけでなく、若い世代に『自分ごと』として届いている実感がありました」というコメントをいただきました。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="クライアントの声" lead="三善 徹 様（家電製品協会）" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {comments.map((comment) => (
              <blockquote
                key={comment}
                className="rounded border border-border bg-cream p-7 text-[15px] italic leading-body text-text"
              >
                「{comment}」
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-[60px] text-white md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-[1.4] md:text-4xl">
              啓発広報の取り組みを、
              <br className="hidden md:block" />
              伝わる形に変える
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-mustard" />
            <p className="mt-7 text-[15px] leading-body text-white/85 md:text-base">
              企画段階から制作・運用・効果検証まで、状況に合わせてご相談いただけます。
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/interview/kaden-seihin-kyokai/" variant="secondary">
                インタビュー記事を読む →
              </Button>
              <Button href="/contact/">啓発広報のご相談はこちら →</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
