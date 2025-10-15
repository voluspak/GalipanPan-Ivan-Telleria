import React, { useState } from 'react'
import { ModalContext } from './modalContext'

const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
