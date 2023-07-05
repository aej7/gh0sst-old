import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav>
      <ul className='md:flex flex-row justify-evenly hidden' role='navigation'>
        <li>
          <NavbarItem item='HOME' route='/' />
        </li>
        <li>
          <NavbarItem item='PROJECTS' route='/projects' />
        </li>
        <li>
          <NavbarItem item='ABOUT' route='/about' />
        </li>
        <li>
          <NavbarItem item='CONTACT' route='/contact' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
