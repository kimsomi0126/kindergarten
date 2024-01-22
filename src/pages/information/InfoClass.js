import React from "react";
import "../../styles/information/info_class.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import {
  ClassWrap,
  InfoClassWrap,
  KidsInfo,
} from "../../styles/information/info";
import { MyClassWrap } from "../../styles/user/mypage";
import MyClass from "../../components/user/MyClass";
import { ImgBox } from "../../styles/main";

const InfoClass = () => {
  const kidsData = [{ iclass: 0, kidNm: "string", profile: "string" }];
  return (
    <InfoClassWrap>
      {/* 무궁화반 */}
      <ClassWrap className="class1">
        <MyClassWrap state={1}>
          <MyClass state={1} />
          <div className="pagination"></div>
        </MyClassWrap>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween="30"
          loop="true"
          speed={800}
          pagination={{
            el: ".pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="class1"
        >
          <SwiperSlide>
            <KidsInfo>
              <ImgBox>
                <img src="/images/information/kids01.jpg" alt="이름"></img>
              </ImgBox>
              <h4>이름</h4>
            </KidsInfo>
          </SwiperSlide>
        </Swiper>
      </ClassWrap>
      {/* 해바라기반 */}
      <ClassWrap className="class2">
        <MyClassWrap state={2}>
          <MyClass state={2} />
        </MyClassWrap>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween="30"
          loop="true"
          speed={800}
          pagination={{
            el: ".pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <KidsInfo>
              <ImgBox>
                <img src="/images/information/kids01.jpg" alt="이름"></img>
              </ImgBox>
              <h4>이름</h4>
            </KidsInfo>
          </SwiperSlide>
        </Swiper>
      </ClassWrap>
      {/* 장미반 */}
      <ClassWrap className="class3">
        <MyClassWrap state={3}>
          <MyClass state={3} />
        </MyClassWrap>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween="30"
          loop="true"
          speed={800}
          pagination={{
            el: ".pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="class3"
        >
          <SwiperSlide>
            <KidsInfo>
              <ImgBox>
                <img src="/images/information/kids01.jpg" alt="이름"></img>
              </ImgBox>
              <h4>이름</h4>
            </KidsInfo>
          </SwiperSlide>
        </Swiper>
      </ClassWrap>
    </InfoClassWrap>
  );
};

export default InfoClass;
