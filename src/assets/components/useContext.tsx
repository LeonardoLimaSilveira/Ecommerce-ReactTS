import React from 'react'

interface CartInterface {
  cart: string[]
  setCart: React.Dispatch<React.SetStateAction<string[]>>
  photo?: string
  setPhoto: React.Dispatch<React.SetStateAction<undefined>>
}

const CartContext = React.createContext<CartInterface | null>(null)

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = React.useState<string[]>([])
  const [photo, setPhoto] = React.useState()

  return (
    <CartContext.Provider value={{ cart, setCart, photo, setPhoto }}>
      {children}
    </CartContext.Provider>
  )
}

/* eslint-disable */
export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
