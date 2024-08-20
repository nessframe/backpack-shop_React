import { useMemo } from "react"

export const useFilteredPrices = (products, price) => {
    const filteredPrices = useMemo(() => {
        if (price === '500_1000') return [...products].filter((p) => p.cost > 500 && p.cost < 1000)
        if (price === '1000_2000') return [...products].filter((p) => p.cost > 1000 && p.cost < 2000)
    
        return products
      }, [price])

      return filteredPrices;
} 
export const useSortedProducts = (products, price, sort) => {
    const filteredPrices = useFilteredPrices(products, price)

    const sortedProducts = useMemo(() => {
        if (sort === 'alphabet') return [...filteredPrices].sort((p1, p2) => p1.title.localeCompare(p2.title))
        if (sort === 'expensive') return [...filteredPrices].sort((p1, p2) => p2.cost - p1.cost)
        if (sort === 'cheapest') return [...filteredPrices].sort((p1, p2) => p1.cost - p2.cost)
    
        return filteredPrices
      }, [sort, filteredPrices])

      return sortedProducts;
}
export const useFilter = (products, price, sort, query) => {
    const sortedProducts = useSortedProducts(products, price, sort)

    const search = useMemo(() => {
        if (query) {
          let products = sortedProducts;
          return products.filter((p) => p.title.toLocaleLowerCase().includes(query.toLowerCase()));
        }
        return sortedProducts;
      }, [sortedProducts, query]);

      return search;
}