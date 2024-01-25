import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
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
];

const DetailsAlbum = () => {
  return (
    <SwiperWrap>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {data.map(item => (
          <SwiperSlide className="swiperslide" key={item.id}>
            <img src={item.pic} alt={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
};

export default DetailsAlbum;
