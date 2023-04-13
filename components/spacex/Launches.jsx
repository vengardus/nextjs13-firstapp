import Image from 'next/image'
import Link from 'next/link'

const getFetch = async (url) => {
  const resp = await fetch(url)
  const data = await resp.json()
  return data

}

const urlLaunches = {
  all: 'https://api.spacexdata.com/v3/launches?limit=3',
  one: 'https://api.spacexdata.com/v3/launches/'
}

const Launches = async () => {
  const launches = await getFetch(urlLaunches.all)
  console.log(launches)
  return (
    <section className='flex flex-col space-y-3 p-4'>
      <h1 className='text-3xl font-bold'>Launches</h1>

      <div className='flex items-center bg-gray-700 text-gray-200 py-2'>
        <div className='w-1/12 text-center'># vuelo</div>
        <div className='w-3/12'>Nombre misión</div>
        <div className='w-2/12'>Año lanzamiento</div>
        <div className='w-2/12'>Nombre Cohete</div>
        <div className='w-2/12 flex justify-center'>Imagen</div>
        <div className='w-2/12 text-center'></div>
      </div>

      {
        launches.map((launch) => (
          <div key={launch.flight_number} className='flex items-center'>
            <div className='w-1/12 text-center'>{launch.flight_number}</div>
            <div className='w-3/12'>{launch.mission_name}</div>
            <div className='w-2/12'>{launch.launch_year}</div>
            <div className='w-2/12'>{launch.rocket.rocket_name}</div>
            <div className='w-2/12 flex justify-center'>
              <Image
                src={launch.links.mission_patch_small}
                alt={'img'}
                width={70}
                height={70}
                className=''
              />
              {/* <div className='text-black bg-white ws-full'>Hola</div> */}
            </div>
            <div className='w-2/12 text-center hover:text-orange-500'>
              <Link href='/'>ver detalle</Link>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Launches