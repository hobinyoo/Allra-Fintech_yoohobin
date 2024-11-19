import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/actions/get-products'
import { useProductsSearchParams } from '@/app/products/(list)/hooks/use-products-search-params'
import useDebounce from './use-debounce'

export const useProducts = () => {
  const { page, term } = useProductsSearchParams()
  const debouncedTerm = useDebounce<string>(term)
  const props = {
    limit: 24,
    skip: 24 * (page - 1),
    q: debouncedTerm ?? '',
  }
  return useQuery({
    queryKey: ['products', { ...props }],
    queryFn: async () => {
      const res = await getProducts(props)
      if (res.status === 'error') {
        throw new Error(res.error)
      }
      return {
        ...res.data,
        totalPage: Math.floor(res.data.total / 24) + 1,
      }
    },
  })
}
