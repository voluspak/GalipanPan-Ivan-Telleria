import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import itemSearch from '../../services/findItem'

const Counter = ({ id, cart, addToCart, removeOneFromCart }) => {
  const { quantityOfItemInCart: itemQuantity } = itemSearch(id, cart)

  if (itemQuantity > 0) {
    return (
      <div className='flex gap-1'>
        <input type='text' readOnly value={itemQuantity} className='rounded text-center w-8 h-8 self-center' />
        <div className='flex flex-col'>
          <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={addToCart} /></button>
          <button><AiOutlineMinusCircle className='h-auto w-6 hover:text-gray-700' onClick={removeOneFromCart} /></button>
        </div>
      </div>
    )
  } else {
    return (<button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={addToCart} /></button>)
  }
}

export default Counter
