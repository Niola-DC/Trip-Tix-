// src/api/contexts/ModalContext.jsx
import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, handleToggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
