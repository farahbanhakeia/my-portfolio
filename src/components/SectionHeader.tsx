interface Props {
  label: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ label, title, description, center }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <p className="font-mono text-xs text-accent tracking-[0.2em] mb-3">{label}</p>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className={`text-text-secondary text-sm mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
