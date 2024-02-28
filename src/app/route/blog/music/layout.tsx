import React from 'react'

const BlogMusicLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-pink-400'>{children}</div>
  )
}

export default BlogMusicLayout