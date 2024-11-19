import dayjs from 'dayjs'
import { RatingStars } from '@/components/rating-stars'
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface Review {
  rating: number
  reviewerName: string
  comment: string
  date: string
}

interface ProductReviewsProps {
  reviews: Review[]
}

export function ProductReviews({
  reviews,
  className,
  ...props
}: ProductReviewsProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-12', className)} {...props}>
      <h2 className="mb-4 text-xl font-bold">Customer Reviews</h2>
      <div className="grid gap-4">
        {reviews.map((review, index) => {
          const formattedDate = dayjs(review.date).format('YYYY-MM-DD HH:mm')
          return (
            <div key={index} className="border-b pb-4">
              <div className="mb-2 flex items-center gap-2">
                <RatingStars rating={review.rating} />
                <span className="font-medium">{review.reviewerName}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-600">{formattedDate}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
