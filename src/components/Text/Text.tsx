const Text = ({ children }: React.PropsWithChildren) => {
  return (
    <p className='text-center tracking-widest lowercase text-sm md:text-base'>
      {children}
    </p>
  )
}

export default Text

