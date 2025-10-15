import { useContext } from 'react'
import { ModalContext } from '../context/Modal/modalContext'

export function useModal () {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useModal most be used within ModalProvider')
  }

  return context
}
