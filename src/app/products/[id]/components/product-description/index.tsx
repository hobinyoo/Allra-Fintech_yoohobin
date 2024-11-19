import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ProductDescriptionProps {
  description: string
  tags: string[]
}

export function ProductDescription({
  description,
  tags,
  className,
  ...props
}: ProductDescriptionProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-8', className)} {...props}>
      <h2 className="mb-2 text-xl font-bold">Description</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-1">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  )
}
