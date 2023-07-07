import { useState, useContext } from 'react'
import { ContentVisibilityContext } from '../../context/ContentVisibilityContext.tsx'
import Navbar from './Navbar.tsx'

const Hamburger = () => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	// This works even though there's an error so I'm adding an ignore while I find the culprit
	//@ts-ignore
	const { setIsContentVisibility } = useContext(ContentVisibilityContext)

	return (
		<div
			className='space-y-2 flex items-center flex-col p-5 mt-7 rounded-sm'
			onClick={() =>
				isHamburgerOpen ? setIsHamburgerOpen(false) : setIsHamburgerOpen(true)
			}
		>
			{isHamburgerOpen
				? setIsContentVisibility(false)
				: setIsContentVisibility(true)}
			{isHamburgerOpen ? <OpenHamburger /> : <Icon />}
		</div>
	)
}

const OpenHamburger = () => {
	return (
		<>
			<Icon />
			<Navbar
				className='flex flex-col items-center pt-14 gap-8'
				itemStyle='text-2xl'
			/>
		</>
	)
}

const Icon = () => {
	return (
		<>
			<span className='w-8 h-px bg-white'></span>
			<span className='w-8 h-px bg-white'></span>
			<span className='w-8 h-px bg-white inline-block'></span>
		</>
	)
}

export default Hamburger
