import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Footer from './Footer'
import Swipe from './swipe'
export default function Layout() {
  return (
    <>
   <div className="relative w-full flex flex-col items-start justify-center bg-[#15161A]">
    <div className='absolute h-150 top-80'>
    <img src="Background.png" className='object-contain h-full w-full' alt="" />
    </div>
    {/* <Swipe/> */}
    <div className='w-full flex items-start justify-center bg-[#15161A]'>
        <Sidebar />
        <Home/>
        </div>
        <Footer/>
    </div>
    </>
  )
}
