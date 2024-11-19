import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface ProductImagesProps {
  thumbnail: string
  images: string[]
  title: string
  dimensions: {
    depth: number
    width: number
    height: number
  }
}

export function ProductImages({
  thumbnail,
  images,
  title,
  dimensions,
  className,
  ...props
}: ProductImagesProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('col-span-1 flex flex-col', className)} {...props}>
      <figure className="relative flex-1">
        <Image
          className="w-full transition-transform hover:scale-105"
          width={0}
          height={0}
          src={thumbnail}
          alt={title}
          sizes="100%"
        />
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          Size: {dimensions.depth} x {dimensions.width} x {dimensions.height}
        </figcaption>
      </figure>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((imageUrl, index) => (
          <figure key={`product-image-${index}`} className="relative">
            <Image
              className="w-full transition-transform hover:scale-105"
              width={0}
              height={0}
              src={imageUrl}
              alt={`${title} - Image ${index + 1}`}
              sizes="100%"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
