import type { Product } from './product.types'

/**
 * Item en el carrito (producto con cantidad)
 */
export interface CartItem extends Product {
  cant: number
}

/**
 * Estado del carrito
 */
export type CartState = CartItem[]

/**
 * Contexto del carrito
 */
export interface CartContextType {
  cart: CartState
  addToCart: (product: Product) => void
  removeOneFromCart: (product: Product) => void
  deleteFromCart: (product: Product) => void
  clearCart: () => void
}

/**
 * Totales del carrito
 */
export interface CartTotals {
  pay: number
  totalItems: number
}

/**
 * Búsqueda de item en carrito
 */
export interface ItemSearchResult {
  quantityOfItemInCart: number
}
