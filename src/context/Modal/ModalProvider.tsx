import React, { useState, type ReactNode } from 'react'
import { ModalContext } from './modalContext'

interface ModalProviderProps {
  children: ReactNode
}

/**
 * Provider del contexto del modal
 */
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false)

  return <ModalContext.Provider value={{ show, setShow }}>{children}</ModalContext.Provider>
}

export default ModalProvider
