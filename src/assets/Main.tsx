import React from 'react'
import IconCart from './components/SVGs/IconCart'

type Product = {
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
  const [count, setCount] = React.useState(3)

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
    <main className="max-w-[70%] mx-auto my-20">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          {data.length > 0 &&
            data.map(item => {
              console.log(item.product.name)
              return (
                <div key={item.product.name}>
                  <div>
                    <img
                      className="w-[70%] h-[70%] m-auto rounded-2xl hover:opacity-50 cursor-pointer"
                      src={src ? src : item.product.photos[0]}
                      alt={`${item.product.name} photo`}
                    />
                    <div className="grid w-[70%] grid-cols-4 grid-rows-1 items-center justify-center mx-auto gap-5  ">
                      {item.product.photos.map(item => {
                        return (
                          <img
                            onClick={() => setSrc(item)}
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
        <div className="flex-1 h-[26rem]">
          {data.length > 0 &&
            data.map(item => {
              return (
                <div
                  key={item.product.name}
                  className=" flex flex-col justify-around h-full "
                >
                  <h4 className="text-OrangePrimary tracking-widest font-bold text-sm">
                    {item.product.brand}
                  </h4>
                  <h1 className="font-bold text-6xl">{item.product.name}</h1>
                  <p className="text-DarkGrayishBlue w-[80%] leading-8 ">
                    {item.product.description}
                  </p>
                  <div className="flex items-center">
                    <h2 className="font-bold mr-5 text-3xl">
                      ${item.product.finalPrice}
                    </h2>
                    <div className="bg-PaleOrange text-OrangePrimary rounded-md h-6 px-2 font-bold text-sm flex items-center">
                      {item.product.discount}
                    </div>
                  </div>
                  <div className=" text-GrayishBlue font-bold line-through -mt-3">
                    ${item.product.price}.00
                  </div>
                  <div className="flex mt-4 items-center">
                    <div className="flex">
                      <div
                        className="bg-LightGrayishBlue rounded-s-md p-4 text-OrangePrimary font-bold text-lg cursor-pointer"
                        onClick={() => {
                          if (count > 0) setCount(count - 1)
                        }}
                      >
                        -
                      </div>
                      <div className="bg-LightGrayishBlue p-4">{count}</div>
                      <div
                        className="bg-LightGrayishBlue rounded-e-md p-4 text-OrangePrimary font-bold text-lg cursor-pointer"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </div>
                    </div>
                    <div className="flex bg-OrangePrimary text-WhiteStyle cursor-pointer px-28 h-14 rounded-xl items-center ml-6 font-bold hover:opacity-70">
                      <IconCart className={'mr-3'} fill="#fff" />
                      <span>Add to cart</span>
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
