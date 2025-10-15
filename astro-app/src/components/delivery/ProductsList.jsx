import React from 'react'
import Counter from './Counter'
import { useCart } from '../../hooks/useCart'

const ProductsList = ({ prods }) => {
  const { cart, addToCart, removeOneFromCart } = useCart()

  return (
    <section className='grid w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        prods
          .filter(prod => prod.display)
          .map(prod => (
            <article
              key={prod.id}
              className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-primary/10'
            >
              <figure className='overflow-hidden'>
                <img
                  src={prod.img}
                  alt={prod.name}
                  title={prod.name}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </figure>
              <figcaption className='p-5 flex flex-col gap-3'>
                <h3 className='text-lg font-bold text-zinc-900'>{prod.name}</h3>
                <p className='text-sm text-zinc-600'>
                  <span className='text-primary font-bold text-lg'>COP${prod.price}k</span>
                  <span className='text-zinc-500'> {prod.unid}</span>
                </p>
                <p className='text-xs text-zinc-500'>+ Delivery</p>
                <Counter
                  {...prod}
                  addToCart={() => addToCart(prod)}
                  removeOneFromCart={() => removeOneFromCart(prod)}
                  cart={cart}
                />
              </figcaption>
            </article>
          ))
      }
    </section>
  )
}

export default ProductsList
