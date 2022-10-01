import React from 'react'
import { MdSort } from 'react-icons/md';
import Comment from './Comment';

const Comments = () => {
  return (
    <>
      <div className='text-white flex text-lg font-medium my-4 items-center'>
        1,260 Comments
        <div className='mx-8 flex items-center'>
          <MdSort size='24' />
          <p className='mx-2 cursor-pointer'>SORT BY</p>
        </div>
      </div>
      <Comment />
    </>
  )
}

export default Comments