import { useState } from 'react'
import Navbar from './Navbar.tsx'

const Hamburger = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	return (
		<div
			className='space-y-2 flex items-center flex-col p-5 mt-7 rounded-sm'
			onClick={() =>
				isHamburgerOpen === false
					? setIsHamburgerOpen(true)
					: setIsHamburgerOpen(false)
			}
		>
			{isHamburgerOpen ? <OpenHamburger /> : <Icon />}
		</div>
	)
}

const OpenHamburger = () => {
	return (
		<>
			<Icon />
			<Navbar className='flex flex-col items-center gap-6 absolute m-auto' />
		</>
	)
}

const Icon = () => {
	return (
		<>
			<span className='w-8 h-px bg-white'></span>
			<span className='w-8 h-px bg-white'></span>
			<span className='w-8 h-px bg-white'></span>
		</>
	)
}

export default Hamburger
