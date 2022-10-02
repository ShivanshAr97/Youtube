import React from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'

const Contents = () => {
    return (
        <div className='w-[93.7%] flex flex-col ml-20'>
        <div className='flex'>
        <Link to="/video"><Content/></Link>                
        <Link to="/video"><Content/></Link>
        <Link to="/video"><Content/></Link>
        <Link to="/video"><Content/></Link>       
        </div>
        <div className='flex'>
        <Link to="/video"><Content/></Link>
        <Link to="/video"><Content/></Link>
        <Link to="/video"><Content/></Link>
        <Link to="/video"><Content/></Link>
        </div>
        </div>
    )
}

export default Contents