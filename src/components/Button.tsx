import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-mustard text-white hover:bg-mustard-700 hover:text-white'
      : 'border-2 border-navy bg-white text-navy hover:bg-navy-50 hover:text-navy'

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-7 py-3.5 text-base font-bold transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  )
}
