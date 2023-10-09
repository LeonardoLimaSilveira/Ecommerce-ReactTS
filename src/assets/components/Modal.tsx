import IconClose from './SVGs/IconClose'
import { useCont } from './useContext'

const Modal = () => {
  const { modal, photo, setModal } = useCont()

  return (
    modal && (
      <div className="fixed w-screen h-screen bg-BlackStyle/80 top-0 flex items-center justify-center ">
        <div className="w-[30%] h-[60%] relative  ">
          <IconClose
            className="absolute -right-4 -top-2 cursor-pointer hover:fill-OrangePrimary"
            onClick={() => setModal(false)}
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              className="hover:fill-OrangePrimary"
              fillRule="evenodd"
            />
          </IconClose>
          <img
            src={photo || 'public/images/image-product-1.jpg'}
            alt="product picture"
            className="rounded-2xl"
          />
        </div>
      </div>
    )
  )
}

export default Modal
