export const siteUrl = 'https://keihatsu-koho-lab.jp'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社アトムストーリー',
  alternateName: '啓発広報ラボ',
  url: `${siteUrl}/`,
  logo: `${siteUrl}/favicon.svg`,
  description:
    '業界団体・公益法人・一般社団法人の啓発広報を支援する専門チーム。「啓発広報ラボ」を運営。',
  foundingDate: '2013-06',
  founder: {
    '@type': 'Person',
    name: '村上 賢太',
    jobTitle: '代表取締役',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '南青山3丁目1番36号 青山丸竹ビル6F',
    addressLocality: '港区',
    addressRegion: '東京都',
    postalCode: '107-0062',
    addressCountry: 'JP',
  },
  telephone: '+81-3-6822-2676',
  sameAs: ['https://atom-story.com/', 'https://parapara-manga.com/'],
  knowsAbout: [
    '啓発広報',
    '業界団体の広報支援',
    '公益法人の広報支援',
    'パラパラ漫画',
    'ストーリーマーケティング',
    'SNS運用',
    '啓発動画制作',
  ],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '啓発広報ラボ',
  alternateName: '啓発広報ラボ - 業界団体・公益法人の啓発広報の専門メディア',
  url: `${siteUrl}/`,
  description:
    '業界団体・公益法人・一般社団法人の啓発広報を支援する専門メディア。「啓発広報の手応えがない」という課題を、企画から制作・運用・効果検証まで一貫して伴走支援します。',
  publisher: {
    '@type': 'Organization',
    name: '株式会社アトムストーリー',
    url: 'https://atom-story.com/',
  },
  inLanguage: 'ja-JP',
  audience: {
    '@type': 'Audience',
    audienceType: '業界団体・公益法人・一般社団法人の広報担当者',
  },
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
