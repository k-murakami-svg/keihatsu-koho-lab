import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { JsonLd, siteUrl } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'サービス内容 | 伴走支援・企画・制作運用 - 啓発広報ラボ',
  description:
    '業界団体・公益法人の啓発広報を、3つの支援でサポート。成果定義から伴走する企画支援、ターゲット分析と戦略設計、パラパラ漫画動画やSNS運用まで、全工程を一貫してご提供します。',
}

const supportMenus = [
  {
    number: '01',
    title: '伴走支援',
    catch: '啓発広報の、根っこから整理する。',
    overview:
      '成果定義・KPI設計・効果検証の段階から、一緒に考えます。「何を伝えるか」「誰に届けるか」を、対話を通じて言語化することから始めます。',
    contents: [
      '現状ヒアリング・課題整理',
      '成果定義・KPI設計',
      '効果検証の設計',
      '年間広報計画の策定',
      '月次の定例ミーティング',
    ],
    recommended: [
      '広報全体を俯瞰して整理したい',
      '「やっていることの意義」を社内に説明したい',
      '継続的なパートナーが欲しい',
    ],
  },
  {
    number: '02',
    title: '企画・設計',
    catch: '届くための戦略を、組み立てる。',
    overview:
      'ターゲット分析・アンケート調査・表現戦略・コンテンツ設計を行います。「届かない理由」を構造的に分解し、戦略を組み立てます。',
    contents: [
      'ターゲット分析・ペルソナ設計',
      'アンケート調査・インタビュー',
      '表現戦略・コンテンツ設計',
      'キャンペーン全体設計',
      'メッセージ開発',
    ],
    recommended: [
      '特定のテーマで届かせたい層がある',
      '新しいキャンペーンを企画したい',
      'データに基づいた戦略を立てたい',
    ],
  },
  {
    number: '03',
    title: '制作・運用',
    catch: '伝わるかたちで、つくり、届ける。',
    overview:
      '啓発動画・印刷物・キャラクター制作・SNS広告運用・効果測定レポートまで、一貫してご提供します。「作って終わり」ではなく、「届くまで」を担います。',
    contents: [
      '啓発動画制作（パラパラ漫画、アニメーション、実写、インフォグラフィックほか）',
      '印刷物制作（パンフレット、ポスター、リーフレットほか）',
      'キャラクター制作・ブランディング',
      'SNS広告運用・キャンペーン運用',
      '効果測定・レポート作成',
    ],
    recommended: [
      '具体的なコンテンツが必要',
      'SNS運用までまるごと任せたい',
      '効果測定もセットで頼みたい',
    ],
  },
]

const mangaReasons = [
  {
    icon: '/images/service/manga-reason-empathy.png',
    title: '共感できる',
    body: '主人公の悩みや葛藤を描くことで、「もし自分だったら」と自然に感情移入できます。',
  },
  {
    icon: '/images/service/manga-reason-continuation.png',
    title: '続きが気になる',
    body: 'ストーリーには「この後どうなるのだろう」という力があり、最後まで見てもらいやすくなります。',
  },
  {
    icon: '/images/service/manga-reason-personal.png',
    title: '自分ごと化しやすい',
    body: 'シンプルな表現だからこそ、視聴者自身が想像しやすく、自分の問題として受け取れます。',
  },
  {
    icon: '/images/service/manga-reason-insight.png',
    title: '気づきが生まれる',
    body: '押し付けるのではなく、ストーリーを通じて気づきを促し、考えるきっかけをつくります。',
  },
]

