import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipe() {
  return (
    <>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
      loop={true} // Infinite loop
      modules={[Navigation, Pagination, Autoplay]} // Add modules
      className='text-white'
    >
        <button className="swiper-button-prev">❮</button> 
      <SwiperSlide>
        <div className="slide-content py-30 px-10">Project 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Project 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Project 3</div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}
