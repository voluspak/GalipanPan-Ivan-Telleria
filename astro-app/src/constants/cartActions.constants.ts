import { CartActionType } from '../types'

/**
 * Constantes de acciones del carrito
 * Exportadas como objeto para mantener compatibilidad con código existente
 */
export const CART_ACTIONS = {
  ADD_TO_CART: CartActionType.ADD_TO_CART,
  REMOVE_ONE_FROM_CART: CartActionType.REMOVE_ONE_FROM_CART,
  DELETE_FROM_CART: CartActionType.DELETE_FROM_CART,
  CLEAR_CART: CartActionType.CLEAR_CART
} as const

/**
 * Clave de localStorage para el carrito
 */
export const CART_STORAGE_KEY = 'cart' as const
