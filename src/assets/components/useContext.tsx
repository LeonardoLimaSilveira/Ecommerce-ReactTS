import React from 'react'

interface ContextInterface {
  cart: CartInterface[]
  setCart: React.Dispatch<React.SetStateAction<CartInterface[]>>
  photo: string
  setPhoto: React.Dispatch<React.SetStateAction<string>>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
interface CartInterface {
  itemAmount: number
  itemPrice: number
  itemPhoto: string
  itemName: string
}

const CartContext = React.createContext<ContextInterface | null>(null)

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = React.useState([{} as CartInterface])
  const [photo, setPhoto] = React.useState('')
  const [modal, setModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        photo,
        setPhoto,
        modal,
        setModal,
        open,
        setOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* eslint-disable */
export const useCont = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCont must be used within a CartProvider')
  }
  return context
}
