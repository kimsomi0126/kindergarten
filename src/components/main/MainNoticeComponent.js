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

export const MainNoticeComponent = () => {
  const noticeDate = [
    {
      ifull_notice: 1,
      full_title: "첫번째제목입니다.",
      created_at: "2024-01-10",
    },
    {
      ifull_notice: 2,
      full_title: "두번째제목입니다.",
      created_at: "2024-01-20",
    },
    {
      ifull_notice: 3,
      full_title: "세번째제목입니다.",
      created_at: "2024-01-22",
    },
  ];
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
          {Array.isArray(noticeDate) &&
            noticeDate.map(item => {
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
