import { createContext } from 'react'

/**
 * Tipo del contexto del modal
 */
export interface ModalContextType {
  show: boolean
  setShow: (show: boolean) => void
}

/**
 * Contexto del modal
 */
export const ModalContext = createContext<ModalContextType | undefined>(undefined)
