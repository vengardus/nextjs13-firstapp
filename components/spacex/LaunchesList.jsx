import { LaunchDetail } from "./LaunchDetail"

export const LaunchesList = ({ launches }) => {
  return (
    <>
      {/* header */}
      <div className='flex items-center bg-gray-700 text-gray-200 py-2'>
        <div className='w-1/12 text-center'># vuelo</div>
        <div className='w-3/12'>Nombre misión</div>
        <div className='w-2/12'>Año lanzamiento</div>
        <div className='w-2/12'>Nombre Cohete</div>
        <div className='w-2/12 flex justify-center'>Logo</div>
        <div className='w-2/12 text-center'></div>
      </div>
      {/* Items */}
      {
        launches.map((launch) => (
          <LaunchDetail key={ launch.flight_number } launch={ launch } />
        ))
      }
      
    </>
  )
}

// export default LaunchesList