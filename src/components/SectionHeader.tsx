interface SectionHeaderProps {
  number: string
  title: string
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12 md:mb-16">
      <span className="font-mono text-sm text-accent tracking-wider">
        {number}
      </span>
      <div className="h-px flex-1 bg-border" />
      <h2 className="font-serif text-base tracking-[0.15em] text-text-secondary uppercase">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
