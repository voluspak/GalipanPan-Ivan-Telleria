import React from 'react'
import { useCart } from '../../hooks/useCart'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import useTotals from '../../hooks/useTotals'

const CartItem = () => {
  const { addToCart, removeOneFromCart, deleteFromCart, cart } = useCart()
  const { totalItems, pay } = useTotals()

  return (
    <>
      <table className='w-full table-auto text-center'>
        <thead className='bg-zinc-50 border-b border-zinc-200'>
          <tr className='[&_th]:p-3 text-sm font-semibold text-zinc-700'>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(prod => (
            <tr key={prod.id} className='border-b border-zinc-100 hover:bg-zinc-50 transition-colors'>
              <td className='p-3'>
                <img
                  src={prod.img}
                  alt={prod.name}
                  className='mx-auto rounded-lg w-20 h-20 object-cover border border-blaze-orange-200'
                />
              </td>
              <td className='p-3'>
                <span className='font-medium text-zinc-900'>{prod.name}</span>
              </td>
              <td className='p-3'>
                <span className='text-zinc-700'>COP${prod.price}k</span>
              </td>
              <td className='p-3'>
                <div className='flex items-center gap-2 justify-center'>
                  <button
                    onClick={() => removeOneFromCart(prod)}
                    className='w-7 h-7 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors'
                    aria-label='Disminuir cantidad'
                  >
                    <AiOutlineMinus className='w-3 h-3' />
                  </button>
                  <span className='min-w-[2rem] font-semibold text-zinc-900'>{prod.cant}</span>
                  <button
                    onClick={() => addToCart(prod)}
                    className='w-7 h-7 rounded bg-blaze-orange-600 hover:bg-blaze-orange-700 text-white flex items-center justify-center transition-colors'
                    aria-label='Aumentar cantidad'
                  >
                    <AiOutlinePlus className='w-3 h-3' />
                  </button>
                </div>
              </td>
              <td className='p-3'>
                <span className='font-semibold text-zinc-900'>COP${prod.price * prod.cant}k</span>
              </td>
              <td className='p-3'>
                <button
                  onClick={() => deleteFromCart(prod)}
                  className='p-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors'
                  aria-label='Eliminar producto'
                >
                  <RiDeleteBin5Line className='w-5 h-5' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className='bg-zinc-50 border-t-2 border-zinc-300'>
          <tr>
            <td colSpan='3' className='p-4'></td>
            <td className='p-4'>
              <strong className='text-zinc-900'>{totalItems} unid.</strong>
            </td>
            <td className='p-4'>
              <strong className='text-blaze-orange-600 text-lg'>COP${pay}k</strong>
            </td>
            <td className='p-4'></td>
          </tr>
        </tfoot>
      </table >
    </>
  )
}

export default CartItem
