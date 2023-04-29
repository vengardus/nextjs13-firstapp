'use client'
import { useGetFetch } from "@/hooks/useFetch"
import { ProductsItem } from "./ProductsItem"

const URL_PRODUCTS = 'https://strapi-demo-cq3k.onrender.com/api/products?populate=*'

export const ProductsList = () => {
  const [data, isLoading, msgError] = useGetFetch({
    url: URL_PRODUCTS,
  })

  if (isLoading) return <div>Loading...</div>
  if (msgError) return <div>Ocurrió un error: {msgError}</div>

  const products = data.data
  console.log(products)

  return (
    <div className="flex flex-wrap w-full p-5 justify-normal ">
      {
        products.map(product => (
          <ProductsItem 
            key={ product.id } 
            product={ product } 
          />
        ))
      }
    </div>
  )
}
