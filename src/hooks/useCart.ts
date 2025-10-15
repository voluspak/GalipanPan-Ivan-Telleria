import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import type { CartContextType } from '../types'

/**
 * Hook para acceder al contexto del carrito
 * @throws Error si se usa fuera del CartProvider
 */
export function useCart(): CartContextType {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
