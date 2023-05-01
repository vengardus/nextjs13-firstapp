import { ProductsList } from "./ProductsList"

export const CategoriesItem = ({ category }) => {
  const products = category.attributes.products.data

  console.log(products.length)

  return (
    <div>
      <div className="text-orange-600 text-[34px] pl-[0.3em] font-[100] font-serif pb-4">
        {category.attributes.name}
      </div>
      {
        (!products.length)
          ? <div className="pl-4">No hay productos disponibles</div>
          : <ProductsList products={products} />
      }
    </div>
  )
}
