import Image from 'next/image'
import Link from 'next/link'

export const LaunchDetail = ({ launch }) => {
  return (
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
      </div>
      <div className='w-2/12 text-center hover:text-orange-500'>
        <Link href='/'>ver detalle</Link>
      </div>
    </div>
  )
}
