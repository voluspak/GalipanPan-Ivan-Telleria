export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

function updateLocalState (state) {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
  DELETE_FROM_CART: 'DELETE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const cartItemIndex = state.findIndex((prod) => prod.id === id)

    if (cartItemIndex >= 0) {
      const newState = structuredClone(state)
      newState[cartItemIndex].cant += 1
      updateLocalState(newState)
      return newState
    } else {
      const newState = [
        ...state,
        {
          ...action.payload,
          cant: 1
        }
      ]
      updateLocalState(newState)
      return newState
    }
  },

  [CART_ACTIONS.REMOVE_ONE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const cartItemIndex = state.findIndex((prod) => prod.id === id)

    if (state[cartItemIndex].cant > 1) {
      const newState = structuredClone(state)
      newState[cartItemIndex].cant -= 1
      updateLocalState(newState)
      return newState
    } else {
      const newState = state.filter(item => item.id !== id)
      updateLocalState(newState)
      return newState
    }
  },

  [CART_ACTIONS.DELETE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalState(newState)
    return newState
  },

  [CART_ACTIONS.CLEAR_CART]: () => {
    updateLocalState([])
    return []
  }
}

export function cartReducer (state, action) {
  const { type: actionType } = action
  const updatingState = UPDATE_STATE_BY_ACTION[actionType]

  return updatingState ? updatingState(state, action) : state
}
