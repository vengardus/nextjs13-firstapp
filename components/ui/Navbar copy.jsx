import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
// import logo from './../../assets/img/logo-gardus.png'

export const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showSmallSubMenu, setShowSmallSubMenu] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 767 })

  const toggleDropdown = () => {
    setShowSubMenu(!showSubMenu)
  }

    return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 px-3'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        {/* <Link
          to='/'
        >
          <img
            src={logo}
            className='object-fill h-14 w-auto'
            alt='Logo-Gardus'
          />
        </Link> */}
      </div>
      <div className='block md:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white' onClick={() => setShowSmallSubMenu(!showSmallSubMenu)}>
          <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow md:flex md:items-center md:w-auto md:justify-end'>
        <div className={`text-sm md:flex-grow  ${showSmallSubMenu ? 'block' : 'hidden md:block'}`}>
          <Link
            to='/launches'
            className='block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4'
          >
            Launches
          </Link>
          <div className={`relative mt-4 md:inline-block md:mt-0 ${showSmallSubMenu ? 'block' : 'hidden md:block'}`}>
            <span className='block text-gray-200 hover:text-white mr-4 cursor-pointer' onClick={() => toggleDropdown(showSubMenu)}>
              Opción 2
            </span>
            {showSubMenu && (
              <div className={`${isMobile ? 'relative' : 'absolute'} right-0 top-full bg-gray-700 rounded-b-lg p-2`}>
                <Link to='/' className='block text-gray-200 hover:text-white mb-2'>Subopción 1</Link>
                <Link to='/' className='block text-gray-200 hover:text-white mb-2'>Subopción 2</Link>
                <Link to='/' className='block text-gray-200 hover:text-white'>Subopción 3</Link>
              </div>
            )}
          </div>
          <div className={`relative mt-4 md:inline-block md:mt-0 ${showSmallSubMenu ? 'block' : 'hidden md:block'}`}>
            <span className='block text-gray-200 hover:text-white mr-4 cursor-pointer' onClick={() => setShowSmallSubMenu(!showSmallSubMenu)}>
              Opción 3
            </span>

          </div>
        </div>
      </div>
    </nav>
  )
}
