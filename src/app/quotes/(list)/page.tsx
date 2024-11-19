'use client'

import { useInfiniteQuotes } from '@/app/quotes/hooks/use-infinite-quotes'
import { QuoteCard } from '@/app/quotes/components/quote-card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useFavoriteQuotes } from '../hooks/use-favorite-quotes'
import { isFavorite } from '@/lib/utils'

export default function QuotesPage() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuotes({
    term: 1,
    limit: 30,
  })

  const { favorites, toggleFavorite } = useFavoriteQuotes()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    throw new Error(error.message)
  }

  if (!data) {
    return <div>No quotes found</div>
  }

  const quotes = data.pages.flatMap((page) => page.quotes)

  return (
    <InfiniteScroll
      dataLength={quotes.length}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={
        <div className="flex justify-center p-4">
          {isFetchingNextPage ? 'Loading more...' : null}
        </div>
      }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      {quotes.map((quote) => {
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
    </InfiniteScroll>
  )
}
