

import { isFavorite } from '@/lib/utils'
import { QuoteListItem } from '@/schemas/quotes'
import { useState, useEffect } from 'react'

export const useFavoriteQuotes = () => {
  const [favorites, setFavorites] = useState<QuoteListItem[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const toggleFavorite = (quote: QuoteListItem) => {
    const isFav = isFavorite(favorites, quote.id)

    let updatedFavorites = [...favorites]
    if (isFav) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== quote.id)
    } else {
      updatedFavorites.push(quote)
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return { favorites, toggleFavorite }
}
