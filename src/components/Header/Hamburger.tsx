import { useState } from 'react'

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
			<Icon />
		</div>
	)
}

const Icon = () => {
	return (
		<>
			<span className='w-8 h-px bg-neutral-300'></span>
			<span className='w-8 h-px bg-neutral-300'></span>
			<span className='w-8 h-px bg-neutral-300'></span>
		</>
	)
}

const Menu = () => {
	;<ul>
		<li></li>
	</ul>
}

export default Hamburger

