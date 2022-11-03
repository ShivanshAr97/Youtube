import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
// import Content from './Content'
const Content = lazy(() => import('./Content'))

const Contents = () => {
    return (
        <div className='w-[93.7%] flex flex-col ml-20 bg-black'>
            <Suspense fallback={Loading}>
                <div className='flex'>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                </div>
                <div className='flex'>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                    <Link to="/video"><Content /></Link>
                </div>
            </Suspense>
        </div>
    )
}

export default Contents