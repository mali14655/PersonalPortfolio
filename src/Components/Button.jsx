import React from 'react'

export default function Button({Text}) {
  return (
    <>
    <div className='relative z-50 hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in shadow-md hover:shadow-[0_0_15px_rgb(29,255,243)] font-[600] text-[14px] text-[#BFC2CB] py-2 px-10 flex justify-center items-center  rounded-[80px] border-[1px] border-[#2e3035] bg-[#0000001A]'>
        {Text}
        </div>
    </>
  )
}
