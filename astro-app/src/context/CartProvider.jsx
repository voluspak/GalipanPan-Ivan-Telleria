import React from 'react'
import { CartContext } from './cartContext'
import { useCartReducer } from '../Hooks/useCartReducer'

const CartProvider = ({ children }) => {
  const { addToCart, clearCart, removeOneFromCart, state, deleteFromCart } = useCartReducer()
  return (
    <CartContext.Provider value={{ addToCart, clearCart, removeOneFromCart, cart: state, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
