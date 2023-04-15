import Link from "next/link"

const menuOptions = [
  {
    name: 'home',
    title: 'Home',
    href: '/'
  },
  {
    name: 'spacex',
    title: 'SpaceX',
    href: '/spacex'
  },
  {
    name: 'about',
    title: 'About',
    href: '/about'
  }
]

const Navbar = () => {
  const menuItems = menuOptions.map((option) =>
    <div key={ option.name } className='pr-4'>
        <Link href={option.href}>
          { option.title }
        </Link>
    </div>
  )

  return (
    <>
     <div className='flex'>
       { menuItems }
    </div>
    </>
  )
}

export default Navbar