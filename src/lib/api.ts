import type { InterviewArticle, KnowledgeArticle } from '@/lib/microcms'
import { getMicroCMSClient } from '@/lib/microcms'

const fallbackKnowledge: KnowledgeArticle[] = [
  {
    id: 'knowledge-placeholder-1',
    title: '啓発広報で「伝わっている実感」が生まれにくい理由',
    slug: 'why-keihatsu-koho-is-hard',
    description:
      '啓発広報の成果が見えにくい背景と、企画・制作・効果検証を一体で考える重要性を整理します。',
    content:
      '<p>この記事はmicroCMS接続後に本文を差し替える想定の仮記事です。啓発広報の課題を整理し、成果定義から表現設計、効果検証までを一体で考える視点を紹介します。</p>',
    category: '啓発広報の基礎',
    author: '啓発広報ラボ編集部',
    publishedAt: '2026-06-01T00:00:00.000Z',
    updatedAt: '2026-06-01T00:00:00.000Z',
  },
  {
    id: 'knowledge-placeholder-2',
    title: '業界団体が若年層に届けるための表現設計',
    slug: 'reach-young-audience',
    description:
      '若年層に啓発テーマを届けるために、情報の押し付けではなく自分ごと化を促す表現設計を考えます。',
    content:
      '<p>この記事はmicroCMS接続後に本文を差し替える想定の仮記事です。若年層に届けるためのストーリー設計、媒体選定、キャンペーン運用の考え方を紹介します。</p>',
    category: '業界団体向け',
    author: '啓発広報ラボ編集部',
    publishedAt: '2026-06-01T00:00:00.000Z',
    updatedAt: '2026-06-01T00:00:00.000Z',
  },
]

const fallbackInterviews: InterviewArticle[] = [
  {
    id: 'interview-placeholder-1',
    title: '届けたかった世代に、ちゃんと届いた',
    slug: 'kaden-seihin-kyokai',
    description:
      '家電製品協会 三善徹様にお聞きした、若年層向け啓発広報のリアル。',
    content:
      '<p>この記事はmicroCMS接続後に本文を差し替える想定の仮記事です。家電リサイクル啓発の背景、パラパラ漫画動画の活用、SNSキャンペーンの手応えについて紹介します。</p>',
    interviewee: '一般財団法人 家電製品協会',
    intervieweeRole: '三善 徹 様',
    publishedAt: '2026-06-01T00:00:00.000Z',
    updatedAt: '2026-06-01T00:00:00.000Z',
  },
]

export async function getKnowledgeList(limit = 10) {
  const client = getMicroCMSClient()
  if (!client) return fallbackKnowledge.slice(0, limit)

  try {
    const data = await client.getList<KnowledgeArticle>({
      endpoint: 'knowledge',
      queries: { limit, orders: '-publishedAt' },
    })
    return data.contents
  } catch {
    return fallbackKnowledge.slice(0, limit)
  }
}

export async function getKnowledgeBySlug(slug: string) {
  const client = getMicroCMSClient()
  if (!client) return fallbackKnowledge.find((article) => article.slug === slug) ?? null

  try {
    const data = await client.getList<KnowledgeArticle>({
      endpoint: 'knowledge',
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    })
    return data.contents[0] ?? null
  } catch {
    return fallbackKnowledge.find((article) => article.slug === slug) ?? null
  }
}

export async function getInterviewList(limit = 10) {
  const client = getMicroCMSClient()
  if (!client) return fallbackInterviews.slice(0, limit)

  try {
    const data = await client.getList<InterviewArticle>({
      endpoint: 'interview',
      queries: { limit, orders: '-publishedAt' },
    })
    return data.contents
  } catch {
    return fallbackInterviews.slice(0, limit)
  }
}

export async function getInterviewBySlug(slug: string) {
  const client = getMicroCMSClient()
  if (!client) return fallbackInterviews.find((article) => article.slug === slug) ?? null

  try {
    const data = await client.getList<InterviewArticle>({
      endpoint: 'interview',
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    })
    return data.contents[0] ?? null
  } catch {
    return fallbackInterviews.find((article) => article.slug === slug) ?? null
  }
}

export function getCategoryName(category: KnowledgeArticle['category']) {
  if (!category) return 'ナレッジ'
  return typeof category === 'string' ? category : category.name
}
