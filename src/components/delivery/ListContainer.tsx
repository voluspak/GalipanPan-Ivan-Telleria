import React from 'react'
import ProductsList from './ProductsList'
import useProducts from '../../hooks/useProducts'
import Loader from './Loader'

/**
 * Contenedor de la lista de productos
 * Maneja el estado de carga y renderiza la lista de productos
 */
const ListContainer: React.FC = () => {
  const { prods, loader } = useProducts()

  return (
    <>
      {loader && <Loader />}
      <ProductsList prods={prods} />
    </>
  )
}

export default ListContainer
