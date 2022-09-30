import React from 'react'
import { MdSort } from 'react-icons/md';

const Comments = () => {
  return (
    <div className='text-white flex text-lg font-medium my-4 items-center'>
    1,260 Comments
    <div className='mx-8 flex items-center'>
        <MdSort size='24'/>
        <p className='mx-2'>SORT BY</p>
    </div>
    </div>
  )
}

export default Comments