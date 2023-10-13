import React from 'react'
import IconCart from './components/SVGs/IconCart'
import { useCont } from './components/useContext'
import IconPrevious from './components/SVGs/IconPrevious'
import IconNext from './components/SVGs/IconNext'

export type Product = {
  product: {
    name: string
    brand: string
    description: string
    photos: string[]
    thumbnail: string[]
    price: number
    discount: string
    finalPrice: number
  }
}

const Main = () => {
  const [data, setData] = React.useState<Product[]>([])
  const [src, setSrc] = React.useState('')
  const [count, setCount] = React.useState(0)
  const { setCart, setOpen, setModal, setPhoto, setAmount, amount } = useCont()

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
    <main className="max-w-[70%] mx-auto my-20 mobile:my-0">
      <div className="flex mobile:flex-col justify-center items-center">
        <div className="flex-1 mobile:w-screen">
          {data.length > 0 &&
            data.map(item => {
              return (
                <div key={item.product.name}>
                  <div className="mobile:relative">
                    <img
                      className="destkop:block mobile:hidden w-[70%] h-[70%]  m-auto rounded-2xl hover:opacity-50 cursor-pointer "
                      src={src ? src : item.product.photos[0]}
                      alt={`${item.product.name} photo`}
                      onClick={() => {
                        src
                          ? setAmount(Number(src.replace(/\D/g, '')))
                          : setAmount(1)
                        setPhoto(src)
                        setModal(true)
                      }}
                    />
                    <img
                      className="mobile:block desktop:hidden h-[70%] w-full m-auto  "
                      src={`../images/image-product-${amount}.jpg`}
                      alt={`${item.product.name} photo`}
                    />
                    <div className="mobile:block desktop:hidden mobile:absolute left-7 top-[50%]">
                      <IconPrevious
                        onClick={() => {
                          if (amount - 1 === 0) {
                            setAmount(item.product.photos.length)
                          } else {
                            setAmount(amount - 1)
                          }
                        }}
                      />
                    </div>
                    <div className="mobile:block desktop:hidden mobile:absolute right-7 top-[50%]">
                      <IconNext
                        onClick={() => {
                          if (amount > item.product.photos.length - 1) {
                            setAmount(1)
                          } else {
                            setAmount(amount + 1)
                          }
                        }}
                      />
                    </div>
                    <div className="grid w-[70%] grid-cols-4 grid-rows-1 items-center justify-center mx-auto gap-5 mobile:hidden ">
                      {item.product.photos.map(item => {
                        return (
                          <img
                            onClick={() => {
                              setSrc(item)
                            }}
                            key={item}
                            src={item}
                            alt=""
                            className=" mt-5 rounded-2xl cursor-pointer  hover:opacity-50"
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="flex-1 desktop:h-[26rem]">
          {data.length > 0 &&
            data.map(item => {
              return (
                <div
                  key={item.product.name}
                  className=" flex flex-col justify-around h-full  mx-auto my-5"
                >
                  <h4 className="text-OrangePrimary tracking-widest font-bold text-sm mobile:text-xs mobile:mb-2">
                    {item.product.brand}
                  </h4>
                  <h1 className="font-bold text-6xl mobile:text-4xl">
                    {item.product.name}
                  </h1>
                  <p className="text-DarkGrayishBlue w-[80%] leading-8 mobile:text-sm mobile:my-3 ">
                    {item.product.description}
                  </p>
                  <div className="mobile:flex desktop:block justify-between">
                    <div className="flex items-center">
                      <h2 className="font-bold mr-5 text-3xl mobile:text-xl">
                        ${item.product.finalPrice}
                      </h2>
                      <div className="bg-PaleOrange text-OrangePrimary rounded-md h-6 px-2 font-bold text-sm flex   mobile:text-xs items-center">
                        {item.product.discount}
                      </div>
                    </div>
                    <div className=" text-GrayishBlue mobile:my-auto font-bold line-through -mt-3 mobile:text-sm">
                      ${item.product.price}.00
                    </div>
                  </div>
                  <div className="flex mt-4 items-center mobile:flex-col">
                    <div className="flex mobile:w-full">
                      <div
                        className="bg-LightGrayishBlue rounded-s-md p-4 text-OrangePrimary font-bold text-lg cursor-pointer mobile:w-full  mobile:text-center"
                        onClick={() => {
                          if (count > 0) setCount(count - 1)
                        }}
                      >
                        -
                      </div>
                      <div className="bg-LightGrayishBlue p-4 mobile:text-center mobile:w-full">
                        {count}
                      </div>
                      <div
                        className="bg-LightGrayishBlue rounded-e-md p-4 text-OrangePrimary font-bold text-lg cursor-pointer mobile:w-full mobile:text-center mobile:mb-3"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        if (count === 0) {
                          setCount(0)
                          setCart([])
                        } else {
                          setCart([
                            {
                              itemName: item.product.name,
                              itemPrice: item.product.finalPrice,
                              itemPhoto: item.product.photos[0],
                              itemAmount: count
                            }
                          ])
                          setOpen(true)
                        }
                      }}
                      className="flex bg-OrangePrimary text-WhiteStyle cursor-pointer px-28 h-14 rounded-xl items-center 
                      justify-center desktop:ml-6 font-bold hover:opacity-70 
                      mobile:w-full 
                      mobile:p-0
                      "
                    >
                      <IconCart className="mr-3" fill="#fff" />
                      <span className="mobile:text-sm ">Add to cart</span>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}

export default Main
