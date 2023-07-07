import Navbar from './Navbar.tsx'
import Hamburger from './Hamburger.tsx'
import { useEffect, useState } from 'react'

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const breakpoint = 620

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)

		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return width > breakpoint ? <DesktopNav /> : <MobileNav />
}

const DesktopNav = () => {
	return (
		<header>
			<nav>
				<Navbar className='flex flex-row justify-evenly' />
			</nav>
		</header>
	)
}

const MobileNav = () => {
	return (
		<header>
			<nav>
				<Hamburger />
			</nav>
		</header>
	)
}

export default Header
