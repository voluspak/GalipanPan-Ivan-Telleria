import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/products'
import type { Product, ProductCategory } from '../types'

interface UseProductsReturn {
  prods: Product[]
  loader: boolean | null
}

/**
 * Hook para obtener y filtrar productos por categoría
 */
export default function useProducts(): UseProductsReturn {
  const [prods, setProds] = useState<Product[]>([])
  const [loader, setLoader] = useState<boolean | null>(null)
  const { category } = useParams<{ category?: ProductCategory }>()

  useMemo(() => {
    async function filterCategories() {
      try {
        setLoader(true)
        const products = await getProducts()

        if (category) {
          const filteredProd = products.filter((prod) => prod.category === category)
          setProds(filteredProd)
        } else {
          setProds(products)
        }
      } catch (error) {
        console.error('Error al filtrar productos:', error)
        throw new Error('No se pudo filtrar la lista')
      } finally {
        setLoader(false)
      }
    }

    filterCategories()
  }, [category])

  return { prods, loader }
}
