import Navbar from './Navbar.tsx'
import Hamburger from './Hamburger.tsx'
import { useEffect, useState, useContext } from 'react'
import { ContentVisibilityContext } from '../../context/ContentVisibilityContext.tsx'

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth)

	// This works even though there's an error so I'm adding an ignore while I find the culprit
	//@ts-ignore
	const { setIsContentVisibility } = useContext(ContentVisibilityContext)
	const breakpoint = 620

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowResize)

		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	if (width > breakpoint) {
		setIsContentVisibility(true)
		return <DesktopNav />
	} else {
		setIsContentVisibility(false)
		return <MobileNav />
	}
}

const DesktopNav = () => {
	return (
		<header>
			<nav>
				<Navbar
					className='flex flex-row justify-evenly mt-7'
					itemStyle='py-5 text-xl lg:text-2xl font-light uppercase tracking-widest italic hover:underline hover:decoration-from-font hover:underline-offset-4'
				/>
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
