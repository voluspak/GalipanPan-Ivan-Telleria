import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from '../../context/CartProvider'
import ModalProvider from '../../context/Modal/ModalProvider'
import Navbar from './Navbar'
import ModalCart from './ModalCart'
import ListContainer from './ListContainer'
import { useModal } from '../../hooks/useModal'

/**
 * Contenido principal del delivery app
 * Incluye navbar, modal del carrito y rutas de productos
 */
const DeliveryContent: React.FC = () => {
  const { show } = useModal()

  return (
    <CartProvider>
      <div className="relative min-h-screen w-full flex flex-col bg-white">
        <Navbar />
        {show && (
          <aside className="fixed bg-black/50 backdrop-blur-sm w-screen h-screen top-0 left-0 z-30 flex items-center justify-center">
            <ModalCart />
          </aside>
        )}
        <main className="flex-grow py-16 md:py-24 mx-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-heading">
                Nuestro Menú
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                Explora nuestra deliciosa selección de productos, hechos frescos diariamente con los
                mejores ingredientes y mucho amor.
              </p>
            </header>
            <Routes>
              <Route index element={<ListContainer />} />
              <Route path="category/:category" element={<ListContainer />} />
            </Routes>
          </div>
        </main>
      </div>
    </CartProvider>
  )
}

/**
 * Componente principal del delivery app
 * Configura React Router y providers
 */
const DeliveryAppClient: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter basename="/delivery">
        <DeliveryContent />
      </BrowserRouter>
    </ModalProvider>
  )
}

export default DeliveryAppClient
