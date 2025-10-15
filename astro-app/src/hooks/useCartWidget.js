import { useEffect, useId, useState } from 'react'
import { useCart } from './useCart'

export default function useCartWidget () {
  const { cart } = useCart()
  const [total, setTotal] = useState(0)
  const modalCheckbox = useId()

  useEffect(() => {
    setTotal(cart.reduce((prev, act) => prev + act.cant, 0))
  }, [cart])

  return { total, modalCheckbox }
}
