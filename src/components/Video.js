import React from 'react'
import video1 from '../img/FitBuddy.mkv'
import ShortVideos from './ShortVideos';
import VideoTags from './VideoTags';
import Desc from './Desc';
import Comments from './Comments';

const Video = () => {
    return (
        <div className='flex bg-black'>
        <div className='pl-12 mr-4 w-[70%]'>
            <video className=' pt-6 outline-none' src={video1} controls></video>
            <Desc/>
            <Comments/>
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