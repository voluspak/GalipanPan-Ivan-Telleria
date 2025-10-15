import { useEffect, useId, useState } from 'react'
import { useCart } from './useCart'

interface UseCartWidgetReturn {
  total: number
  modalCheckbox: string
}

/**
 * Hook para el widget del carrito
 * Calcula el total de items y provee un ID único para el checkbox del modal
 */
export default function useCartWidget(): UseCartWidgetReturn {
  const { cart } = useCart()
  const [total, setTotal] = useState<number>(0)
  const modalCheckbox = useId()

  useEffect(() => {
    setTotal(cart.reduce((prev, act) => prev + act.cant, 0))
  }, [cart])

  return { total, modalCheckbox }
}
