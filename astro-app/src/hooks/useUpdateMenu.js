import { useState } from 'react'
import useUser from './useUser'
import { deleteProduct, patchProduct } from '../services/products'

export default function useUpdateMenu () {
  const [product, setProduct] = useState(null)
  const [showSetting, setShowSetting] = useState(false)
  const { user } = useUser()

  const toggleSettings = () => setShowSetting(!showSetting)

  const setCurrentProduct = item => {
    setProduct(item)
    toggleSettings()
  }

  function handleDelete (product) {
    const { id, name, unid, price } = product
    const { token } = user

    const removeOk = window.confirm(`
        ¿Estas seguro de querer eliminar este producto? \n
        ${name} \n
        COP${price}k \n
        ${unid}
        ID: ${id}
        `)

    if (removeOk) {
      try {
        const removeProduct = deleteProduct(id, token)
        window.alert(`${name}(ID: ${id}) \n Eliminado con éxito`)
        return removeProduct
      } catch (error) {
        console.error(error)
        throw new Error('Hubo problemas al eliminar el producto')
      }
    }
  }

  async function changeDisplay (product) {
    const confirmDisplayChange = window
      .confirm(`Estas por cambiar la disponibilidad de ${product.name}. \n ¿Estas seguro?`)

    if (confirmDisplayChange) {
      const keyToUpdate = {
        name: product.name,
        display: !product.display
      }
      const { token } = user

      try {
        const newProd = await patchProduct(product.id, keyToUpdate, token)

        return newProd
      } catch (error) {
        console.log(error)
        throw new Error('Hubo un problema al modificar el producto')
      }
    }
  }

  return { toggleSettings, setCurrentProduct, product, showSetting, handleDelete, changeDisplay }
}
