import type { CartAction, CartState } from '../types'
import { CartActionType } from '../types'
import { CART_STORAGE_KEY } from '../constants'

/**
 * Estado inicial del carrito (recuperado de localStorage)
 */
export const initialState: CartState = (() => {
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error al cargar carrito desde localStorage:', error)
    return []
  }
})()

/**
 * Actualiza el localStorage con el nuevo estado
 */
function updateLocalState(state: CartState): void {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Error al guardar carrito en localStorage:', error)
  }
}

/**
 * Handlers para cada tipo de acción del carrito
 */
const UPDATE_STATE_BY_ACTION: Record<
  CartActionType,
  (state: CartState, action: CartAction) => CartState
> = {
  [CartActionType.ADD_TO_CART]: (state, action) => {
    if (action.type !== CartActionType.ADD_TO_CART) return state

    const { id } = action.payload
    const cartItemIndex = state.findIndex((prod) => prod.id === id)

    if (cartItemIndex >= 0) {
      const newState = structuredClone(state)
      newState[cartItemIndex].cant += 1
      updateLocalState(newState)
      return newState
    }

    const newState: CartState = [
      ...state,
      {
        ...action.payload,
        cant: 1
      }
    ]
    updateLocalState(newState)
    return newState
  },

  [CartActionType.REMOVE_ONE_FROM_CART]: (state, action) => {
    if (action.type !== CartActionType.REMOVE_ONE_FROM_CART) return state

    const { id } = action.payload
    const cartItemIndex = state.findIndex((prod) => prod.id === id)

    if (cartItemIndex < 0) return state

    if (state[cartItemIndex].cant > 1) {
      const newState = structuredClone(state)
      newState[cartItemIndex].cant -= 1
      updateLocalState(newState)
      return newState
    }

    const newState = state.filter((item) => item.id !== id)
    updateLocalState(newState)
    return newState
  },

  [CartActionType.DELETE_FROM_CART]: (state, action) => {
    if (action.type !== CartActionType.DELETE_FROM_CART) return state

    const { id } = action.payload
    const newState = state.filter((item) => item.id !== id)
    updateLocalState(newState)
    return newState
  },

  [CartActionType.CLEAR_CART]: () => {
    updateLocalState([])
    return []
  }
}

/**
 * Reducer del carrito
 */
export function cartReducer(state: CartState, action: CartAction): CartState {
  const { type: actionType } = action
  const updatingState = UPDATE_STATE_BY_ACTION[actionType]

  return updatingState ? updatingState(state, action) : state
}
