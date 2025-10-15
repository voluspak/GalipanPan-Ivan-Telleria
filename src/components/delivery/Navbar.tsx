import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

/**
 * Barra de navegación del delivery app
 * Incluye logo, links de categorías y widget del carrito
 */
const Navbar: React.FC = () => {
  return (
    <header className="h-24 sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-blaze-orange-300/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Navegación de categorías"
        >
          <a href="/" className="flex-shrink-0" aria-label="Volver a la página de inicio">
            <img
              src="/assets/Logo.webp"
              alt="Logo Galipan Pan"
              title="Logo"
              className="h-auto w-32 sm:w-40"
            />
          </a>
          <ul className="hidden mt-8 md:flex items-center gap-6" role="list">
            <li>
              <Link
                to="/"
                className="text-xl font-medium text-zinc-600 hover:text-blaze-orange-600 transition-colors"
              >
                Todos
              </Link>
            </li>
            <li>
              <Link
                to="/category/roles"
                className="text-xl font-medium text-zinc-600 hover:text-blaze-orange-600 transition-colors"
              >
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/category/panaderia"
                className="text-xl font-medium text-zinc-600 hover:text-blaze-orange-600 transition-colors"
              >
                Panadería
              </Link>
            </li>
            <li>
              <Link
                to="/category/tortasYCupcakes"
                className="text-xl font-medium text-zinc-600 hover:text-blaze-orange-600 transition-colors"
              >
                Tortas y Cupcakes
              </Link>
            </li>
          </ul>
          <CartWidget />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
