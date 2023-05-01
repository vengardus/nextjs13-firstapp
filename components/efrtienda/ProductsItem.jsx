import React from 'react';
import Link from 'next/link';
import Image from "next/image"
import { CURRENCIES, whatsappData } from "./data"

function replaceLabels(value, strLabel, htmlLabel) {
  const firstOccurrence = value.replace(strLabel, `<${htmlLabel}>`);
  const secondOccurrence = firstOccurrence.replace(strLabel, `</${htmlLabel}>`);

  // Utilizamos React.createElement para crear un elemento React con las etiquetas HTML
  return React.createElement('span', { dangerouslySetInnerHTML: { __html: secondOccurrence } });
}



export const ProductsItem = ({ product }) => {
  const currencySymbol = (product.attributes.currency == CURRENCIES.pen.code) ? 'S/.' : 'US$'
  const whatsappMsg = `${whatsappData.msg}Estoy interesado en el modelo ${product.attributes.model}`
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappData.phone}&text='${whatsappMsg}'`

  return (
    <div className="flex flex-col w-12/12 md:w-4/12 lg:w-3/12  justify-center items-center">
      <div className="w-[60%] md:w-full h-[16rem]  rounded-2xl bg-gray-100 border-2">
        <Image
          className='h-full max-h-[25rem] object-fixed p-1.5'
          alt={product.attributes.name}
          // src={product.attributes.image.data.attributes.url}
          src={product.attributes.image_url}
          width={450}
          height={450}
        />
      </div>

      <div className="text-[15px] font-bold uppercase text-center">
        {product.attributes.name}
      </div>

      <div className="text-[17px] font-bold uppercase text-center">
        {product.attributes.model}
      </div>

      {/* <div className="text-xl text-center">
        {replaceLabels(product.attributes.description, "**", "strong")}
      </div> */}

      {
        <div className="flex space-x-3 text-[1.17em] font-bold">
          <span>{currencySymbol}</span>
          <span>{product.attributes.price.toFixed(2)}</span>
        </div>
      }

      <Link
        // itemprop="url" 
        className="flex box-border border-2 p-[10px] font-[15px] text-green-600 font-opensans shadow-gray-700 shadow-sm items-center space-x-2"
        href={whatsappUrl}
        target="_blank"
      >
        <Image
          alt="wsp"
          className="bg-green-200 w-[24px] h-[24px]"
          height={20}
          src={'/assets/img/ui/whatsapp.svg'}
          width={20}
        />
        <span className="">LO QUIERO</span>
      </Link>

    </div>
  )
}
