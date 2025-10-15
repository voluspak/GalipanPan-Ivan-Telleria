import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import itemSearch from '../../services/findItem'

const Counter = ({ id, cart, addToCart, removeOneFromCart }) => {
  const { quantityOfItemInCart: itemQuantity } = itemSearch(id, cart)

  if (itemQuantity > 0) {
    return (
      <div className='flex items-center gap-2 justify-center'>
        <button
          onClick={removeOneFromCart}
          className='w-8 h-8 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors'
          aria-label='Disminuir cantidad'
        >
          <AiOutlineMinus className='w-4 h-4' />
        </button>
        <span className='min-w-[2rem] text-center font-semibold text-zinc-900'>{itemQuantity}</span>
        <button
          onClick={addToCart}
          className='w-8 h-8 rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors'
          aria-label='Aumentar cantidad'
        >
          <AiOutlinePlus className='w-4 h-4' />
        </button>
      </div>
    )
  } else {
    return (
      <button
        onClick={addToCart}
        className='w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all duration-300'
        aria-label='Agregar al carrito'
      >
        Agregar al Carrito
      </button>
    )
  }
}

export default Counter
