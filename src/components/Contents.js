import React from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'

const Contents = () => {
    return (
        <>
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
        </>
    )
}

export default Contents