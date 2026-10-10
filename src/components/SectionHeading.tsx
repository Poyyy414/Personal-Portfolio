type Props = { eyebrow: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
