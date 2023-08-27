import React from 'react'

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
        <div className="flex-1"></div>
      </div>
    </main>
  )
}

export default Main
