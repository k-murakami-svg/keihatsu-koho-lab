import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: '「伝わった実感」を届けるために | 代表メッセージ - 啓発広報ラボ',
  description:
    '啓発広報ラボ運営の株式会社アトムストーリー代表 村上賢太より。500社以上のパラパラ漫画制作実績から見えた、業界団体・公益法人の啓発広報の構造的課題と、私たちが向き合う理由をお伝えします。',
}

const paragraphs = [
  '啓発広報ラボを訪れていただき、ありがとうございます。株式会社アトムストーリー代表の村上賢太です。',
  '私たちは2013年に創業して以来、企業や団体が「伝えたい想い」を、ちゃんと届けるための表現を追求してきました。',
  '最初は、結婚式のサプライズムービー制作から始まりました。2人の物語を、パラパラ漫画で表現する取り組みです。「言葉だけでは伝わらない想いも、絵と物語の力で届く」というシンプルな確信が、私たちの原点です。',
  'その後、企業ブランディングの世界に活動を広げました。「ストーリーマーケティング」という独自の手法を体系化し、書籍として出版、講演活動も行ってきました。500社以上の企業の「伝えたい想い」を、パラパラ漫画ムービーで形にしてきました。',
  'その活動の中で、ある領域に強い課題を感じるようになりました。業界団体・公益法人の「啓発広報」です。',
  '法律・自主規制・業界の使命に基づいた啓発活動は、社会にとって重要なものばかりです。しかし、担当者の方々から「やっているのに、伝わってる実感がない」という声を、繰り返し伺うようになりました。',
  '成果が見えにくく、社内に説明できる言葉がなく、予算確保にも苦労する。広報担当者の方々が、孤独に頑張っている。',
  '私たちは、その課題に向き合うチームでありたいと思いました。',
  '啓発広報ラボは、業界団体・公益法人の広報担当者の方々の「伝わった実感」を取り戻すためのチームです。',
  '企画から制作、運用、効果検証まで、伴走します。「作って終わり」ではなく、「届くまで」を一緒に考えます。',
  '私たちが何より大切にしているのは、「想いが育つ文化」を社会に残すことです。',
  '啓発広報は、想いを社会に届ける営みそのものです。その営みが、ちゃんと届く形になるよう、私たちは伴走し続けます。',
]

export default function MessagePage() {
  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Message
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              「伝わった実感」を届けるために
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mt-7 text-[15px] font-bold leading-body text-text md:text-lg">
              代表メッセージ
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="space-y-6 text-[15px] leading-[2] text-text md:text-base">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="pt-6">
                <p>ご相談、お待ちしています。</p>
                <p className="mt-6 font-bold text-navy">
                  株式会社アトムストーリー
                  <br />
                  代表取締役 村上 賢太
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button href="/contact/">啓発広報のご相談はこちら →</Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
