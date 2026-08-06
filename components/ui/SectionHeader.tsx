import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignCls} ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="text-[0.95rem] leading-relaxed text-muted max-w-xl">{description}</p>
      ) : null}
    </div>
  )
}
