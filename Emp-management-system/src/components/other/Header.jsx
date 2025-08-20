import React from 'react'

export default function Header({data}) {
  return (
    <div className='flex items-center justify-between py-10'>
        <p className='text-3xl'>Hi, <span className='text-red-600'>{data.firstName}</span></p>
        <button className=' border border-white px-2 py-1 cursor-pointer'>Log Out</button>
    </div>
  )
}
