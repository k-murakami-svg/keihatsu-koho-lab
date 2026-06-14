import type { Metadata } from 'next'
import { ArticleCard } from '@/components/ArticleCard'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { getInterviewList, getKnowledgeList, getCategoryName } from '@/lib/api'
import { formatDate } from '@/lib/date'

export const metadata: Metadata = {
  title: '啓発広報ナレッジ | 業界団体・公益法人の広報担当者向け - 啓発広報ラボ',
  description:
    '啓発広報の課題・手法・事例を発信する専門メディア。業界団体・公益法人・一般社団法人の広報担当者の方々と、啓発広報の「伝わる」を一緒に考えます。',
}

export default async function KnowledgePage() {
  const [knowledge, interviews] = await Promise.all([
    getKnowledgeList(9),
    getInterviewList(3),
  ])

  return (
    <>
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-en text-sm font-bold uppercase tracking-[0.08em] text-mustard">
              Knowledge
            </p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              啓発広報ナレッジ
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-mustard" />
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-body text-text md:text-base">
              啓発広報の課題・手法・事例について、定期的に発信しています。業界団体・公益法人の広報担当者の方々の参考になれば幸いです。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <SectionHeading title="ナレッジ" align="left" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {knowledge.map((article) => (
              <ArticleCard
                key={article.id}
                href={`/knowledge/${article.slug}/`}
                label={getCategoryName(article.category)}
                title={article.title}
                description={article.description}
                date={formatDate(article.publishedAt)}
                thumbnailUrl={article.thumbnail?.url}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <SectionHeading title="インタビュー" align="left" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {interviews.map((article) => (
              <ArticleCard
                key={article.id}
                href={`/interview/${article.slug}/`}
                label="インタビュー"
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
