import React from 'react'
import '../index.css'
import { AiFillHome, AiFillYoutube, AiOutlineBulb, AiOutlineTrophy, AiOutlineSetting } from 'react-icons/ai';
import { BsCameraReels, BsBroadcast, BsFlag } from 'react-icons/bs';
import { BiLike, BiSlideshow } from 'react-icons/bi';
import { TbHanger } from 'react-icons/tb';
import { SiYoutubegaming, SiYoutubestudio, SiYoutubemusic } from 'react-icons/si';
import { IoReorderThreeOutline, IoAddCircleOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { RiVideoLine } from 'react-icons/ri';
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineSubscriptions, MdOutlineHistory, MdOutlineWatchLater, MdOutlineLocalMovies, MdOutlineChildCare, MdOutlineFeedback } from 'react-icons/md';

export default function Modal({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (

        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 flex justify-center overflow-auto items-center'>
            <div className='w-[16rem] pt-4 bg-slate-900 fixed inset-0 overflow-auto text-white z-20 '>
                <div className=' '>
                    <div className='flex px-6 pb-4 items-center '>
                        <span className='cursor-pointer'><IoReorderThreeOutline size="40px" /></span>
                        <div className='flex cursor-pointer items-center mx-4'>
                            <AiFillYoutube size="36px" />
                            <p className='text-xl font-bold'>YouTube</p>
                        </div>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><AiFillHome size="24px" /></span>
                        <span className='flex py-1 px-2'>Home</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineExplore size="24px" /></span>
                        <span className='flex py-1 px-2'>Explore</span>
                    </div>

                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><BsCameraReels size="24px" /></span>
                        <span className='flex py-1 px-2'>Shorts</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineSubscriptions size="24px" /></span>
                        <span className='flex py-1 px-2'>Subscriptions</span>
                    </div>
                    <div className='border-b my-4 border-gray-600'></div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineVideoLibrary size="24px" /></span>
                        <span className='flex py-1 px-2'>Library</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineHistory size="24px" /></span>
                        <span className='flex py-1 px-2'>History</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><RiVideoLine size="24px" /></span>
                        <span className='flex py-1 px-2'>Your videos</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineWatchLater size="24px" /></span>
                        <span className='flex py-1 px-2'>Watch later</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><BiLike size="24px" /></span>
                        <span className='flex py-1 px-2'>Liked videos</span>
                    </div>
                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>SUBSCRIPTIONS</p>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><IoAddCircleOutline size="24px" /></span>
                        <span className='flex py-1 px-2'>Browse channels</span>
                    </div>
                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>EXPLORE</p>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineLocalMovies size="24px" /></span>
                        <span className='flex py-1 px-2'>Movies</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><SiYoutubegaming size="24px" /></span>
                        <span className='flex py-1 px-2'>Gaming</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><BsBroadcast size="24px" /></span>
                        <span className='flex py-1 px-2'>Live</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><TbHanger size="24px" /></span>
                        <span className='flex py-1 px-2'>Fashion & Beauty</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><AiOutlineBulb size="24px" /></span>
                        <span className='flex py-1 px-2'>Learning</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><AiOutlineTrophy size="24px" /></span>
                        <span className='flex py-1 px-2'>Sports</span>
                    </div>
                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='mx-8 my-2 font-medium text-sm text-gray-400'>MORE FROM YOUTUBE</p>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineLocalMovies size="24px" /></span>
                        <span className='flex py-1 px-2'>YouTube Premium</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><SiYoutubestudio size="24px" /></span>
                        <span className='flex py-1 px-2'>Creator Studio</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><SiYoutubemusic size="24px" /></span>
                        <span className='flex py-1 px-2'>YouTube Music</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineChildCare size="24px" /></span>
                        <span className='flex py-1 px-2'>YouTube Kids</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><BiSlideshow size="24px" /></span>
                        <span className='flex py-1 px-2'>YouTube TV</span>
                    </div>

                    <div className='border-b my-4 border-gray-600'></div>

                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><AiOutlineSetting size="24px" /></span>
                        <span className='flex py-1 px-2'>Settings</span>
                    </div>
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><BsFlag size="24px" /></span>
                        <span className='flex py-1 px-2'>Report history</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><IoHelpCircleOutline size="24px" /></span>
                        <span className='flex py-1 px-2'>Help</span>
                    </div>                    
                    <div className='flex items-center px-4 py-1.5 hover:bg-gray-700 cursor-pointer active:bg-gray-700'>
                        <span className='flex px-4'><MdOutlineFeedback size="24px" /></span>
                        <span className='flex py-1 px-2'>Send feedback</span>
                    </div>
                    <div className='border-b my-4 border-gray-600'></div>
                    <p className='text-sm text-gray-500 mx-6 my-4'>&copy; 2022 Google LLC </p>
                </div>
            </div>
        </div>
    )
}
