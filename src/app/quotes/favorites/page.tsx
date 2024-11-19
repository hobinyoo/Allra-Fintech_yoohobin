'use client'
import { useFavoriteQuotes } from '@/app/quotes/hooks/use-favorite-quotes'
import { QuoteCard } from '@/app/quotes/components/quote-card'
import { isFavorite } from '@/lib/utils'

export default function FavoriteQuotesPage() {
  const { favorites, toggleFavorite } = useFavoriteQuotes()

  return (
    <div>
      <h1
        className={'mb-4 text-3xl font-bold italic text-secondary-foreground'}
      >
        My Favorite
      </h1>
      <ul>
        {favorites.map((quote) => {
          const isFav = isFavorite(favorites, quote.id)
          return (
            <QuoteCard
              key={quote.id}
              quote={quote.quote}
              author={quote.author}
              isFavorite={isFav}
              onFavorite={() => {
                toggleFavorite(quote)
              }}
            />
          )
        })}
      </ul>
    </div>
  )
}
