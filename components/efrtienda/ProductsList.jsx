import { ProductsItem } from "./ProductsItem"

export const ProductsList = ({ products }) => {
  return (
    <div className="flex flex-wrap w-full p-5 justify-normal ">
      {
        products.map(product => (
          <ProductsItem
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}
