import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

const navItems = [
  { href: '/service/', label: 'サービス' },
  { href: '/case/kaden-seihin-kyokai/', label: '事例' },
  { href: '/knowledge/', label: 'ナレッジ' },
  { href: '/about/', label: '会社情報' },
  { href: '/contact/', label: 'お問い合わせ' },
]

export function Header() {
  return (
    <header className="bg-navy text-white">
      <Container className="flex min-h-[70px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-xl font-bold tracking-[0.08em] hover:text-white"
          aria-label="啓発広報ラボ トップページ"
        >
          <Image
            src="/images/logo-mark-header.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            aria-hidden="true"
          />
          <span>啓発広報ラボ</span>
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
