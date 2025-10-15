import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/products'

export default function useProducts () {
  const [prods, setProds] = useState([])
  const [loader, setLoader] = useState(null)
  const { category } = useParams()

  useMemo(() => {
    async function filterCategories () {
      try {
        setLoader(true)
        const products = await getProducts()
        if (category) {
          const filteredProd = products.filter(prod => prod.category === category)

          setProds(filteredProd)
        } else {
          setProds(products)
        }
      } catch (error) {
        throw new Error('No se pudo filtrar la lista')
      } finally {
        setLoader(false)
      }
    }

    filterCategories()
  }, [category])
  return { prods, loader }
}
