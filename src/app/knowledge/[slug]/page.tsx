import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { getCategoryName, getKnowledgeBySlug } from '@/lib/api'
import { formatDate } from '@/lib/date'
import { JsonLd, siteUrl } from '@/lib/jsonLd'

type PageProps = {
  params: { slug: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getKnowledgeBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | 啓発広報ラボ`,
    description: article.description,
    openGraph: {
      type: 'article',
    },
  }
}

export default async function KnowledgeDetailPage({ params }: PageProps) {
  const article = await getKnowledgeBySlug(params.slug)
  if (!article) notFound()
  const category = getCategoryName(article.category)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.thumbnail?.url ?? `${siteUrl}/images/ogp.png`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: article.author ?? '啓発広報ラボ編集部',
      url: `${siteUrl}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: '株式会社アトムストーリー',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${siteUrl}/knowledge/${article.slug}/`,
    articleSection: category,
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="bg-cream py-[60px] md:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="text-sm font-bold text-mustard">{category}</p>
            <h1 className="mt-4 font-serif text-[30px] font-bold leading-[1.4] text-navy md:text-[44px]">
              {article.title}
            </h1>
            <div className="mt-6 h-1 w-24 bg-mustard" />
            <p className="mt-6 text-sm text-[#666666]">
              公開日：{formatDate(article.publishedAt)}
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-white py-[60px] md:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            {article.thumbnail?.url ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                width={1200}
                height={675}
                sizes="(min-width: 768px) 768px, 100vw"
                className="mb-10 aspect-[16/9] w-full rounded border border-border object-cover"
              />
            ) : (
              <div className="mb-10 flex aspect-[16/9] items-center justify-center rounded border border-border bg-cream text-sm text-navy">
                アイキャッチ画像準備中
              </div>
            )}
            <div
              className="prose prose-neutral max-w-none text-[15px] leading-body text-text prose-headings:font-serif prose-headings:text-navy prose-a:text-navy md:text-base"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <div className="mt-12 rounded border border-border bg-cream p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-navy">
                啓発広報のご相談はこちら
              </h2>
              <p className="mt-4 text-[15px] leading-body text-text">
                企画・制作・運用・効果検証まで、状況に合わせてご相談いただけます。
              </p>
              <div className="mt-7">
                <Button href="/contact/">お問い合わせフォームへ →</Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
