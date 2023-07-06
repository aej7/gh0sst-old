import { NavLink } from 'react-router-dom'

type props = {
	route: string
	item: string
}

const NavbarItem = ({ route, item }: props) => {
	return (
		<NavLink to={route}>
			<button
				className='py-5 mt-7 font-light tracking-wider sm:tracking-widest italic text-md
        md:text-xl hover:underline hover:decoration-from-font hover:underline-offset-4'
				role='navigation'
			>
				<h2>{item}</h2>
			</button>
		</NavLink>
	)
}

const Navbar = () => {
	return (
		<ul className='flex flex-row justify-evenly' role='navigation'>
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
	)
}

export default Navbar

