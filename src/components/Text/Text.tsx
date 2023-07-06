const Text = ({ children }: React.PropsWithChildren) => {
	return (
		<p className='text-base text-center tracking-widest lowercase'>{children}</p>
	)
}

export default Text

