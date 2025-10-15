import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart most be used within CartProvider')
  }

  return context
}
