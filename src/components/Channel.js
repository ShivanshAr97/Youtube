import React from 'react'
import img2 from '../img/img1_1.png'

const Channel = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='m-2 flex'>
                    <img className='w-12 h-12' src={img2} alt="" />
                    <div className='mx-3'>
                        <h3 className='text-white font-bold'>CodeWithHarry</h3>
                        <p className='text-[0.85rem] text-gray-400 font-medium'>3.30M subscribers</p>
                    </div>
                </div>
                <div className=''>
                    <button className='border border-blue-400 bg-transparent text-blue-400 px-5 py-2 mx-4'>JOIN</button>
                    <button className='border outline-none border-red-600 text-white bg-red-600 px-5 py-2 font-medium'>SUBSCRIBE</button>
                </div>
            </div>
        </>
    )
}

export default Channel