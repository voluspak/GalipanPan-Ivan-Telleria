import { useContext } from 'react'
import { ModalContext, type ModalContextType } from '../context/Modal/modalContext'

/**
 * Hook para acceder al contexto del modal
 * @throws Error si se usa fuera del ModalProvider
 */
export function useModal(): ModalContextType {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useModal must be used within ModalProvider')
  }

  return context
}
