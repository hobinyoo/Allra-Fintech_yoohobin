import { QuoteListItem } from '@/schemas/quotes'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isFavorite(
  favorites: QuoteListItem[],
  quoteId: number
): boolean {
  return favorites.some((fav) => fav.id === quoteId)
}
