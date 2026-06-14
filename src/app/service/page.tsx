import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
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
    title: '余白で読み手を引き込む',
    body: 'パラパラ漫画には、ナレーションやBGMの「余白」があります。情報を一方的に押し付けず、視聴者自身が想像し、気持ちを乗せながら読み進められます。',
  },
  {
    title: '重い話を、柔らかく',
    body: '法律・制度・義務に紐づく啓発テーマは、どうしても堅くなりがち。手描きの温度感が、その堅さを和らげ、「自分にも関係ある話」として受け取ってもらえます。',
  },
  {
    title: '最後まで見たくなる',
    body: 'ストーリー構造を持たせることで、視聴完了率が上がります。家電製品協会様の事例では、一般的な動画広告の3倍の視聴完了率を実現しました。',
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
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <SectionHeading
                title="手描きアニメーションのパラパラ漫画"
                align="left"
                lead="啓発広報ラボの独自手法として、手描きパラパラ漫画動画を中心に据えています。500社以上の制作実績に基づく、独自の表現手法です。"
              />
              <div className="mt-8">
                <Button href="https://parapara-manga.com/" variant="secondary">
                  パラパラ漫画の制作実績を見る →
                </Button>
              </div>
            </div>
            <div className="rounded border border-border bg-white p-8">
              <div className="space-y-6">
                {mangaReasons.map((reason, index) => (
                  <article key={reason.title} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <p className="font-en text-sm font-bold text-mustard">
                      Reason {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-navy">{reason.title}</h3>
                    <p className="mt-3 text-[15px] leading-body text-text">{reason.body}</p>
                  </article>
                ))}
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
