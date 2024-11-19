import { ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface ProductAddToCartProps {
  isLowStock: boolean
  minimumOrderQuantity: number
  children?: React.ReactNode
}

export function ProductAddToCart({
  isLowStock,
  minimumOrderQuantity,
  children,
  className,
  ...props
}: ProductAddToCartProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...props}>
      <div className="flex gap-x-4">
        <button
          className={clsx(
            'flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-white transition-colors md:w-auto',
            isLowStock
              ? 'bg-gray-300 hover:bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
          )}
          disabled={isLowStock}
        >
          <ShoppingCart />
          Add to Cart
        </button>
        {!isLowStock && children}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        (Minimum Order: {minimumOrderQuantity})
      </p>
    </div>
  )
}
