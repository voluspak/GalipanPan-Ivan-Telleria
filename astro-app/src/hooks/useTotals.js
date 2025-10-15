
import { useEffect, useState } from 'react'
import { useCart } from './useCart'

export default function useTotals () {
  const { cart } = useCart(0)
  const [pay, setPay] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  function getTotalToPay () {
    let totalPay = 0
    cart.forEach(prod => {
      totalPay += prod.price * prod.cant
    })
    return totalPay
  }

  function getTotalItems () {
    return cart.reduce((prev, act) => prev + act.cant, 0)
  }

  useEffect(() => {
    setPay(getTotalToPay())
    setTotalItems(getTotalItems())
  }, [cart])

  return { pay, totalItems }
}
