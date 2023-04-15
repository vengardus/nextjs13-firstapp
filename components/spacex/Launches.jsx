"use client"
import { LaunchesList } from "./LaunchesList"
import { urlLaunches } from "./data"
import { useGetFetch } from "@/hooks/useFetch"

export const Launches =  () => {
  const [launches, loading, error, status] = useGetFetch(urlLaunches.all)
  
  return (
    <section className='flex flex-col space-y-3 p-4'>
      <h1 className='text-3xl font-bold'>Launches</h1>
      {
        error
        ? <div className="p-4">Ocurrió un error: {error}</div>
        :loading
        ? <div>Loading...</div>
        :<LaunchesList launches={ launches } />
      }
    </section>
  )
}

