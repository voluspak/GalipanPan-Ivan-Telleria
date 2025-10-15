import { useEffect, useState } from 'react'
import { useCart } from './useCart'
import type { CartTotals } from '../types'

/**
 * Hook para calcular los totales del carrito
 */
export default function useTotals(): CartTotals {
  const { cart } = useCart()
  const [pay, setPay] = useState<number>(0)
  const [totalItems, setTotalItems] = useState<number>(0)

  function getTotalToPay(): number {
    let totalPay = 0
    cart.forEach((prod) => {
      totalPay += prod.price * prod.cant
    })
    return totalPay
  }

  function getTotalItems(): number {
    return cart.reduce((prev, act) => prev + act.cant, 0)
  }

  useEffect(() => {
    setPay(getTotalToPay())
    setTotalItems(getTotalItems())
  }, [cart])

  return { pay, totalItems }
}
