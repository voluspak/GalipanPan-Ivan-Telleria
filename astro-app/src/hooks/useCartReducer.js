import { useReducer } from 'react'
import { cartReducer, initialState } from '../Reducers/cartReducer'

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = product => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const removeOneFromCart = product => {
    dispatch({
      type: 'REMOVE_ONE_FROM_CART',
      payload: product
    })
  }

  const deleteFromCart = product => {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: product
    })
  }

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeOneFromCart, deleteFromCart, clearCart }
}
