import Image from 'next/image'
import { Button } from '@/components/Button'
import { ArticleCard } from '@/components/ArticleCard'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { getCategoryName, getInterviewList, getKnowledgeList } from '@/lib/api'
import { formatDate } from '@/lib/date'

export const revalidate = 60

const concerns = [
  {
    image: '/images/concern-signal.png',
    title: '「やっているのに、伝わってる手応えがない」',
    body: '何度も啓発キャンペーンをしてきたが、本当に届いているのか、変化があるのか、よくわからない。',
  },
  {
    image: '/images/concern-measure.png',
    title: '「成果をどう測ればいいか分からない」',
    body: '広報の効果が見えにくい。社内に説明する材料がなく、次の予算確保にも苦労している。',
  },
  {
    image: '/images/concern-words.png',
    title: '「社内に説明できる言葉がない」',
    body: '広報活動の意義は感じているが、定量的に語れない。理事会・委員会で「やっていることの価値」を伝えきれない。',
  },
  {
    image: '/images/concern-target.png',
    title: '「届けたい層に、届かない」',
    body: '特に若年層への啓発が機能していない。SNS活用も検討したいが、何から始めればいいか分からない。',
  },
]

const services = [
  {
    icon: '/images/support-icon-partner-transparent.png',
    number: '01',
    name: '伴走支援',
    catch: '啓発広報の、根っこから整理する。',
    body: '成果定義・KPI設計・効果検証の段階から、一緒に考えます。「何を伝えるか」「誰に届けるか」を、対話を通じて言語化することから始めます。',
    items: ['現状ヒアリング・課題整理', '成果定義・KPI設計', '効果検証の設計', '年間広報計画の策定'],
  },
  {
    icon: '/images/support-icon-plan-transparent.png',
    number: '02',
    name: '企画・設計',
    catch: '届くための戦略を、組み立てる。',
    body: 'ターゲット分析・アンケート調査・表現戦略・コンテンツ設計を行います。「届かない理由」を構造的に分解し、戦略を組み立てます。',
    items: ['ターゲット分析・ペルソナ設計', 'アンケート調査・インタビュー', '表現戦略・コンテンツ設計', 'キャンペーン全体設計'],
  },
  {
    icon: '/images/support-icon-create-transparent.png',
    number: '03',
    name: '制作・運用',
    catch: '伝わるかたちで、つくり、届ける。',
    body: '啓発動画・印刷物・キャラクター制作・SNS広告運用・効果測定レポートまで、一貫してご提供します。',
    items: ['啓発動画制作', '印刷物制作', 'キャラクター制作・ブランディング', 'SNS広告運用・効果測定'],
  },
]

const aboutStats = [
  {
    image: '/images/about-stat-media.png',
    title: (
      <>
        啓発広報の
        <br />
        専門チーム
      </>
    ),
    body: (
      <>
        業界団体・公益財団法人・
        <br />
        一般社団法人を支援
      </>
    ),
  },
  {
    image: '/images/about-stat-results.png',
    title: '500社以上',
    body: (
      <>
        パラパラ漫画ムービー
        <br />
        制作実績
      </>
    ),
  },
  {
    image: '/images/about-stat-founded.png',
    title: '2013年創業',
    body: (
      <>
        ストーリーマーケティングを
        <br />
        軸に支援を続けています。
      </>
    ),
  },
]

const reasons = [
  {
    image: '/images/reason-icon-eye-original.png',
    imageClassName: 'h-[96px] w-[144px]',
    title: '余白で読み手を引き込む',
    body: '情報を一方的に押し付けず、視聴者自身が想像し、気持ちを乗せながら読み進められます。',
  },
  {
    image: '/images/reason-icon-comment-original.png',
    imageClassName: 'h-[96px] w-[144px]',
    title: '重い話を、柔らかく',
    body: '法律・制度・義務に紐づく啓発テーマの堅さを和らげ、「自分にも関係ある話」として受け取ってもらえます。',
  },
  {
    image: '/images/reason-icon-play-original.png',
    title: '最後まで見たくなる',
    body: 'ストーリー構造を持たせることで、視聴完了率が上がります。家電製品協会様の事例では、一般的な動画広告の3倍を実現しました。',
  },
  {
    image: '/images/reason-icon-refresh-original.png',
    title: '複数媒体に展開できる',
    body: '1つの作品から、動画版・印刷版・SNS用の短尺版など、複数の媒体に展開できます。',
  },
]

const consultationPatterns = [
  {
    name: 'お試し制作',
    target: 'まず1本、試しに作ってみたい',
    body: 'パラパラ漫画動画1本の制作から始められます。方向性のすり合わせ、シナリオ設計、動画制作、納品まで対応します。',
    period: '3ヶ月',
  },
  {
    name: '企画段階から相談',
    target: '何から相談すればいいか分からない',
    body: '現状ヒアリング・課題整理から始めます。広報全体の課題を一緒に整理し、最適な打ち手をご提案します。',
    period: '1〜2ヶ月',
  },
  {
    name: '年間パートナー',
    target: '継続的な伴走パートナーが欲しい',
    body: '年間契約で、企画・制作・運用・効果検証まで継続的に伴走します。月次の定例会と随時のご相談に対応します。',
    period: '年間契約',
  },
]

