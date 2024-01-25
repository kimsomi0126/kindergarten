import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import { SwiperWrap } from "../../styles/album/album";
import Lightbox from "./LightBox";
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
  const [lightbox, setLightbox] = useState({ open: false, imgSrc: "" });
  const openLightbox = imgSrc => setLightbox({ open: true, imgSrc: imgSrc[0] });
  const closeLightbox = () => setLightbox({ open: false, imgSrc: "" });
  // Lightbox 상태에 따라 Swiper 높이 조절
  useEffect(() => {
    const swiperElement = document.querySelector(".swiper");
    if (lightbox.open) {
      swiperElement.style.height = "60vh";
    } else {
      swiperElement.style.height = "100%";
    }
  }, [lightbox.open]);
  return (
    <SwiperWrap closeLightbox={closeLightbox}>
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
            <img src={item.pic} onClick={() => openLightbox(item.pic)} />
          </SwiperSlide>
        ))}
        <Lightbox
          imgSrc={lightbox.imgSrc}
          open={lightbox.open}
          closeLightbox={closeLightbox}
        />
      </Swiper>
    </SwiperWrap>
  );
};

export default DetailsAlbum;
