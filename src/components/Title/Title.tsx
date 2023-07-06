const Title = ({ children }: React.PropsWithChildren) => {
	return (
		<h1 className='text-xl text-center tracking-widest lowercase'>{children}</h1>
	)
}

export default Title

