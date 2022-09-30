import React from 'react'
import { AiOutlineLike, AiOutlineScissor } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { BiDislike, BiShare, BiDonateHeart, BiSave } from 'react-icons/bi';
import DescButtons from './DescButtons';
import Channel from './Channel';

const Desc = () => {
    return (

    <div className='bg-black'>
            <p className='text-blue-400 text-sm cursor-pointer'>DSA</p>
            <h3 className='text-white text-xl font-medium'>Lorem ipsum dolor sit amet.</h3>
            <div className='flex'>
                <p className='text-white text-md font-medium my-2'>1,000,000 views</p>
                <p className='text-white text-md font-medium m-2'>Date</p>
            </div>
            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magnam nihil molestiae quis eos inventore nisi ad rerum ut facilis, in excepturi! Libero distinctio omnis mollitia, quisquam aperiam placeat accusamus.</p>
            <div className='flex text-white my-4'>
                <DescButtons icon= <AiOutlineLike size="24px"/> title="100K"/>
                <DescButtons icon= <BiDislike size="24px"/> title="Dislike"/>
                <DescButtons icon= <BiShare size="24px"/> title="Share"/>
                <DescButtons icon= <BiDonateHeart size="24px"/> title="Thanks"/>
                <DescButtons icon= <AiOutlineScissor size="24px"/> title="Clip"/>
                <DescButtons icon= <BiSave size="24px"/> title="Save"/>
                <DescButtons icon= <BsThreeDots size="24px"/>/>
                </div>
                <Channel/>
            </div>
            )
}

            export default Desc