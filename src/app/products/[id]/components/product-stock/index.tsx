import { cn } from '@/lib/utils'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface ProductStockProps {
  stock: number
  availabilityStatus: string
}

export function ProductStock({
  stock,
  availabilityStatus,
  className,
  ...props
}: ProductStockProps & HTMLAttributes<HTMLDivElement>) {
  const isLowStock = availabilityStatus === 'Low Stock'

  return (
    <div className={cn('mb-6', className)} {...props}>
      <div className="flex items-center gap-2">
        <div
          className={clsx(
            'h-2 w-2 rounded-full',
            isLowStock ? 'bg-red-500' : 'bg-green-500'
          )}
        />
        <span className={clsx(isLowStock ? 'text-red-600' : 'text-green-600')}>
          {isLowStock ? 'Low Stock' : 'In Stock'} ({stock} available)
        </span>
      </div>
    </div>
  )
}
