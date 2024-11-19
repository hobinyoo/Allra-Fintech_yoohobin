import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ProductPriceProps {
  price: number
  discountPercentage: number
}

export function ProductPrice({
  price,
  discountPercentage,
  className,
  ...props
}: ProductPriceProps & HTMLAttributes<HTMLDivElement>) {
  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2)

  return (
    <div className={cn('mb-6', className)} {...props}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-lg text-gray-500 line-through">
          ${originalPrice}
        </span>
        <span className="rounded-full bg-green-50 px-2 py-1 text-sm text-green-600">
          {discountPercentage}% OFF
        </span>
      </div>
    </div>
  )
}
