import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { MdOutlineExplore ,MdOutlineVideoLibrary, MdOutlineSubscriptions } from 'react-icons/md';

const ChatSmall = () => {
  return (
    <div className='w-20 h-[88.5vh] bg-slate-900 text-white'>

    <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'><AiFillHome size="24px"/></span>
        <span className='flex justify-center text-xs py-1'>Home</span>
    </div>
    <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'><MdOutlineExplore size="24px"/></span>
        <span className='flex justify-center text-xs py-1'>Explore</span>
    </div>

    <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'><BsCameraReels size="24px"/></span>
        <span className='flex justify-center text-xs py-1'>Shorts</span>
    </div>
    <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'><MdOutlineSubscriptions size="24px"/></span>
        <span className='flex justify-center text-xs py-1'>Subscriptions</span>
    </div>
    <div className='flex flex-col p-4 justify-center hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
        <span className='flex justify-center'><MdOutlineVideoLibrary size="24px"/></span>
        <span className='flex justify-center text-xs py-1'>Library</span>
    </div>
    </div>
  )
}

export default ChatSmall