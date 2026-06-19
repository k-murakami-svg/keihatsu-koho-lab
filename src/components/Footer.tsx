import Link from 'next/link'
import { Container } from '@/components/Container'

const links = [
  { href: '/service/', label: 'サービス' },
  { href: '/case/', label: '事例' },
  { href: '/knowledge/', label: 'ナレッジ' },
  { href: '/about/', label: '会社情報' },
  { href: '/contact/', label: 'お問い合わせ' },
]

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-xl font-bold">啓発広報ラボ</p>
            <p className="mt-4 text-sm leading-body text-white/80">
              業界団体・公益法人の啓発広報を、
              <br />
              伝わる形に変える専門チーム。
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <p className="text-sm font-bold">主要ページ</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm leading-body text-white/80">
            <p className="font-bold text-white">運営会社</p>
            <p className="mt-4">株式会社アトムストーリー</p>
            <p>〒107-0062</p>
            <p>東京都港区南青山3丁目1番36号 青山丸竹ビル6F</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
