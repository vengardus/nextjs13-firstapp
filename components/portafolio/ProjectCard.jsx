import Link from "next/link"
import Image from "next/image"

export const ProjectCard = ({ project }) => {
  return (
    <Link
      href={project.href}
    >
      <div className='max-w-sm bg-gray-800 rounded-lg overflow-auto 
          shadow-lg my-4 hover:bg-gray-300 h-[40rem]
          text-gray-200 hover:text-gray-800
          '>
        <div className="w-full h-[25rem] bg-red-500 ">
          <Image 
              className='h-full max-h-[28rem] object-fixed'
              src={`/assets/img/projects/${project.image}`} 
              alt={project.title} 
              quality={100}
              width={450}
              height={450}
          />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 '>{project.title}</div>
          <p className='text-base 1h-[7rem]'>{project.description}</p>
          <p className='text-base italic mt-2 1h-[4rem]'>{project.detail}</p>
        </div>
      </div>
    </Link>
  )
}