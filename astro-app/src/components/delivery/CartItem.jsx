import React from 'react'
import { useCart } from '../../hooks/useCart'
import { RiDeleteBin5Line } from 'react-icons/ri'
import useTotals from '../../hooks/useTotals'

const CartItem = () => {
  const { addToCart, removeOneFromCart, deleteFromCart, cart } = useCart()
  const { totalItems, pay } = useTotals()

  return (
    <>
      <table className='w-full md:table-auto table-fixed text-center'>
        <thead>
          <tr>
            <th> </th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map(prod => (
            <tr key={prod.id} className='border-y my-1 py-2 even:bg-gray-50'>
              <td>
                <img src={prod.img} className='mx-auto border-2 border-opacity-50 border-orange-500 rounded-full w-32 h-32 object-cover' />
              </td>
              <td>
                <span>{prod.name}</span>
              </td>
              <td>
                COP{prod.price}K
              </td>
              <td>
                <button onClick={() => removeOneFromCart(prod)} className='p-2 font-bold text-2xl text-red-700 active:text-red-500'>-</button>
                <span>{prod.cant}</span>
                <button onClick={() => addToCart(prod)} className='p-2 font-bold text-green-700 active:text-green-500 text-lg'>+</button>
              </td>
              <td>
                <span>COP{prod.price * prod.cant}K</span>
              </td>
              <td>
                <button onClick={() => deleteFromCart(prod)} className='p-2 text-2xl text-red-700 active:text-red-500'><RiDeleteBin5Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><strong>{totalItems}unid.</strong></td>
            <td><strong>COP{pay}K</strong></td>
            <td> </td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default CartItem
