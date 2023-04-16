import { LaunchesItem } from "./LaunchesItem"

export const LaunchesList = ({ launches }) => {
  return (
    <>
      {/* header */}
      <div className='flex items-center bg-gray-800 text-gray-200 pt-2'>
        <div className='w-1/12 text-center hidden  md:block'># vuelo</div>
        <div className='w-3/12 whitespace-pre-wrap '>Nombre misión</div>
        <div className='w-3/12 md:w-2/12'>Año lanzamiento</div>
        <div className='w-2/12'>Nombre Cohete</div>
        <div className='w-2/12 flex justify-center'>Logo</div>
        <div className='w-2/12 text-center'></div>
      </div>
      {/* Items */}
      <div className="flex flex-col space-y-7">
        { 
          launches.map((launch) => (
            <LaunchesItem key={ launch.flight_number } launch={ launch } />
          ))
        }
      </div>
    </>
  )
}
