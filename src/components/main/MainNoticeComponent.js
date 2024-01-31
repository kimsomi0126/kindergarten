import React, { useEffect, useState } from "react";
import {
  MainNoticeItem,
  MainNoticeList,
  MainNoticeTitle,
  MainNoticeWrap,
} from "../../styles/main";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const MainNoticeComponent = ({ noticeDate }) => {
  return (
    <MainNoticeWrap>
      <MainNoticeTitle>
        <Link to="/notice">유치원소식</Link>
      </MainNoticeTitle>
      <MainNoticeList>
        <Swiper
          direction={"vertical"}
          speed={600}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {Array.isArray(noticeDate) &&
            noticeDate.map((item, index) => {
              return (
                <SwiperSlide key={`key_${item.ifullNotice}`}>
                  <MainNoticeItem>
                    <Link to={`/notice/details/${item.ifullNotice}`}>
                      <p>{item.fullTitle}</p>
                      <span>{item.createdAt}</span>
                    </Link>
                  </MainNoticeItem>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </MainNoticeList>
    </MainNoticeWrap>
  );
};
