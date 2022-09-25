import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { MdOutlineExplore ,MdOutlineVideoLibrary, MdOutlineSubscriptions } from 'react-icons/md';
import SingleChatSmall from './SingleChatSmall';

const ChatSmall = () => {
  return (
    <div className='w-20 h-auto bg-slate-900 text-white'>

    <SingleChatSmall icon= <AiFillHome size="24px"/> title="Home"/>
    <SingleChatSmall icon= <MdOutlineExplore size="24px"/> title="Explore"/>
    <SingleChatSmall icon= <BsCameraReels size="24px"/> title="Shorts"/>
    <SingleChatSmall icon= <MdOutlineSubscriptions size="24px"/> title="Subscriptions"/>
    <SingleChatSmall icon= <MdOutlineVideoLibrary size="24px"/> title="Library"/>
    </div>
  )
}

export default ChatSmall