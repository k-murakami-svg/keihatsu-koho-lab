import Image from 'next/image'
import Link from 'next/link'

type ArticleCardProps = {
  href: string
  label: string
  title: string
  description: string
  date: string
  thumbnailUrl?: string
}

export function ArticleCard({
  href,
  label,
  title,
  description,
  date,
  thumbnailUrl,
}: ArticleCardProps) {
  return (
    <article className="rounded border border-border bg-white transition-colors duration-200 hover:border-navy">
      <Link href={href} className="block hover:no-underline">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt=""
            width={1200}
            height={675}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[16/9] w-full rounded-t object-cover"
          />
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center rounded-t bg-cream text-sm text-navy">
            サムネイル準備中
          </div>
        )}
        <div className="p-6">
          <p className="text-xs font-bold text-mustard">{label}</p>
          <h2 className="mt-3 text-lg font-bold leading-[1.6] text-navy">{title}</h2>
          <p className="mt-3 line-clamp-3 text-[15px] leading-body text-text">{description}</p>
          <p className="mt-4 text-sm text-[#666666]">{date}</p>
        </div>
      </Link>
    </article>
  )
}
