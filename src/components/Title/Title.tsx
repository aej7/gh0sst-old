const Title = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className='text-md md:text-xl text-center tracking-widest lowercase drop-shadow-2xl'>
      {children}
    </h1>
  )
}

export default Title

