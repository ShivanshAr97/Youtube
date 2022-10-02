import React from 'react'
import ChatBig from './components/ChatBig';
import ChatSmall from './components/ChatSmall';
import Contents from './components/Contents';
import Tags from './components/Tags';

const Main = () => {
    return (
        <>
            <div className=' overflow-auto'>
                <div className='flex'>
                    <ChatSmall />
                    <div>
                        <Tags />
                        <div className='mt-14'>
                        <Contents />
                        </div>
                    </div>
                </div>
                <span className='overflow-auto'><ChatBig /></span>
            </div>
        </>
    )
}

export default Main