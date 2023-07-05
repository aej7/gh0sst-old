import { NavLink } from 'react-router-dom'

type props = {
  route: string
  item: string
}

const NavbarItem = ({ route, item }: props) => {
  return (
    <NavLink to={route}>
      <button
        className='py-10 font-light tracking-wider sm:tracking-widest italic text-md
        md:text-xl hover:underline hover:decoration-from-font hover:underline-offset-4'
        role='navigation'
      >
        <h2>{item}</h2>
      </button>
    </NavLink>
  )
}

export default NavbarItem

