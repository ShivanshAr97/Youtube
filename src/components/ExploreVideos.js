import React from 'react'
import img1 from '../img/img1.webp'

const ExploreVideos = () => {
    return (
        <>
            <div className='mb-4 flex text-gray-400 text-sm font-medium'>
                <img className='w-60 mx-auto flex justify-center' src={img1} alt="" />
                <div className='mx-2'>
                    <p className='flex text-white text-lg'>Coding AI for Phones 📳</p>
                    <div className='flex items-center'>
                        <p className='text-gray-400'>CodeWithHarry</p>
                        <div className='flex my-1 text-gray-400'>
                            <span className='mx-2'>:</span>
                            <p>10K views</p>
                            <span className='mx-1'>:</span>
                            <p>1 day ago</p>
                        </div>
                    </div>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto quae molestiae commodi expedita voluptates, nostrum non ipsum veritatis beatae!</p>
                </div>
            </div>
        </>
    )
}

export default ExploreVideos