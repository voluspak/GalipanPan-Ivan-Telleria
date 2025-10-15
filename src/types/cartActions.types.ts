import type { Product } from './product.types'

/**
 * Tipos de acciones del carrito
 */
export enum CartActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}

/**
 * Acción de agregar al carrito
 */
export interface AddToCartAction {
  type: CartActionType.ADD_TO_CART
  payload: Product
}

/**
 * Acción de remover uno del carrito
 */
export interface RemoveOneFromCartAction {
  type: CartActionType.REMOVE_ONE_FROM_CART
  payload: Product
}

/**
 * Acción de eliminar del carrito
 */
export interface DeleteFromCartAction {
  type: CartActionType.DELETE_FROM_CART
  payload: Product
}

/**
 * Acción de limpiar carrito
 */
export interface ClearCartAction {
  type: CartActionType.CLEAR_CART
}

/**
 * Todas las acciones posibles del carrito
 */
export type CartAction =
  | AddToCartAction
  | RemoveOneFromCartAction
  | DeleteFromCartAction
  | ClearCartAction
