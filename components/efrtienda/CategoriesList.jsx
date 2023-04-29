'use client'
import { useGetFetch } from "@/hooks/useFetch"
import { ProductsItem } from "./ProductsItem"
import { URL_CATEGORIES } from "./data"
import { CategoriesItem } from "./CategoriesItem"

export const CategoriesList = () => {
  const [data, isLoading, msgError] = useGetFetch({
    url: URL_CATEGORIES,
  })

  if (isLoading) return <div>Loading...</div>
  if (msgError) return <div>Ocurrió un error: {msgError}</div>

  const categories = data.data
  console.log(categories)

  return (
    <div className="flex flex-col w-full p-0 space-y-7 pt-14">
      {
        categories.map(category => (
          <CategoriesItem
            key={ category.id } 
            category={ category } 
          />
        ))
      }
    </div>
  )
}
