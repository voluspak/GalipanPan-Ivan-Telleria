import React, { type ReactNode } from 'react'
import { CartContext } from './cartContext'
import { useCartReducer } from '../hooks/useCartReducer'

interface CartProviderProps {
  children: ReactNode
}

/**
 * Provider del contexto del carrito
 */
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { addToCart, clearCart, removeOneFromCart, state, deleteFromCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,
        removeOneFromCart,
        cart: state,
        deleteFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
