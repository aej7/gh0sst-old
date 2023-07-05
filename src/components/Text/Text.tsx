import React from 'react'

const Text = ({ children }) => {
  return (
    <p className='text-center tracking-widest lowercase text-sm md:text-base'>
      {children}
    </p>
  )
}

export default Text
