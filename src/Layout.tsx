import Header from './components/Header/Header.tsx'
import Content from './components/Content/Content.tsx'
import { useState } from 'react'
import { ContentVisibilityContext } from './context/ContentVisibilityContext.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	const [isContentVisibility, setIsContentVisibility] = useState(true)

	return (
		<main
			className='w-screen h-screen bg-image grayscale bg-cover overflow-auto flex flex-col gap-14
      md:gap-16 lg:gap-24 xl:gap-36 font-montserrat font-light antialiased text-white'
		>
			<ContentVisibilityContext.Provider
				value={{ isContentVisibility, setIsContentVisibility }}
			>
				<Header />
				<Content>{isContentVisibility && <Outlet />}</Content>
			</ContentVisibilityContext.Provider>
		</main>
	)
}

export default Layout
