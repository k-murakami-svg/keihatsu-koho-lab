import Link from 'next/link'
import { Container } from '@/components/Container'

const navItems = [
  { href: '/service/', label: 'サービス' },
  { href: '/case/', label: '事例' },
  { href: '/knowledge/', label: 'ナレッジ' },
  { href: '/about/', label: '会社情報' },
  { href: '/contact/', label: 'お問い合わせ' },
]

export function Header() {
  return (
    <header className="bg-navy text-white">
      <Container className="flex min-h-[70px] items-center justify-between gap-6">
        <Link href="/" className="font-serif text-xl font-bold tracking-normal hover:text-white">
          啓発広報ラボ
        </Link>
        <nav aria-label="グローバルナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-bold">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mustard">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/30 md:hidden"
          aria-label="メニューを開く"
          aria-expanded="false"
        >
          <span className="h-0.5 w-5 bg-white shadow-[0_6px_0_#fff,0_-6px_0_#fff]" />
        </button>
      </Container>
    </header>
  )
}