export default async function Home() {
  const [knowledge, interviews] = await Promise.all([
    getKnowledgeList(2),
    getInterviewList(1),
  ])
  const articles = [
    ...knowledge.map((article) => ({
      id: `knowledge-${article.id}`,
      href: `/knowledge/${article.slug}/`,
      label: getCategoryName(article.category),
      title: article.title,
      description: article.description,
      date: formatDate(article.publishedAt),
      thumbnailUrl: article.thumbnail?.url,
    })),
    ...interviews.map((article) => ({
      id: `interview-${article.id}`,
      href: `/interview/${article.slug}/`,
      label: 'インタビュー',
      title: article.title,
      description: article.description,
      date: formatDate(article.publishedAt),
      thumbnailUrl: article.thumbnail?.url,
    })),
  ].slice(0, 3)

  return (
    <>
      <section className="overflow-hidden bg-white pb-[44px] pt-[32px] md:pb-12 md:pt-10">
        <Container>
          <div className="mx-auto max-w-container text-center">
            <div className="relative z-10">
              <h1 className="font-serif text-[34px] font-bold leading-[1.35] text-navy md:text-[64px]">
                <span className="whitespace-nowrap">啓発に、</span>
                <br className="md:hidden" />
                <span className="whitespace-nowrap md:ml-5">ちゃんと手応えを。</span>
              </h1>
              <div className="mx-auto mt-7 h-1 w-24 bg-mustard" />
              <p className="mx-auto mt-7 max-w-[560px] text-[15px] font-bold leading-body text-text md:text-[22px]">
                業界団体・公益法人の啓発広報を、
                <br />
                伝わる形に変える専門チーム
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/contact/">ご相談はこちら →</Button>
                <Button href="/service/" variant="secondary">
                  資料請求 →
                </Button>
              </div>
            </div>
            <div className="relative mx-auto -mt-14 w-[112%] max-w-[1180px] -translate-x-[5%] md:-mt-36 md:w-full md:translate-x-0">
              <Image
                src="/images/hero-main.png"
                alt=""
                width={1792}
                height={1024}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <SectionHeading title="啓発広報担当者の、こんな声をよく聞きます" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {concerns.map((concern) => (
              <article
                key={concern.title}
                className="rounded border border-border border-l-4 border-l-mustard bg-white p-7 transition-colors duration-200 hover:border-navy md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[168px_1fr] md:items-center lg:grid-cols-[184px_1fr]">
                  <div className="mx-auto flex h-36 w-36 shrink-0 items-center justify-center md:mx-0 md:h-40 md:w-40 lg:h-44 lg:w-44">
                    <Image
                      src={concern.image}
                      alt=""
                      width={288}
                      height={288}
                      loading="eager"
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-[1.6] text-navy md:text-[22px] lg:text-[24px]">
                      {concern.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-body text-text">{concern.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading
            title="私たちが提供する3つの支援"
            lead="啓発広報には、企画から制作、効果検証まで、考えるべきことがたくさんあります。私たちは、その全工程を伴走できる体制を整えています。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="overflow-hidden rounded border border-border bg-white transition-colors duration-200 hover:border-navy"
              >
                <div className="flex min-h-[132px] items-center justify-between gap-5 bg-navy px-6 py-6 text-white">
                  <div>
                    <p className="font-en text-base font-bold text-mustard">
                      {service.number}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-bold md:text-[28px]">
                      {service.name}
                    </h3>
                  </div>
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center md:h-28 md:w-28">
                    <Image
                      src={service.icon}
                      alt=""
                      width={240}
                      height={240}
                      loading="eager"
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="p-7">
                  <p className="font-serif text-lg font-bold leading-[1.6] text-navy">
                    {service.catch}
                  </p>
                  <p className="mt-4 text-[15px] leading-body text-text">{service.body}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-body text-text">
                    {service.items.map((item) => (
                      <li key={item} className="border-t border-border pt-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/service/" variant="secondary">
              3つの支援を詳しく見る →
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <SectionHeading
            title="事例"
            lead={
              <>
                業界団体の啓発広報という共通課題に対し、
                <br className="hidden md:block" />
                複数の表現手法と効果測定を組み合わせた継続的な伴走支援を提供しています。
              </>
            }
          />
          <article className="mt-12 grid gap-8 rounded border border-border bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <Image
              src="/images/case/kaden-seihin-kyokai-case-thumbnail.jpg"
              alt=""
              width={1200}
              height={630}
              sizes="(min-width: 768px) 52vw, 100vw"
              className="aspect-video w-full rounded object-cover"
            />
            <div>
              <p className="text-sm font-bold text-mustard">一般財団法人 家電製品協会様</p>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-[1.5] text-navy">
                若年層向けの
                <br className="hidden md:block" />
                家電リサイクル啓発
              </h3>
              <div className="mt-6 inline-flex rounded bg-mustard px-5 py-3 font-bold text-white">
                視聴完了率3倍
              </div>
              <p className="mt-2 text-sm text-[#666666]">一般的な動画広告比</p>
              <blockquote className="mt-6 rounded bg-cream p-5 text-[15px] italic leading-body text-text">
                「数字だけでなく、若い世代に『自分ごと』として届いている実感がありました。」
              </blockquote>
              <div className="mt-7">
                <Button
                  href="/case/kaden-seihin-kyokai/"
                  variant="secondary"
                  className="min-h-14 px-9 py-4 text-lg"
                >
                  事例の詳細を読む →
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="啓発広報に、パラパラ漫画が効く4つの理由" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded border border-border bg-white p-7 transition-colors duration-200 hover:border-navy"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-mustard-50 font-en text-sm font-bold text-mustard">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-visible">
                    <Image
                      src={reason.image}
                      alt=""
                      width={72}
                      height={72}
                      unoptimized
                      className={`${reason.imageClassName ?? 'h-[72px] w-[72px]'} max-w-none object-contain`}
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-[1.6] text-navy">
                  {reason.title}
                </h3>
                <p className="mt-4 text-[15px] leading-body text-text">{reason.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="https://parapara-manga.com/" variant="secondary">
              パラパラ漫画の詳細・制作実績を見る →
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <SectionHeading
            title="どこからでも、ご相談いただけます"
            lead="状況に応じて、ご相談いただける形を3パターンご用意しています。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {consultationPatterns.map((pattern) => (
              <article key={pattern.name} className="rounded border border-border bg-white p-8">
                <h3 className="font-serif text-2xl font-bold text-navy">{pattern.name}</h3>
                <p className="mt-5 text-sm font-bold text-mustard">こんな方に</p>
                <p className="mt-2 text-[15px] leading-body text-text">{pattern.target}</p>
                <p className="mt-5 text-sm font-bold text-navy">内容</p>
                <p className="mt-2 text-[15px] leading-body text-text">{pattern.body}</p>
                <p className="mt-5 border-t border-border pt-4 text-sm text-[#666666]">
                  期間目安：<span className="font-bold text-navy">{pattern.period}</span>
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact/">まずはご相談ください →</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading
            title="啓発広報ナレッジ"
            lead="啓発広報の課題・手法・事例について、定期的に発信しています。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                href={article.href}
                label={article.label}
                title={article.title}
                description={article.description}
                date={article.date}
                thumbnailUrl={article.thumbnailUrl}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/knowledge/" variant="secondary">
              すべての記事を見る →
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.45fr] lg:items-stretch">
            <div className="relative overflow-hidden pb-2 lg:pr-4">
              <SectionHeading title="啓発広報ラボについて" align="left" />
              <div className="mt-8">
                <Image
                  src="/images/about-flow-visual-transparent.png"
                  alt="想い、伝わる、共感、行動、文化の流れ"
                  width={1024}
                  height={1536}
                  unoptimized
                  className="mx-auto h-auto w-full max-w-[430px] lg:max-w-none"
                />
              </div>
            </div>
            <div className="rounded bg-white p-7 shadow-sm md:p-10 lg:p-12">
              <div className="space-y-6 text-[15px] font-bold leading-body text-text md:text-[17px]">
                <p>
                  啓発広報ラボは、業界団体・公益法人・一般社団法人の啓発広報を支援する専門メディアです。株式会社アトムストーリーが運営しています。
                </p>
                <p>
                  アトムストーリーは2013年創業、ストーリーマーケティングを軸に企業ブランディングを支援するマーケティング会社です。500社以上のパラパラ漫画ムービー制作実績を持ちます。
                </p>
                <p>
                  「啓発活動の伝わってる実感がない」を解くため、業界団体・公益法人の広報担当者の方々に伴走し、企画から制作・運用・効果検証まで一貫してサポートします。
                </p>
              </div>
              <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
                {aboutStats.map((stat, index) => (
                  <div
                    key={String(stat.title)}
                    className={index === 0 ? 'text-center' : 'text-center md:border-l md:border-border'}
                  >
                    <Image
                      src={stat.image}
                      alt=""
                      width={220}
                      height={220}
                      unoptimized
                      className="mx-auto h-20 w-20 object-contain md:h-[92px] md:w-[92px]"
                    />
                    <p className="mt-4 font-serif text-[21px] font-bold leading-[1.45] text-navy md:text-[23px]">
                      {stat.title}
                    </p>
                    <p className="mt-3 text-sm font-bold leading-body text-text md:text-[15px]">
                      {stat.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Button
                  href="/about/"
                  variant="secondary"
                  className="min-h-14 w-full px-8 py-4 text-lg"
                >
                  会社概要を見る →
                </Button>
                <Button
                  href="/message/"
                  className="min-h-14 w-full px-8 py-4 text-lg"
                >
                  代表メッセージを読む →
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
              お問い合わせ
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-mustard" />
            <p className="mt-7 text-[15px] leading-body text-white/85 md:text-base">
              啓発広報に関するご相談・取材依頼を、お気軽にお問い合わせください。
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
