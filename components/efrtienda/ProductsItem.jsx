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

      <div className="text-[15px] font-bold uppercase text-center">
        {product.attributes.name}
      </div>

      {/* <div className="text-xl text-center">
        {product.attributes.description}
      </div> */}

      {
        <div className="flex space-x-3 text-[1.17em] font-bold">
          <span>{currencySymbol}</span>
          <span>{product.attributes.price.toFixed(2)}</span>
        </div>
      }

      <div className="flex box-border border-2 p-[10px] font-[15px] text-green-600 font-opensans shadow-gray-700 shadow-sm items-center space-x-2">
        <Image 
          alt="wsp"
          className="bg-green-200"
          height={20}          
          src={'/assets/img/ui/whatsapp.svg'}
          width={20}
        />
        <span className="">LO QUIERO</span>
      </div>
    </div>
  )
}
