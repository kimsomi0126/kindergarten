import React from "react";
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
import { NoticeDate } from "../common/TemporaryData";

export const MainNoticeComponent = () => {
  return (
    <MainNoticeWrap>
      <MainNoticeTitle>유치원소식</MainNoticeTitle>
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
          {Array.isArray(NoticeDate) &&
            NoticeDate.map(item => {
              return (
                <SwiperSlide key={item.ifull_notice}>
                  <MainNoticeItem>
                    <Link to={`/notice/details/${item.ifull_notice}`}>
                      <p>{item.full_title}</p>
                      <span>{item.created_at}</span>
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
