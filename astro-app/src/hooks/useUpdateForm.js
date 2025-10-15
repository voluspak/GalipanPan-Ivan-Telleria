import useUser from './useUser'
import { updateProduct } from '../services/products'

export default function useUpdateForm () {
  const { user } = useUser()
  function handleUpdateForm (e, id) {
    e.preventDefault()

    const prodToUpdate = Object.fromEntries(new FormData(e.target))
    const { token } = user
    try {
      const newProd = updateProduct(id, prodToUpdate, token)
      console.log(`Producto id: ${id} \n Modificado con éxito`)
      return newProd
    } catch (error) {
      console.log(error)
      throw new Error('Hubo un problema al modificar el producto')
    }
  }

  return { handleUpdateForm }
}
