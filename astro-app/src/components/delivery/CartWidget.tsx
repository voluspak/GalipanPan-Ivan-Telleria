import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCartWidget from '../../hooks/useCartWidget'
import { useModal } from '../../hooks/useModal'

/**
 * Widget del carrito de compras
 * Muestra el ícono del carrito con la cantidad de items
 */
const CartWidget: React.FC = () => {
  const { setShow, show } = useModal()
  const { total, modalCheckbox } = useCartWidget()

  return (
    <div>
      <label className="relative cursor-pointer" htmlFor={modalCheckbox}>
        <AiOutlineShoppingCart className="w-16 h-auto hover:text-blaze-orange-600 text-zinc-500" />
        {total > 0 && (
          <div className="absolute top-1 right-0  text-white w-6 h-6  flex justify-center items-center">
            <span className="text-white bg-blaze-orange-600 rounded-full w-full h-full  text-center">
              {total}
            </span>
          </div>
        )}
      </label>
      <input type="checkbox" id={modalCheckbox} hidden onChange={() => setShow(!show)} />
    </div>
  )
}

export default CartWidget
