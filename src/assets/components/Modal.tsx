import React from 'react'
import IconClose from './SVGs/IconClose'
import { useCont } from './useContext'
import { Product } from '../Main'
import IconNext from './SVGs/IconNext'
import IconPrevious from './SVGs/IconPrevious'

const Modal = () => {
  const { modal, setModal, setAmount, amount } = useCont()
  const [data, setData] = React.useState<Product[]>([])
  const image = [
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg'
  ]

  React.useEffect(() => {
    if (data) {
      fetch('./API/data.json')
        .then(r => r.json())
        .then(r => {
          setData(r)
        })
        .catch(error => {
          console.error('Error fetching data', error)
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    modal && (
      <div className="fixed w-screen h-screen bg-BlackStyle/80 top-0 flex items-center justify-center ">
        <div className="w-[30%] h-[60%] relative  ">
          <IconClose
            className="absolute right-0 -top-9 cursor-pointer hover:fill-OrangePrimary"
            onClick={() => {
              setModal(false)
            }}
          />

          <IconPrevious
            onClick={() => {
              if (amount - 1 === 0) {
                setAmount(image.length)
              } else {
                setAmount(amount - 1)
              }
            }}
          />
          <IconNext
            onClick={() => {
              if (amount > image.length - 1) {
                setAmount(1)
              } else {
                setAmount(amount + 1)
              }
            }}
          />
          <img
            src={`../images/image-product-${amount}.jpg`}
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
                      onClick={() => {
                        setAmount(Number(photo.replace(/\D/g, '')))
                      }}
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
