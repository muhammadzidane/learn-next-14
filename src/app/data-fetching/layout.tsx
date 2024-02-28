import React from 'react'

const DataFetchingLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className='p-8'>
    <div className="mb-6 font-bold text-[18px]">Data Fetching</div>
    {children}
  </div>
)

export default DataFetchingLayout