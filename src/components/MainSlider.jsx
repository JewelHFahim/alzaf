"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(5)].map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[40vh] md:h-[391px] relative ">
              <Image src="/slide banner.png" alt="" fill className="w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
