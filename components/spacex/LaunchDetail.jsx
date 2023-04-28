"use client"
import Image from "next/image"
import Link from "next/link"
import ReactPlayer from "react-player"
import { useHasWindow } from "@/hooks/useHasWindow"
import { getUrlOne } from "./data"
import { useGetFetch } from "@/hooks/useFetch"

export const LaunchDetail = ({ id }) => {
  const url = getUrlOne(id)
  const [launch, isLoading, msgError, status] = useGetFetch({ url })
  const hasWindow = useHasWindow()

  if ( isLoading ) return <div className="p-4">isLoading...</div>
  if ( msgError ) return <div className="p-4">Ocurrió un error: { msgError }</div>

  return (
    <section className="flex flex-col m-4 space-y-3">
      {/* logo y titulo */}
      <div className="flex flex-row space-x-7 items-center">
        <div className="w-1/12 h-32 flex items-center">
          <Image
            className=''
            alt={ 'img' }
            height={ 150 }
            priority={ false }
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            src={ launch.links.mission_patch }
            width={150}
          />
        </div>
        <div className="w-11/12 text-gray-300 text-6xl font-bold flex items-center">
          { launch.mission_name.toUpperCase() }
        </div>
      </div>

      {/* datos y video */}
      <div className="flex flex-col space-y-3 md:flex-row-reverse md:space-y-0 pl-4">
        {/* datos */}
        <div className="w-full md:w-1/2 space-y-3 text-lg pl-7 pt-4">
          <div className="flex flex-row ">
            <div className='w-2/5'>Flight number:</div>
            <div className="w-3/5">{ launch.flight_number }</div>
          </div>
          <div className="flex">
            <div className='w-2/5'>Nombre Misión:</div>
            <div className='w-3/5'>{ launch.mission_name }</div>
          </div>
          <div className="flex">
            <div className='w-2/5'>Año lanzamiento:</div>
            <div className='w-3/5'>{ launch.launch_year }</div>
          </div>
          <div className="flex">
            <div className='w-2/5'>Nombre cohete:</div>
            <div className='w-3/5'>{ launch.rocket.rocket_name }</div>
          </div>
        </div>

        {/* video */}
        <div className="w-full md:w-1/2 relative h-[25rem]">
          {
            !hasWindow
              ? <div className="h-full bg-gray-300">isLoading...</div>
              :
              <ReactPlayer
                className="absolute inset-0"
                controls
                hight={'100%'}
                playing={false}
                url={launch.links.video_link}
                volume={0.5}
                width={'100%'}
              />
          }
        </div>
      </div>
      {/* button regresar */}
      <div className='text-center'>
        <Link href={`/spacex`}>
          <button className="border-2 px-8 py-4 text-gray-300 hover:bg-gray-300 hover:text-black">
            Regresar
          </button>
        </Link>
      </div>
    </section>
  )
}
