import { useCont } from './useContext'
import IconClose from './SVGs/IconClose'

const MenuMobile = () => {
  const { setMenu } = useCont()

  return (
    <div className="bg-BlackStyle/60 w-screen h-screen animate-slideRight z-20 fixed left-0 top-0 desktop:hidden">
      <nav className="  w-[70%] h-screen   items-start flex flex-col bg-WhiteStyle">
        <div onClick={() => setMenu(false)}>
          <IconClose className="ml-5 my-5" />
        </div>
        <ul className="justify-evenly ml-5 font-bold flex-col w-full h-[40%] items-start">
          <li className="h-5 cursor-pointer">
            <a>Collections</a>
          </li>
          <li className="h-5 cursor-pointer">
            <a>Men</a>
          </li>
          <li className="h-5 cursor-pointer">
            <a>Women</a>
          </li>
          <li className="h-5 cursor-pointer">
            <a>About</a>
          </li>
          <li className="h-5 cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuMobile
