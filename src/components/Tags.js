import React from 'react'
import SingleTag from './SingleTag'

const Tags = () => {
  return (
    <>
    <div className='bg-slate-900 h-[3.5rem] border-y w-full px-[2rem] flex items-center border-gray-600 text-white'>
        <SingleTag title="All"/>
        <SingleTag title="JavaScript"/>
        <SingleTag title="Laptops"/>
        <SingleTag title="Live news"/>
        <SingleTag title="Data Structures"/>
        <SingleTag title="Music"/>
        <SingleTag title="Watched"/>
        <SingleTag title="Comedy"/>
        <SingleTag title="New to you"/>
        <SingleTag title="Recently uploaded"/>
    </div>
    </>
  )
}

export default Tags