import { NavLink } from 'react-router-dom'

type props = {
	route: string
	item: string
	itemStyle: string
}

type props2 = {
	itemStyle: string
	className?: string
}

const NavbarItem = ({ route, item, itemStyle }: props) => {
	return (
		<NavLink to={route}>
			<button aria-label={item} className={itemStyle}>
				<h2>{item}</h2>
			</button>
		</NavLink>
	)
}

const Navbar = ({ className, itemStyle }: props2) => {
	return (
		<ul className={className} role='navigation'>
			<li>
				<NavbarItem item='Home' route='/' itemStyle={itemStyle} />
			</li>
			<li>
				<NavbarItem item='Projects' route='/projects' itemStyle={itemStyle} />
			</li>
			<li>
				<NavbarItem item='About' route='/about' itemStyle={itemStyle} />
			</li>
			<li>
				<NavbarItem item='Contact' route='/contact' itemStyle={itemStyle} />
			</li>
		</ul>
	)
}

export default Navbar