const mangaPanels = [
  {
    src: '/images/service/manga-panel-insight.png',
    alt: 'リサイクル工場に運ばれる家電を描いたパラパラ漫画の場面',
    width: 1324,
    height: 748,
  },
  {
    src: '/images/service/manga-panel-empathy.png',
    alt: 'テレビを見る女性が家族の場面を想像するパラパラ漫画の場面',
    width: 1310,
    height: 736,
  },
  {
    src: '/images/service/manga-panel-personal.png',
    alt: '請求書を渡されて困る人物を描いたパラパラ漫画の場面',
    width: 1298,
    height: 732,
  },
  {
    src: '/images/service/manga-panel-continuation.png',
    alt: '電話で無料回収の案内を受ける人物を描いたパラパラ漫画の場面',
    width: 1294,
    height: 743,
  },
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[15px] leading-body text-text">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-mustard" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServicePage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '啓発広報支援サービス',
    alternateName: '業界団体・公益法人の啓発広報支援',
    description:
      '業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つの支援で一貫してサポートします。',
    provider: {
      '@type': 'Organization',
      name: '株式会社アトムストーリー',
      url: `${siteUrl}/`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    serviceType: '啓発広報',
  }

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Service
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              伴走支援・企画・制作運用
              <br className="hidden md:block" />
              啓発広報の全工程をサポート
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              啓発広報には、企画から制作、効果検証まで、考えるべきことがたくさんあります。私たちは、その全工程を伴走できる体制を整えています。3つの支援を、状況に応じて組み合わせてご提供します。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="space-y-8">
            {supportMenus.map((menu) => (
              <article
                key={menu.title}
                className="overflow-hidden rounded border border-border bg-white transition-colors duration-200 hover:border-navy"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="bg-navy p-8 text-white">
                    <p className="font-en text-sm font-bold text-mustard">{menu.number}</p>
                    <h2 className="mt-3 font-serif text-3xl font-bold">{menu.title}</h2>
                    <p className="mt-5 font-serif text-lg font-bold leading-[1.7] text-white/95">
                      {menu.catch}
                    </p>
                  </div>
                  <div className="p-8">
                    <p className="text-[15px] leading-body text-text md:text-base">
                      {menu.overview}
                    </p>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h3 className="border-b border-border pb-3 text-lg font-bold text-navy">
                          提供内容
                        </h3>
                        <div className="mt-4">
                          <BulletList items={menu.contents} />
                        </div>
                      </div>
                      <div>
                        <h3 className="border-b border-border pb-3 text-lg font-bold text-navy">
                          こんな方におすすめ
                        </h3>
                        <div className="mt-4">
                          <BulletList items={menu.recommended} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <h2 className="font-serif text-[30px] font-bold leading-[1.35] text-navy md:text-[44px]">
                なぜ、パラパラ漫画は
                <br className="md:hidden" />
                人の心に届くのか
              </h2>
              <p className="mt-5 text-[15px] font-bold leading-body text-text md:text-xl">
                ストーリーで伝えるから、共感が生まれ、自分ごととして受け取られ、行動につながります。
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded border border-border bg-white">
              {mangaReasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="grid border-b border-border last:border-b-0 lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="border-b border-border bg-white lg:border-b-0 lg:border-r">
                    <Image
                      src={mangaPanels[index].src}
                      alt={mangaPanels[index].alt}
                      width={mangaPanels[index].width}
                      height={mangaPanels[index].height}
                      className="aspect-[16/9] h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-5 p-6 sm:grid-cols-[112px_1fr] sm:items-center md:p-8 lg:p-10">
                    <Image
                      src={reason.icon}
                      alt=""
                      width={220}
                      height={220}
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-bold leading-[1.45] text-navy md:text-[30px]">
                        {reason.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-body text-text md:text-base">
                        {reason.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-5xl text-center">
              <p className="font-serif text-[24px] font-bold leading-[1.55] text-navy md:text-[34px]">
                パラパラ漫画は、難しい内容や伝えにくいテーマも、
                <br className="hidden md:block" />
                ストーリーを通じて
                <span className="text-mustard">「自分ごと」</span>
                として受け止めてもらえる
                <span className="whitespace-nowrap">表現手法です。</span>
              </p>
              <div className="mt-8">
                <Button href="https://parapara-manga.com/" variant="secondary">
                  パラパラ漫画の制作実績を見る →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-[60px] text-white md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-[1.4] md:text-4xl">
              啓発広報のご相談はこちら
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-mustard" />
            <p className="mt-7 text-[15px] leading-body text-white/85 md:text-base">
              現状整理から制作・運用まで、どの段階からでもご相談いただけます。
            </p>
            <div className="mt-9">
              <Button href="/contact/">お問い合わせフォームへ →</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
