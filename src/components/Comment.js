import React from 'react'
import img2 from '../img/img1_1.png'
import { MdOutlineAccountCircle } from 'react-icons/md';

const Comment = () => {
    return (
        <>
            <div className='flex my-4'>
                <span className='text-gray-400'><MdOutlineAccountCircle size='60' /></span>
                <input className='text-sm m-3 mx-6 w-5/6 outline-none text-gray-400 placeholder:text-gray-400 border-b-[0.5px] border-gray-400 bg-transparent' type="text" placeholder='Add a comment ...' />
            </div>
            <div className='flex mx-2 my-4'>
                <img className='w-12 h-12' src={img2} alt="" />
                <div className='mx-4'>
                    <p className='text-white font-bold text-sm'>Lorem ipsum dolor sit amet.</p>
                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet possimus facilis, rem vitae obcaecati commodi maiores doloremque quasi sit sed temporibus exercitationem fugit quam placeat fuga laudantium, iure maxime.</p>
                </div>
            </div>
            <div className='flex mx-2 my-4'>
            <span className='text-gray-400'><MdOutlineAccountCircle size='60' /></span>
                <div className='mx-4'>
                    <div className='flex mb-2 items-center'>
                    <p className='text-white font-bold text-sm'>Lorem ipsum dolor sit amet.</p>
                    <span className='text-gray-400 text-sm mx-2'>2 years ago</span>
                    </div>
                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet possimus facilis, rem vitae obcaecati commodi maiores doloremque quasi sit sed temporibus exercitationem fugit quam placeat fuga laudantium, iure maxime.</p>
                </div>
            </div>
        </>
    )
}

export default Comment