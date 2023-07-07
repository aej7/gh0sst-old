import Header from './components/Header/Header.tsx'
import Content from './components/Content/Content.tsx'
import { useState } from 'react'
import { ContentVisibleContext } from './context/ContentVisibleContext.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	const [isContentVisible, setIsContentVisible] = useState(true)

	return (
		<main
			className='w-screen h-screen bg-image grayscale bg-cover overflow-auto flex flex-col gap-14
      md:gap-16 lg:gap-24 xl:gap-36 font-montserrat font-light antialiased text-white'
		>
			<ContentVisibleContext.Provider
				value={{ isContentVisible, setIsContentVisible }}
			>
				<Header />
				<Content>{isContentVisible ? <Outlet /> : <></>}</Content>
			</ContentVisibleContext.Provider>
		</main>
	)
}

export default Layout
