import Navbar from './components/Header/Navbar.tsx'
import Content from './components/Content/Content.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div
      className='w-screen h-screen bg-skulls dark:grayscale bg-cover overflow-auto flex flex-col gap-1
    sm:gap-4 md:gap-16 lg:gap-24 xl:gap-36 font-montserrat font-light antialiased text-slate-100'
      role='body'
    >
      <header>
        <Navbar />
      </header>
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default Layout

