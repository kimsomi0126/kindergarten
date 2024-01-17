import React from "react";
import "../../styles/information/info_class.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const InfoClass = () => {
  return (
    <div className="info_Class_wrap">
      <div>
        <div>
          무궁화반
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="info_class_item">
                <img
                  src="
                  /images/information/go.svg"
                  alt=""
                />
                <h3>홍길동</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="info_class_item">
                <img
                  src="
                  /images/information/logo4.svg"
                  alt=""
                />
                <h3>홍길동</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>해바라기반</div>
        <div>장미반</div>
      </div>
    </div>
  );
};

export default InfoClass;
