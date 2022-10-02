import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BsBell, BsMicFill } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';

import ChatBig from "./ChatBig";
const Navbar = () => {

    const [showModal, setShowModal] = useState(false)

    function close() {
        setShowModal(false)
    }
    function modalShow() {
        setShowModal(true)
    }
    return (
        <>
            <div className='bg-gray-900 sticky top-0 z-50 flex items-center overflow-auto px-6 py-3 justify-between text-white right-0'>
            <ChatBig onClose={close} visible={showModal} />
                <div className='flex items-center'>
                    <span className='cursor-pointer' onClick={modalShow}><IoReorderThreeOutline size="40px" /></span>
                    <Link to="/">
                    <div className='flex cursor-pointer items-center mx-4'>
                        <AiFillYoutube size="36px" />
                        <p className='text-xl font-bold'>YouTube</p>
                    </div>
                    </Link>
                </div>
                <div className=' flex items-center'>
                    <input className=' w-[40rem] p-2 outline-none bg-black border border-gray-800' type="text" placeholder='Search' />
                    <button className='border border-gray-800 bg-gray-800 px-4 py-[0.45rem]'><AiOutlineSearch size="24px"/></button>
                    <button className='p-3 rounded-full mx-2 bg-black'><BsMicFill size="20px"/></button>
                </div>
                <div className='flex items-center'>
                    <BiVideoPlus className=' cursor-pointer mx-4' size="24px"/>
                    <BsBell className=' cursor-pointer mx-4' size="24px"/>
                    <MdOutlineAccountCircle className=' cursor-pointer mx-4 mr-6' size="24px"/>
                </div>
            </div>
        </>
    )
}

export default Navbar