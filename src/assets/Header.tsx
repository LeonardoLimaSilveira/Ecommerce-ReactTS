import React from 'react'
import IconCart from './components/SVGs/IconCart'
import LogoSVG from './components/SVGs/LogoSVG'
import { useCart } from './components/useContext'
import IconDelete from './components/SVGs/IconDelete'

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const [count, setCount] = React.useState<string | null>()
  const { cart, setCart } = useCart()

  React.useEffect(() => {
    setCount(cart[cart.length - 1])
  }, [cart])

  return (
    <header className="max-w-[80%] m-auto h-28  flex border-b border-GrayishBlue/50 justify-between">
      <div className="flex items-center">
        <LogoSVG />
        <nav className="text-DarkGrayishBlue ml-14 nav ">
          <ul className="">
            <li className="ml-9 hover:text-VeryDarkBlue  hover:border-b-4 hover:border-OrangePrimary">
              <a className="cursor-pointer">Collections</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue  hover:border-b-4 hover:border-OrangePrimary">
              <a className="cursor-pointer">Men</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue  hover:border-b-4 hover:border-OrangePrimary">
              <a className="cursor-pointer">Women</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue  hover:border-b-4 hover:border-OrangePrimary">
              <a className="cursor-pointer">About</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue  hover:border-b-4 hover:border-OrangePrimary">
              <a className="cursor-pointer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <div onClick={() => setOpen(!open)} className="relative">
            <IconCart fill="" className=" mr-7 cursor-pointer " />
            {count && (
              <span className="absolute right-5 -top-2 bg-OrangePrimary text-[0.55rem] font-bold px-[0.4rem] rounded-3xl text-WhiteStyle">
                {count}
              </span>
            )}
          </div>
          {open && (
            <div className="min-h-[18rem] w-96 absolute bg-WhiteStyle right-28 rounded-xl shadow-lg mt-4 grid grid-rows-[25%,auto] animate-slideDown">
              <div className="border-b border-GrayishBlue/50 ">
                <h1 className="font-bold h-full flex items-center justify-start ml-5">
                  Cart
                </h1>
              </div>
              <div>
                {cart.length > 0 ? (
                  <div className=" grid grid-rows-2 items-center w-[90%] relative mx-auto h-full">
                    <div className="flex items-center  min-h-full  text-DarkGrayishBlue">
                      <img
                        src={cart[2]}
                        alt="item photo"
                        className="h-14 rounded-lg "
                      />
                      <div className="ml-4">
                        <h1>{cart[0]}</h1>
                        <div className="flex ">
                          <h3>${cart[1]}.00 x </h3>
                          <h4 className="ml-2">{cart[3]}</h4>
                          <span className="font-bold ml-3 text-BlackStyle ">
                            ${Number(cart[1]) * Number(cart[3])}.00
                          </span>
                        </div>
                      </div>
                      <IconDelete
                        onClick={() => setCart([])}
                        className="cursor-pointer ml-5 absolute right-2"
                      />
                    </div>
                    <div className="flex bg-OrangePrimary w-full  mx-auto text-WhiteStyle cursor-pointer px-28 h-14 rounded-xl items-center justify-center font-bold hover:opacity-70">
                      <button>Checkout</button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-DarkGrayishBlue font-bold tracking-wide">
                    Your cart is empty.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <img
          src="./images/image-avatar.png"
          alt="user avatar photo"
          className="hover:outline hover:outline-2 hover:outline-OrangePrimary rounded-full cursor-pointer h-12 w-h-12 ml-4"
        />
      </div>
    </header>
  )
}

export default Header
