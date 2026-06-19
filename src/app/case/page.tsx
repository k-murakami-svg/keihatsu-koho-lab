import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: '事例 | 啓発広報ラボ',
  description:
    '啓発広報ラボが支援した、業界団体・公益法人の啓発広報の取り組み事例をご紹介します。',
}

export default function CasePage() {
  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Case
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              事例
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              業界団体の啓発広報という共通課題に対し、
              <br className="hidden md:block" />
              複数の表現手法と効果測定を組み合わせた継続的な伴走支援を提供しています。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="掲載中の事例" align="left" />
          <article className="mt-10 grid gap-8 rounded border border-border bg-white p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
            <div className="flex aspect-video items-center justify-center rounded border border-dashed border-navy/30 bg-cream text-center text-sm text-navy">
              動画・サムネイル準備中
            </div>
            <div>
              <p className="text-sm font-bold text-mustard">一般財団法人 家電製品協会様</p>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-[1.5] text-navy">
                視聴完了率3倍を実現した、若年層向け啓発広報の取り組み
              </h2>
              <p className="mt-5 text-[15px] leading-body text-text">
                家電リサイクル法を若年層に届けるため、パラパラ漫画動画とSNS広告を組み合わせ、視聴完了率3倍を実現しました。
              </p>
              <div className="mt-7">
                <Button href="/case/kaden-seihin-kyokai/" variant="secondary">
                  事例の詳細を読む →
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
