import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/service',
  '/case',
  '/case/kaden-seihin-kyokai',
  '/knowledge',
  '/interview',
  '/about',
  '/message',
  '/contact',
  '/privacy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://keihatsu-koho-lab.jp${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
