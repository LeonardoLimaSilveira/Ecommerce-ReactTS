import LogoSVG from './components/SVGs/LogoSVG'

const Header = () => {
  return (
    <header className="max-w-[80%] m-auto h-28  flex border-b border-GrayishBlue/50 ">
      <div className="flex items-center">
        <LogoSVG />
        <nav className="text-DarkGrayishBlue ml-14 ">
          <ul className="flex">
            <li className="ml-9 hover:text-VeryDarkBlue">
              <a className="cursor-pointer">Collections</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue">
              <a className="cursor-pointer">Men</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue">
              <a className="cursor-pointer">Women</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue">
              <a className="cursor-pointer">About</a>
            </li>
            <li className="ml-9 hover:text-VeryDarkBlue">
              <a className="cursor-pointer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </header>
  )
}

export default Header
