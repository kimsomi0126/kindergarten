import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import { SwiperWrap } from "../../styles/album/album";
const data = [
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
  { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
  { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
  { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
  { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
  { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
  { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
  { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
  { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
];
const DetailsAlbum = () => {
  return (
    <SwiperWrap>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        keyboard={{ enabled: true }} // 키보드 제어 활성화
        modules={[EffectCoverflow, Pagination, Keyboard]} // Keyboard 모듈 추가
        className="mySwiper"
      >
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <a href={item.pic}>
              <img src={item.pic} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
};

export default DetailsAlbum;
