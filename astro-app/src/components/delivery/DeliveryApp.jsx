import React from 'react'
import CartProvider from '../../context/CartProvider'
import Navbar from './Navbar'
import ModalCart from './ModalCart'
import { Route, Routes } from 'react-router-dom'
import ListContainer from './ListContainer'
import { useModal } from '../../hooks/useModal'

const DeliveryApp = () => {
  const { show } = useModal()

  return (
    <CartProvider>
      <header className=' mb-40'>
        <Navbar />
      </header>
      {
        show &&
          <aside className='fixed bg-opacity-50 backdrop-blur-sm bg-black w-screen h-screen top-0 left-0 z-20 flex items-center justify-center'>
            <ModalCart />
          </aside>
      }
      <main className='grid place-items-center gap-5 mt-5 mb-5'>
        <h1 className='text-2xl font-bold text-orange-600'>Delivery</h1>
        <Routes>
          <Route index element={<ListContainer />} />
          <Route path='category/:category' element={<ListContainer />} />
        </Routes>
      </main>
    </CartProvider>
  )
}

export default DeliveryApp
