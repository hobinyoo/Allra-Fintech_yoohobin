import { getQuotes } from '@/actions/get-quotes'
import { useInfiniteQuery } from '@tanstack/react-query'

interface QuoteQueryProps {
  term?: number
  limit?: number
}

export const useInfiniteQuotes = (queryProps: QuoteQueryProps) => {
  const limit = queryProps.limit || 30
  const term = queryProps.term || 1

  return useInfiniteQuery({
    queryKey: ['infinite-quotes', { limit, term }],
    queryFn: async ({ pageParam = 0 }) => {
      const props = {
        limit: limit * term,
        skip: pageParam * (limit * term),
      }

      const res = await getQuotes(props)
      if (res.status === 'error') {
        throw new Error(res.error)
      }

      const totalPages = Math.floor(res.data.total / (limit * term)) + 1
      const currentPage = pageParam

      return {
        ...res.data,
        nextCursor: currentPage + 1 < totalPages ? currentPage + 1 : undefined,
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })
}
