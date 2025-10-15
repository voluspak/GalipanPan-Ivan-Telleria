import { createContext } from 'react'
import type { CartContextType } from '../types'

/**
 * Contexto del carrito de compras
 */
export const CartContext = createContext<CartContextType | undefined>(undefined)
