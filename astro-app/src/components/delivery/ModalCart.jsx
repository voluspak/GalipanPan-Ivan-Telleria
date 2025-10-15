import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useCart } from '../../hooks/useCart'
import { useModal } from '../../hooks/useModal'
import CartItem from './CartItem'

const ModalCart = () => {
  const { show, setShow } = useModal()
  return (
    <div className='bg-white w-3/4 h-4/5 rounded p-3 shadow-md relative overflow-auto'>
      <header className=' mb-3 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-orange-500'>Carrito de compra</h1>
      </header>
      <button onClick={() => setShow(!show)} className='absolute p-1 rounded-full top-5 right-5 hover:bg-slate-100 text-gray-500'><GrClose /></button>
      <hr />
      <EmptyCart />
    </div>
  )
}

export default ModalCart

const EmptyCart = () => {
  const { cart, clearCart } = useCart()
  const { show, setShow } = useModal()
  if (cart.length > 0) {
    return (
      <>
        <CartItem />
        <hr />
        <footer className='flex justify-around items-center p-3'>
          <button className='py-1 px-3 rounded-md border text-white font-bold text-lg bg-red-600' onClick={clearCart}>Vaciar</button>
          <button className='py-1 px-3 rounded-md border text-white font-bold text-lg bg-green-600'>Comprar</button>
          <button className='py-1 px-3 rounded-md border text-white font-bold text-lg bg-gray-500' onClick={() => setShow(!show)}>Cancelar</button>
        </footer>
      </>
    )
  } else {
    return (
      <div className='flex flex-col items-center justify-center mt-16'>
        <h2 className='font-bold text-xl text-orange-500'>Nada por aqui... 👀</h2>
        <img
          src='./assets/6011.jpg' alt='Empty cart' className=' h-72 w-72'
        />
      </div>
    )
  }
}
