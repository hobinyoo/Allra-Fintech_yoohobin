import { RatingStars } from '@/components/rating-stars'
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ProductHeaderProps {
  title: string
  brand?: string
  category: string
  sku: string
  rating: number
  reviewCount: number
  isMobile?: boolean
}

const textBaseClass = 'text-sm text-gray-600'

export function ProductHeader({
  title,
  brand,
  category,
  sku,
  rating,
  reviewCount,
  isMobile = false,
  className,
  ...props
}: ProductHeaderProps & HTMLAttributes<HTMLDivElement>) {
  if (isMobile) {
    return (
      <div className="mb-4 md:hidden" {...props}>
        <h1 className="text-2xl font-bold"> {title} </h1>
        <div className="mt-2 flex items-center gap-2">
          <span className={textBaseClass}> Brand: {brand} </span>
          <span className={textBaseClass}> Category: {category} </span>
          <span className={textBaseClass}> SKU: {sku} </span>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('mb-4 hidden md:block', className)} {...props}>
      <h1 className="text-3xl font-bold"> {title} </h1>
      <div className="mt-2 flex items-center gap-4">
        <span className={textBaseClass}> Brand: {brand} </span>
        <span className={textBaseClass}> Category: {category} </span>
        <span className={textBaseClass}> SKU: {sku} </span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <RatingStars rating={rating} />
        <span className={textBaseClass}> ({reviewCount} reviews)</span>
      </div>
    </div>
  )
}
