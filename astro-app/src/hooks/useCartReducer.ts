import { useReducer } from 'react'
import { cartReducer, initialState } from '../reducers/cartReducer'
import type { Product, CartState } from '../types'
import { CartActionType } from '../types'

interface UseCartReducerReturn {
  state: CartState
  addToCart: (product: Product) => void
  removeOneFromCart: (product: Product) => void
  deleteFromCart: (product: Product) => void
  clearCart: () => void
}

/**
 * Hook que maneja la lógica del reducer del carrito
 */
export function useCartReducer(): UseCartReducerReturn {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Product) => {
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: product
    })
  }

  const removeOneFromCart = (product: Product) => {
    dispatch({
      type: CartActionType.REMOVE_ONE_FROM_CART,
      payload: product
    })
  }

  const deleteFromCart = (product: Product) => {
    dispatch({
      type: CartActionType.DELETE_FROM_CART,
      payload: product
    })
  }

  const clearCart = () => dispatch({ type: CartActionType.CLEAR_CART })

  return { state, addToCart, removeOneFromCart, deleteFromCart, clearCart }
}
