import React from 'react'
import video1 from '../img/FitBuddy.mkv'
import { AiOutlineLike, AiOutlineScissor } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { BiDislike, BiShare, BiDonateHeart, BiSave } from 'react-icons/bi';
import ShortVideos from './ShortVideos';
import VideoTags from './VideoTags';

const Video = () => {
    return (
        <div className='flex bg-black'>
        <div className='pl-12 mr-4 w-[70%]'>
            <video className=' pt-6 outline-none' src={video1} controls></video>
            <p className='text-blue-400 text-sm cursor-pointer'>DSA</p>
            <h3 className='text-white text-xl font-medium'>Lorem ipsum dolor sit amet.</h3>
            <div className='flex'>
                <p className='text-white text-md font-medium my-2'>1,000,000 views</p>
                <p className='text-white text-md font-medium m-2'>Date</p>
            </div>
            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magnam nihil molestiae quis eos inventore nisi ad rerum ut facilis, in excepturi! Libero distinctio omnis mollitia, quisquam aperiam placeat accusamus.</p>
            <div className='flex text-white m-2'>
                <div className='flex items-center mr-3'>
                    <AiOutlineLike size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>100K</span>
                </div>
                <div className='flex items-center mx-3'>
                    <BiDislike size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>Dislike</span>
                </div>
                <div className='flex items-center mx-3'>
                    <BiShare size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>Share</span>
                </div>
                <div className='flex items-center mx-3'>
                    <BiDonateHeart size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>Thanks</span>
                </div>                
                <div className='flex items-center mx-3'>
                    <AiOutlineScissor size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>Clip</span>
                </div>                
                <div className='flex items-center mx-3'>
                    <BiSave size="24" />
                    <span className='mx-2 font-semibold cursor-pointer'>Save</span>
                </div>
                <div className='flex items-center mx-3'>
                    <BsThreeDots size="24" />
                </div>
                
            </div>
        </div>
        <div className='w-[45%] m-4'>
            <VideoTags/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
            <ShortVideos/>
        </div>
        </div>
    )
}

export default Video