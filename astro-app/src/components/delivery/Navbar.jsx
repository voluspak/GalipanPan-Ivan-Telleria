import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center justify-between h-20' aria-label='Navegación de categorías'>
          <Link to='/' className='flex-shrink-0' aria-label='Ver todos los productos'>
            <img src='/assets/Logo.webp' alt='Logo Galipan Pan' title='Logo' className='h-auto w-32 sm:w-40' />
          </Link>
          <ul className='hidden md:flex items-center gap-6' role='list'>
            <li>
              <Link to='/' className='text-sm font-medium text-zinc-600 hover:text-primary transition-colors'>
                Todos
              </Link>
            </li>
            <li>
              <Link to='/category/roles' className='text-sm font-medium text-zinc-600 hover:text-primary transition-colors'>
                Roles
              </Link>
            </li>
            <li>
              <Link to='/category/panaderia' className='text-sm font-medium text-zinc-600 hover:text-primary transition-colors'>
                Panadería
              </Link>
            </li>
            <li>
              <Link to='/category/tortasYCupcakes' className='text-sm font-medium text-zinc-600 hover:text-primary transition-colors'>
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
