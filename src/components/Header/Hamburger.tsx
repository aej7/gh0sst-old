import { useState, useContext } from 'react'
import { ContentVisibleContext } from '../../context/ContentVisibleContext.tsx'
import Navbar from './Navbar.tsx'

const Hamburger = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
	const { setIsContentVisible } = useContext(ContentVisibleContext)

	return (
		<div
			className='space-y-2 flex items-center flex-col p-5 mt-7 rounded-sm'
			onClick={() =>
				isHamburgerOpen ? setIsHamburgerOpen(false) : setIsHamburgerOpen(true)
			}
		>
			{isHamburgerOpen ? setIsContentVisible(false) : setIsContentVisible(true)}
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
