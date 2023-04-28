"use client"
import { LaunchesList } from "./LaunchesList"
import { urlLaunches } from "./data"
import { useGetFetch } from "@/hooks/useFetch"

export const Launches =  () => {
  const [launches, isLoading, msgError, status] = useGetFetch({
    url: urlLaunches.all
  })
  
  return (
    <section className='flex flex-col space-y-3 p-4'>
      <h1 className='text-3xl font-bold'>Launches</h1>
      {
        msgError
        ? <div className="p-4">Ocurrió un error: { msgError }</div>
        :isLoading
        ? <div>Loading...</div>
        :<LaunchesList launches={ launches } />
      }
    </section>
  )
}

