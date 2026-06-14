import { createClient } from 'microcms-js-sdk'

export type MicroCMSImage = {
  url: string
  width: number
  height: number
}

export type KnowledgeArticle = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnail?: MicroCMSImage
  category?: string | { id: string; name: string }
  tags?: Array<string | { id: string; name: string }>
  author?: string
  publishedAt: string
  updatedAt: string
}

export type InterviewArticle = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnail?: MicroCMSImage
  interviewee: string
  intervieweeRole?: string
  intervieweePhoto?: MicroCMSImage
  interviewDate?: string
  tags?: Array<string | { id: string; name: string }>
  publishedAt: string
  updatedAt: string
}

export function hasMicroCMSConfig() {
  return Boolean(process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY)
}

export function getMicroCMSClient() {
  if (!hasMicroCMSConfig()) return null

  return createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  })
}
