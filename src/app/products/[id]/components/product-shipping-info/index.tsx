import { cn } from '@/lib/utils'
import { Truck, Undo2, FileText } from 'lucide-react'
import { HTMLAttributes } from 'react'

interface ProductShippingInfoProps {
  shippingInformation: string
  returnPolicy: string
  warrantyInformation: string
}

const commonFlexClass = 'flex items-center gap-2'

export function ProductShippingInfo({
  shippingInformation,
  returnPolicy,
  warrantyInformation,
  className,
  ...props
}: ProductShippingInfoProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-6 space-y-3', className)} {...props}>
      <div className={commonFlexClass}>
        <Truck />
        <span>{shippingInformation}</span>
      </div>
      <div className={commonFlexClass}>
        <Undo2 />
        <span>{returnPolicy}</span>
      </div>
      <div className={commonFlexClass}>
        <FileText />
        <span>{warrantyInformation}</span>
      </div>
    </div>
  )
}
