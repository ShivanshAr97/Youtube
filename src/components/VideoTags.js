import React from 'react'
import VideoSingleTag from './VideoSingleTag'

const Tags = () => {
  return (
    <>
    <div className='h-[4.5rem] flex items-center text-white'>
        <VideoSingleTag title="All"/>
        <VideoSingleTag title="Algorithm"/>
        <VideoSingleTag title="Listenable"/>
        <VideoSingleTag title="Relatable"/>
    </div>
    </>
  )
}

export default Tags