import Image from 'next/image'
import Link from 'next/link'

export const LaunchesItem = ({ launch }) => {
  return (
    <div className='flex items-center hover:bg-gray-700'>
      <div className='w-1/12 text-center hidden md:block'>{launch.flight_number}</div>
      <div className='w-3/12'>{launch.mission_name}</div>
      <div className='w-3/12 md:w-2/12'>{launch.launch_year}</div>
      <div className='w-2/12'>{launch.rocket.rocket_name}</div>
      <div className='w-2/12 flex justify-center'>
        <Image
          src={launch.links.mission_patch_small}
          alt={'img'}
          width={70}
          height={70}
          priority={true}
          className='round-50'
        />
      </div>
      <div className='w-2/12 text-center hover:text-orange-500'>
        <Link href={`/spacex/${launch.flight_number}`}>Ver detalle</Link>
      </div>
    </div>
  )
}
