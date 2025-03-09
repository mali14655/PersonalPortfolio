import React, { useEffect, useState } from 'react'

export default function Footer() {
    const [year,setYear]=useState('');

    useEffect(()=>{
        setYear(new Date().getFullYear());
    })
  return (
    <>
    <div className='w-full flex justify-center items-center py-10'>
        <div className='w-[90%] flex justify-center items-center py-10'>
            <h1 className='text-[#FFFFFF99]'>
                Copyright &copy; {year} All Rights Reserved
            </h1>
        </div>

    </div>
    </>
  )
}
