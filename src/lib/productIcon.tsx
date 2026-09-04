import { FileText, NotebookText, Presentation, Table2 } from 'lucide-react'

/** Renders a representative icon for a product's format string, e.g. "PDF + Slides". */
export function ProductIcon({
  format,
  size,
  className,
}: {
  format: string
  size?: number
  className?: string
}) {
  const f = format.toLowerCase()
  if (f.includes('sheet')) return <Table2 size={size} className={className} />
  if (f.includes('slide')) return <Presentation size={size} className={className} />
  if (f.includes('notion')) return <NotebookText size={size} className={className} />
  return <FileText size={size} className={className} />
}
