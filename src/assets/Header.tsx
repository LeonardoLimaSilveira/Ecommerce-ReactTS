import React from 'react'
import IconCart from './components/SVGs/IconCart'
import LogoSVG from './components/SVGs/LogoSVG'
import { useCont } from './components/useContext'
import IconDelete from './components/SVGs/IconDelete'
import IconClose from './components/SVGs/IconClose'

const Header = () => {
  const [count, setCount] = React.useState<number | null>()
  const { cart, setCart, open, setOpen, menu, setMenu } = useCont()
  // const [fechar, setFechar] = React.useState(false)

  function closeMenu() {
    console.log('closeMenu chamada')
    setMenu(false)
  }
  React.useEffect(() => {
    cart.filter(item => {
      return setCount(item.itemAmount)
    })
  }, [cart])

  return (
    <header className="max-w-[80%] m-auto h-28 mobile:h-20 flex border-b border-GrayishBlue/50 justify-between ">
      <div
        className="flex items-center"
        onClick={() => {
          setMenu(true)
        }}
      >
        <div className="mobile:block desktop:hidden mr-4">
          <div className="w-7 h-1 bg-VeryDarkBlue my-1"></div>
          <div className="w-7 h-1 bg-VeryDarkBlue my-1"></div>
          <div className="w-7 h-1 bg-VeryDarkBlue my-1"></div>
        </div>
        {menu ? (
          <div className="bg-BlackStyle/60 w-screen h-screen animate-slideRight z-20 fixed left-0 top-0 desktop:hidden">
            <nav className="  w-[70%] h-screen   items-start flex flex-col bg-WhiteStyle">
              <div>
                <IconClose onClick={closeMenu} className="ml-5 my-5" />
              </div>
              <ul className="justify-evenly ml-5 font-bold flex-col w-full h-[40%] items-start">
                <li className="h-5">
                  <a>Collections</a>
                </li>
                <li className="h-5">
                  <a>Men</a>
                </li>
                <li className="h-5">
                  <a>Women</a>
                </li>
                <li className="h-5">
                  <a>About</a>
                </li>
                <li className="h-5">
                  <a onClick={closeMenu}>Contact</a>
                </li>
                <button onClick={() => setMenu(false)}>FECHAR</button>
              </ul>
            </nav>
          </div>
        ) : null}
        <LogoSVG />
        <nav className="text-DarkGrayishBlue ml-14 nav mobile:hidden">
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
            <IconCart fill="" className=" mr-7 mobile:mr-2 cursor-pointer " />
            {count !== undefined && (
              <span className="absolute right-5 -top-2 bg-OrangePrimary text-[0.55rem] font-bold px-[0.4rem] rounded-3xl text-WhiteStyle">
                {count && count.toString()}
              </span>
            )}
          </div>
          {open && (
            <div className="min-h-[18rem] w-96 absolute bg-WhiteStyle right-28 rounded-xl shadow-lg mt-4 grid grid-rows-[25%,auto] animate-slideDown mobile:z-50 mobile:right-0 mobile:left-5 mobile:top-24">
              <div className="border-b border-GrayishBlue/50 ">
                <h1 className="font-bold h-full flex items-center justify-start ml-5">
                  Cart
                </h1>
              </div>
              <div>
                {cart.length > 0 ? (
                  cart.map(item => {
                    return (
                      <div
                        key={item.itemAmount}
                        className=" grid grid-rows-2 items-center w-[90%] relative mx-auto h-full"
                      >
                        <div className="flex items-center  min-h-full  text-DarkGrayishBlue">
                          <img
                            src={item.itemPhoto}
                            alt="item photo"
                            className="h-14 rounded-lg "
                          />
                          <div className="ml-4">
                            <h1>{item.itemName}</h1>
                            <div className="flex ">
                              <h3>${item.itemPrice.toString()}.00 x </h3>
                              <h4 className="ml-2">{item.itemAmount}</h4>
                              <span className="font-bold ml-3 text-BlackStyle ">
                                ${Number(item.itemPrice) * item.itemAmount}.00
                              </span>
                            </div>
                          </div>
                          <IconDelete
                            onClick={() => {
                              setCount(null)
                              setCart([])
                              setTimeout(() => {
                                setOpen(false)
                              }, 1000)
                            }}
                            className="cursor-pointer ml-5 absolute right-2"
                          />
                        </div>
                        <div className="flex bg-OrangePrimary w-full  mx-auto text-WhiteStyle cursor-pointer px-28 h-14 rounded-xl items-center justify-center font-bold hover:opacity-70">
                          <button>Checkout</button>
                        </div>
                      </div>
                    )
                  })
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
          className="hover:outline hover:outline-2 hover:outline-OrangePrimary rounded-full cursor-pointer h-12 mobile:h-8 mobile:mr-2 ml-4"
        />
      </div>
    </header>
  )
}

export default Header
