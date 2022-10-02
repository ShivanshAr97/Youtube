import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import { AiOutlineSetting, AiOutlineDollar } from 'react-icons/ai';
import { BsFilePerson, BsMoon, BsGlobe, BsKeyboard } from 'react-icons/bs';
import { BiLogOut, BiHelpCircle } from 'react-icons/bi';
import { IoLanguageOutline } from 'react-icons/io5';
import { SiYoutubestudio } from 'react-icons/si';
import { MdOutlineFeedback, MdSwitchAccount, MdOutlineSecurity } from 'react-icons/md';
import SingleSetting from './SingleSetting';
import { MdOutlineAccountCircle } from 'react-icons/md';

export default function Settings({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (

        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 flex justify-center overflow-auto items-center'>
            <div className='w-[20rem] pt-4 top-2 right-2 bg-slate-900 fixed overflow-auto text-white z-20 flex flex-col'>
                <div className='flex mb-4 mx-6'>
                    <MdOutlineAccountCircle size="48px"/>
                    <div className='mx-4 -mt-2'>
                        <p className='text-white font-bold text-lg'>User</p>
                        <p className='text-blue-500 cursor-pointer'>Manage</p>
                    </div>
                </div>
                <span className='border-b-[0.2px] border-gray-500'></span>
                <SingleSetting icon=<BsFilePerson size="20px" /> title="Your channel" />
                <SingleSetting icon=<SiYoutubestudio size="20px" /> title="Youtube Studio" />
                <SingleSetting icon=<MdSwitchAccount size="20px" /> title="Switch account" />
                <SingleSetting icon=<BiLogOut size="20px" /> title="Sign out" />
                <span className='border-b-[0.2px] border-gray-500'></span>
                <SingleSetting icon=<AiOutlineDollar size="20px" /> title="Purchases and memberships" />
                <SingleSetting icon=<MdOutlineSecurity size="20px" /> title="Your data in Youtube" />
                <span className='border-b-[0.2px] border-gray-500'></span>
                <SingleSetting icon=<BsMoon size="20px" /> title="Appearance" />
                <SingleSetting icon=<IoLanguageOutline size="20px" /> title="Language" />
                <SingleSetting icon=<BsFilePerson size="20px" /> title="Restricted Mode" />
                <SingleSetting icon=<BsGlobe size="20px" /> title="Location" />
                <SingleSetting icon=<BsKeyboard size="20px" /> title="Shortcuts" />
                <span className='border-b-[0.2px] border-gray-500'></span>
                <SingleSetting icon=<AiOutlineSetting size="20px" /> title="Settings" />
                <span className='border-b-[0.2px] border-gray-500'></span>
                <SingleSetting icon=<BiHelpCircle size="20px" /> title="Help" />
                <SingleSetting icon=<MdOutlineFeedback size="20px" /> title="Send feedback" />
            </div>
        </div>
    )
}
