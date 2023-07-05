import React, { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex flex-col grow'>
      <article
        className='max-w-6xl mx-8 flex flex-col gap-6 self-center'
        aria-label='This article contains content of the page you are on'
      >
        {children}
      </article>
    </section>
  )
}

export default Content
