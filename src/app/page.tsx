import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const concerns = [
  {
    title: '「やっているのに、伝わってる手応えがない」',
    body: '何度も啓発キャンペーンをしてきたが、本当に届いているのか、変化があるのか、よくわからない。',
  },
  {
    title: '「成果をどう測ればいいか分からない」',
    body: '広報の効果が見えにくい。社内に説明する材料がなく、次の予算確保にも苦労している。',
  },
  {
    title: '「社内に説明できる言葉がない」',
    body: '広報活動の意義は感じているが、定量的に語れない。理事会・委員会で「やっていることの価値」を伝えきれない。',
  },
  {
    title: '「届けたい層に、届かない」',
    body: '特に若年層への啓発が機能していない。SNS活用も検討したいが、何から始めればいいか分からない。',
  },
]

const services = [
  {
    number: '01',
    name: '伴走支援',
    catch: '啓発広報の、根っこから整理する。',
    body: '成果定義・KPI設計・効果検証の段階から、一緒に考えます。「何を伝えるか」「誰に届けるか」を、対話を通じて言語化することから始めます。',
    items: ['現状ヒアリング・課題整理', '成果定義・KPI設計', '効果検証の設計', '年間広報計画の策定'],
  },
  {
    number: '02',
    name: '企画・設計',
    catch: '届くための戦略を、組み立てる。',
    body: 'ターゲット分析・アンケート調査・表現戦略・コンテンツ設計を行います。「届かない理由」を構造的に分解し、戦略を組み立てます。',
    items: ['ターゲット分析・ペルソナ設計', 'アンケート調査・インタビュー', '表現戦略・コンテンツ設計', 'キャンペーン全体設計'],
  },
  {
    number: '03',
    name: '制作・運用',
    catch: '伝わるかたちで、つくり、届ける。',
    body: '啓発動画・印刷物・キャラクター制作・SNS広告運用・効果測定レポートまで、一貫してご提供します。',
    items: ['啓発動画制作', '印刷物制作', 'キャラクター制作・ブランディング', 'SNS広告運用・効果測定'],
  },
]

const reasons = [
  {
    title: '余白で読み手を引き込む',
    body: '情報を一方的に押し付けず、視聴者自身が想像し、気持ちを乗せながら読み進められます。',
  },
  {
    title: '重い話を、柔らかく',
    body: '法律・制度・義務に紐づく啓発テーマの堅さを和らげ、「自分にも関係ある話」として受け取ってもらえます。',
  },
  {
    title: '最後まで見たくなる',
    body: 'ストーリー構造を持たせることで、視聴完了率が上がります。家電製品協会様の事例では、一般的な動画広告の3倍を実現しました。',
  },
  {
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

const knowledgeCards = [
  {
    label: 'ナレッジ',
    title: '啓発広報で「伝わっている実感」が生まれにくい理由',
    date: '準備中',
  },
  {
    label: 'ナレッジ',
    title: '業界団体が若年層に届けるための表現設計',
    date: '準備中',
  },
  {
    label: 'インタビュー',
    title: '家電製品協会様に聞く、啓発広報の伴走支援',
    date: '準備中',
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-white py-[72px] md:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div className="text-center md:text-left">
              <h1 className="font-serif text-[32px] font-bold leading-[1.4] text-navy md:text-[52px]">
                啓発に、
                <br />
                ちゃんと手応えを。
              </h1>
              <div className="mx-auto mt-7 h-1 w-24 bg-mustard md:mx-0" />
              <p className="mt-7 text-[15px] leading-body text-text md:text-lg">
                業界団体・公益法人の啓発広報を、
                <br className="hidden md:block" />
                伝わる形に変える専門チーム
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Button href="/contact/">ご相談はこちら →</Button>
                <Button href="/service/" variant="secondary">
                  資料請求 →
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm rounded border border-border bg-cream p-8">
              <div className="aspect-[4/3] rounded border border-dashed border-navy/30 bg-white p-6">
                <div className="flex h-full flex-col items-center justify-center rounded border border-mustard/60">
                  <div className="h-20 w-20 rounded-full border-2 border-navy/50" />
                  <div className="mt-7 h-2 w-36 bg-mustard/70" />
                  <div className="mt-4 h-2 w-28 bg-navy/20" />
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[#666666]">
                手描き風イラストは仮配置です
              </p>
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
                className="rounded border border-border border-l-4 border-l-mustard bg-white p-8 transition-colors duration-200 hover:border-navy"
              >
                <h3 className="text-lg font-bold leading-[1.6] text-navy">
                  {concern.title}
                </h3>
                <p className="mt-4 text-[15px] leading-body text-text">{concern.body}</p>
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
                className="rounded border border-border bg-white transition-colors duration-200 hover:border-navy"
              >
                <div className="bg-navy px-6 py-5 text-white">
                  <p className="font-en text-sm font-bold text-mustard">{service.number}</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold">{service.name}</h3>
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
            lead="業界団体の啓発広報という共通課題に対し、複数の表現手法と効果測定を組み合わせた継続的な伴走支援を提供しています。"
          />
          <article className="mt-12 grid gap-8 rounded border border-border bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="flex aspect-video items-center justify-center rounded border border-dashed border-navy/30 bg-navy-50 text-center text-sm leading-body text-navy">
              家電製品協会様の
              <br />
              パラパラ漫画動画を配置予定
            </div>
            <div>
              <p className="text-sm font-bold text-mustard">一般財団法人 家電製品協会様</p>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-[1.5] text-navy">
                若年層向けの家電リサイクル啓発
              </h3>
              <div className="mt-6 inline-flex rounded bg-mustard px-5 py-3 font-bold text-white">
                視聴完了率3倍
              </div>
              <p className="mt-2 text-sm text-[#666666]">一般的な動画広告比</p>
              <blockquote className="mt-6 rounded bg-cream p-5 text-[15px] italic leading-body text-text">
                「数字だけでなく、若い世代に『自分ごと』として届いている実感がありました。」
              </blockquote>
              <div className="mt-7">
                <Button href="/case/kaden-seihin-kyokai/" variant="secondary">
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
                <div className="flex h-12 w-12 items-center justify-center rounded bg-mustard-50 font-en text-sm font-bold text-mustard">
                  {String(index + 1).padStart(2, '0')}
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
            {knowledgeCards.map((card) => (
              <article
                key={card.title}
                className="rounded border border-border bg-white transition-colors duration-200 hover:border-navy"
              >
                <div className="flex aspect-[16/9] items-center justify-center rounded-t bg-cream text-sm text-navy">
                  サムネイル準備中
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-mustard">{card.label}</p>
                  <h3 className="mt-3 text-lg font-bold leading-[1.6] text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm text-[#666666]">{card.date}</p>
                </div>
              </article>
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
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <SectionHeading title="啓発広報ラボについて" align="left" />
            <div className="rounded border border-border bg-white p-8">
              <div className="space-y-5 text-[15px] leading-body text-text md:text-base">
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/about/" variant="secondary">
                  会社概要を見る →
                </Button>
                <Button href="/message/" variant="secondary">
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
