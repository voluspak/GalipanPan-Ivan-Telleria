import React from 'react'
import Counter from './Counter'
import { useCart } from '../../hooks/useCart'

const ProductsList = ({ prods }) => {
  const { cart, addToCart, removeOneFromCart } = useCart()

  return (
    <section className=' w-4/5 grid grid-cols-autoFit gap-5 place-items-center'>
      {
      prods
        .filter(prod => prod.display)
        .map(prod => (
          <div key={prod.id} className=' bg-orange-100 rounded w-64 h-96 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform'>
            <figure>
              <img src={prod.img} title={prod.name} className='h-60 w-64 object-cover rounded' />
            </figure>
            <figcaption className='flex flex-col justify-around items-center'>
              <h3 className=' text-orange-500 text-xl'>{prod.name}</h3>
              <span className='italic'>COP{prod.price}k
                <span> {prod.unid}</span>
              </span>
              <span className='font-bold'>+ Delivery</span>
              <Counter
                {...prod} addToCart={() => addToCart(prod)} removeOneFromCart={() => removeOneFromCart(prod)} cart={cart}
              />
            </figcaption>
          </div>
        ))
    }
    </section>
  )
}

export default ProductsList
