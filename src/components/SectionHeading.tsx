type SectionHeadingProps = {
  title: string
  lead?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  lead,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className="font-serif text-2xl font-bold leading-[1.4] text-navy md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-24 bg-mustard ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {lead ? (
        <p className="mt-7 text-[15px] leading-body text-text md:text-base">{lead}</p>
      ) : null}
    </div>
  )
}
