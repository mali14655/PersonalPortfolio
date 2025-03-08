import React from 'react'
import Sidebar from './sidebar'

export default function Layout() {
  return (
    <>
    <div className='w-full flex justify-center  bg-[#15161A]'>
        <Sidebar />
        <>
        <div className='w-[80%] border-2 border-white'>

        </div>
        </>
    </div>
    </>
  )
}
