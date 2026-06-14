import type { Metadata } from 'next'
import { ArticleCard } from '@/components/ArticleCard'
import { Container } from '@/components/Container'
import { getInterviewList } from '@/lib/api'
import { formatDate } from '@/lib/date'

export const metadata: Metadata = {
  title: 'インタビュー | 啓発広報ラボ',
  description:
    '業界団体・公益法人などで啓発広報に取り組む方々へのインタビュー記事を掲載しています。',
}

export default async function InterviewPage() {
  const interviews = await getInterviewList(12)

  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Interview
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              インタビュー
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              啓発広報の現場で何が起きているのか、担当者の声から考えます。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {interviews.map((article) => (
              <ArticleCard
                key={article.id}
                href={`/interview/${article.slug}/`}
                label={article.interviewee}
                title={article.title}
                description={article.description}
                date={formatDate(article.publishedAt)}
                thumbnailUrl={article.thumbnail?.url}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
