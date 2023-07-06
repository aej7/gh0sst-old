import { NavLink } from 'react-router-dom'

type props = {
	route: string
	item: string
}

const NavbarItem = ({ route, item }: props) => {
	return (
		<NavLink to={route}>
			<button
				className='py-5 mt-7 text-xl font-light uppercase tracking-widest italic hover:underline hover:decoration-from-font hover:underline-offset-4'
				aria-label={item}
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
				<NavbarItem item='Home' route='/' />
			</li>
			<li>
				<NavbarItem item='Projects' route='/projects' />
			</li>
			<li>
				<NavbarItem item='About' route='/about' />
			</li>
			<li>
				<NavbarItem item='Contact' route='/contact' />
			</li>
		</ul>
	)
}

export default Navbar

