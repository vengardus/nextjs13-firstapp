import Image from "next/image"

const CURRENCIES = {
  pen: {
    code: 'PEN',
    symbol: 'S/.'
  },
  usd: {
    code: 'USD',
    symbol: 'US$'
  }
}
export const ProductsItem = ({ product }) => {
  const currencySymbol = (product.attributes.currency == CURRENCIES.pen.code) ? 'S/.' : 'US$'

  return (
    <div className="flex flex-col w-1/2 md:w-4/12 lg:w-3/12  justify-center items-center">
      <div className="w-full h-[16rem]  rounded-2xl bg-gray-100 border-2">
        <Image
          className='h-full max-h-[25rem] object-fixed p-1.5'
          alt={ product.attributes.name }
          // src={product.attributes.image.data.attributes.url}
          src={ product.attributes.image_url }
          width={ 450 }
          height={ 450 }
        />
      </div>

      <div className="text-2sm font-bold uppercase">
        {product.attributes.name}
      </div>

      {/* <div className="text-xl text-center">
        {product.attributes.description}
      </div> */}

      {
        <div className="flex space-x-3 text-xl font-bold">
          <span>{currencySymbol}</span>
          <span>{product.attributes.price}</span>
        </div>
      }
    </div>
  )
}
