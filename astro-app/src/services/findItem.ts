import type { CartState, ItemSearchResult } from '../types'

/**
 * Busca un item en el carrito y retorna su cantidad
 * @param id - ID del producto a buscar
 * @param cart - Estado actual del carrito
 * @returns Objeto con la cantidad del item en el carrito
 */
export default function itemSearch(id: number, cart: CartState): ItemSearchResult {
  function findItem(id: number, cart: CartState): number {
    const indexOfItemInCart = cart.findIndex((item) => item.id === id)

    if (indexOfItemInCart >= 0) {
      return cart[indexOfItemInCart].cant
    }

    return 0
  }

  const quantityOfItemInCart = findItem(id, cart)

  return { quantityOfItemInCart }
}
