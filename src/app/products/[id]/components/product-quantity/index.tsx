import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ProductQuantityProps {
  quantity: number
  stock: number
  onIncrement: () => void
  onDecrement: () => void
}

export function ProductQuantity({
  quantity,
  stock,
  onIncrement,
  onDecrement,
  className,
  ...props
}: ProductQuantityProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center gap-4', className)} {...props}>
      <button
        className="rounded-full bg-gray-200 px-3 py-2 text-xl"
        onClick={onDecrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        className="rounded-full bg-gray-200 px-2 py-1 text-xl"
        onClick={onIncrement}
        disabled={quantity >= stock}
      >
        +
      </button>
    </div>
  )
}
