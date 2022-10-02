import React from 'react'
import ChatBig from './ChatBig';
import ChatSmall from './ChatSmall';
import ExplorePage from './ExplorePage';

const Explore = () => {
    return (
        <>
            <div className=' overflow-auto'>
                <div className='flex'>
                    <ChatSmall />
                    <ExplorePage/>
                </div>
                <span className='overflow-auto'><ChatBig /></span>
            </div>
        </>
    )
}

export default Explore
