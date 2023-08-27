import React from 'react'
import IconCart from './components/SVGs/IconCart'
import LogoSVG from './components/SVGs/LogoSVG'

const Header = () => {
  const [open, setOpen] = React.useState(false)

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
          <div onClick={() => setOpen(!open)}>
            <IconCart className=" mr-7 cursor-pointer relative" />
          </div>
          {open && (
            <div className="min-h-[18rem] w-96 absolute bg-WhiteStyle right-28 rounded-xl shadow-lg mt-4 grid grid-rows-[25%,auto] animate-slideDown">
              <div className="border-b border-GrayishBlue/50 ">
                <h1 className="font-bold h-full flex items-center justify-start ml-5">
                  Cart
                </h1>
              </div>
              <div>
                <div className="h-full w-full flex items-center justify-center text-DarkGrayishBlue font-bold tracking-wide">
                  Your cart is empty.
                </div>
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
