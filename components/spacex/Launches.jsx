import { LaunchesList } from "./LaunchesList"
import { urlLaunches } from "./data"
import { getFetch } from "@/mylib/fetch"


export const Launches = async () => {
  const launches = await getFetch(urlLaunches.all)
  
  return (
    <section className='flex flex-col space-y-3 p-4'>
      <h1 className='text-3xl font-bold'>Launches</h1>
      <LaunchesList launches={ launches} />
    </section>
  )
}

