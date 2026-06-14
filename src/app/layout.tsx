import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/jsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://keihatsu-koho-lab.jp'),
  title: {
    default: '啓発広報ラボ | 業界団体の啓発広報を、伝わる形に変える',
    template: '%s | 啓発広報ラボ',
  },
  description:
    '「啓発広報の手応えがない」を解く専門チーム。業界団体・公益法人・一般社団法人の啓発活動を、企画から制作・運用・効果検証まで一貫して伴走支援します。',
  openGraph: {
    title: '啓発広報ラボ',
    description:
      '業界団体・公益法人の啓発広報を、伝わる形に変える専門チーム。',
    url: 'https://keihatsu-koho-lab.jp/',
    siteName: '啓発広報ラボ',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
