import React from 'react'
import IconClose from './SVGs/IconClose'
import { useCont } from './useContext'
import { Product } from '../Main'

const Modal = () => {
  const { modal, photo, setModal, setPhoto } = useCont()
  const [data, setData] = React.useState<Product[]>([])
  const [image, setImage] = React.useState<string[]>([])

  React.useEffect(() => {
    if (data) {
      fetch('./API/data.json')
        .then(r => r.json())
        .then(r => {
          setData(r)
          data.map(data => {
            setImage(data.product.photos)
          })
        })
        .catch(error => {
          console.error('Error fetching data', error)
        })
    }
    if (image.length > 0) {
      console.log(image)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    modal && (
      <div className="fixed w-screen h-screen bg-BlackStyle/80 top-0 flex items-center justify-center ">
        <div className="w-[30%] h-[60%] relative  ">
          <IconClose
            className="absolute -right-4 -top-2 cursor-pointer hover:fill-OrangePrimary"
            onClick={() => setModal(false)}
          />
          <img
            src={photo || 'public/images/image-product-1.jpg'}
            alt="product picture"
            className="rounded-2xl"
          />
          <div className="grid w-full grid-cols-4 items-center justify-center gap-5 ">
            {data.length > 0 &&
              data.map(i => {
                return i.product.photos.map(photo => {
                  return (
                    <img
                      key={photo}
                      onClick={() => setPhoto(photo)}
                      src={photo}
                      className=" mt-5 rounded-2xl cursor-pointer  hover:opacity-70 hover:border-OrangePrimary hover:border-2 "
                    />
                  )
                })
              })}
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
