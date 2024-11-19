'use client'

import { use, useCallback, useState } from 'react'
import { useProduct } from '@/app/products/[id]/hooks/use-product'
import { ProductAddToCart } from './components/product-cart'
import { ProductDescription } from './components/product-description'
import { ProductHeader } from './components/product-header'
import { ProductImages } from './components/product-images'
import { ProductPrice } from './components/product-price'
import { ProductQuantity } from './components/product-quantity'
import { ProductReviews } from './components/product-reviews'
import { ProductShippingInfo } from './components/product-shipping-info'
import { ProductStock } from './components/product-stock'

export interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params)
  const { data: product, isLoading, error } = useProduct(id)
  const [quantity, setQuantity] = useState<number>(1)

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) throw new Error(error.message)
  if (!product) return <div>No product found</div>

  const isLowStock = product.availabilityStatus === 'Low Stock'

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <ProductHeader
        title={product.title}
        brand={product.brand}
        category={product.category}
        sku={product.sku}
        rating={product.rating}
        reviewCount={product.reviews.length}
        isMobile={true}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProductImages
          thumbnail={product.thumbnail}
          images={product.images}
          title={product.title}
          dimensions={product.dimensions}
        />

        <div className="col-span-1 lg:col-span-2">
          <ProductHeader
            title={product.title}
            brand={product.brand}
            category={product.category}
            sku={product.sku}
            rating={product.rating}
            reviewCount={product.reviews.length}
          />

          <ProductPrice
            price={product.price}
            discountPercentage={product.discountPercentage}
          />

          <ProductStock
            stock={product.stock}
            availabilityStatus={product.availabilityStatus}
          />

          <ProductShippingInfo
            shippingInformation={product.shippingInformation}
            returnPolicy={product.returnPolicy}
            warrantyInformation={product.warrantyInformation}
          />

          <ProductAddToCart
            isLowStock={isLowStock}
            minimumOrderQuantity={product.minimumOrderQuantity}
          >
            {!isLowStock && (
              <ProductQuantity
                quantity={quantity}
                stock={product.stock}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            )}
          </ProductAddToCart>

          <ProductDescription
            description={product.description}
            tags={product.tags}
          />
        </div>
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  )
}
