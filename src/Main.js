import React from 'react'
import ChatBig from './components/ChatBig';
import ChatSmall from './components/ChatSmall';
import Contents from './components/Contents';
import Navbar from './components/Navbar'
import Tags from './components/Tags';

const Main = () => {
    return (
        <>
            <div className=' overflow-auto'>
                {/* <Navbar /> */}
                <div className='flex'>
                    <ChatSmall />
                    <div>
                        <Tags />
                        <Contents />
                    </div>
                </div>
                <span className='overflow-auto'><ChatBig /></span>
            </div>
        </>
    )
}

export default Main