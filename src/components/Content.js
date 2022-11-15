import React from 'react'
import img1 from '../img/img1.webp'
import img2 from '../img/img1_1.png'
import '../index.css';
import Contentdata from './Contentdata'

const Content = () => {
    return (
        
        <div className='bg-black text-white'>
            <div className='cursor-pointer p-4'>
                <div className=''>
                <img className='' src={img1} alt="" />
                <span className='bg-black text-xs font-bold absolute -mt-7 ml-[14rem] px-2 py-1 rounded-md'>2:20</span>
                </div>
                <div className='flex my-4'>
                    <img className='h-10 w-10' src={img2} alt="" />
                    <div className='mx-2 font-medium '>
                        <h3>Which Monitor to buy in 2022? (Shortlisted Models)</h3>
                        <p className='mt-2 mb-0.5 text-sm text-gray-400'>CodeWithHarry</p>
                        <div className='flex text-sm text-gray-400'>
                            <span>2.1K views </span><span>&nbsp;&nbsp;:&nbsp; 2 hours ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content