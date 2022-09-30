import React from 'react'
import { AiOutlineLike, AiOutlineScissor } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { BiDislike, BiShare, BiDonateHeart, BiSave } from 'react-icons/bi';

const DescButtons = (props) => {
    return (
        <>
            <div className='flex items-center mx-3 cursor-pointer'>
                {props.icon}
                <span className='mx-2 font-semibold'>{props.title}</span>
            </div>
        </>
    )
}

export default DescButtons