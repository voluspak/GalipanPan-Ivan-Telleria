import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useCart } from '../../hooks/useCart'
import { useModal } from '../../hooks/useModal'
import CartItem from './CartItem'

const ModalCart = () => {
  const { show, setShow } = useModal()
  return (
    <article className='bg-white w-11/12 max-w-5xl h-5/6 max-h-[90vh] rounded-xl shadow-2xl relative overflow-hidden flex flex-col'>
      <header className='border-b border-zinc-200 p-6 flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-heading'>Carrito de Compra</h2>
        <button
          onClick={() => setShow(!show)}
          className='p-2 rounded-lg hover:bg-zinc-100 text-zinc-600 transition-colors'
          aria-label='Cerrar carrito'
        >
          <GrClose className='w-5 h-5' />
        </button>
      </header>
      <div className='flex-1 overflow-auto'>
        <EmptyCart />
      </div>
    </article>
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
        <footer className='border-t border-zinc-200 p-6 flex flex-wrap gap-3 justify-end bg-zinc-50'>
          <button
            className='px-6 h-10 rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-900 font-semibold transition-colors'
            onClick={() => setShow(!show)}
          >
            Continuar Comprando
          </button>
          <button
            className='px-6 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors'
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
          <button
            className='px-6 h-10 rounded-lg bg-blaze-orange-600 hover:bg-blaze-orange-700 text-white font-bold shadow-lg shadow-blaze-orange-600/30 transition-all'
          >
            Proceder al Pago
          </button>
        </footer>
      </>
    )
  } else {
    return (
      <div className='flex flex-col items-center justify-center py-16 px-4'>
        <h3 className='font-bold text-2xl text-heading mb-4'>Nada por aquí... 👀</h3>
        <p className='text-zinc-500 mb-8'>Tu carrito está vacío. ¡Agrega algunos productos deliciosos!</p>
        <img
          src='./assets/6011.jpg'
          alt='Carrito vacío'
          className='h-64 w-64 object-contain opacity-50'
        />
      </div>
    )
  }
}
