import { Modal } from "antd";
import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import LightBox from "./LightBox";
import { Link, useNavigate } from "react-router-dom";

import {
  AlbumTitle,
  AlbumTopBar,
  AlbumWrap,
  ContentWrap,
  DetailsText,
  Footer,
  MainContent,
  TitleWrap,
  SwiperWrap,
} from "../../styles/album/album";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import Comment from "../common/Comment";

// import required modules
const initAlbumCommnet = [
  {
    ialbum: 0,
    albumComment: "string",
    iteacher: 0,
    iparent: 0,
  },
];
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false);
  const navigate = useNavigate();

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.

    // 예시: 삭제 처리 로직이 완료되면 성공 모달을 띄우고 페이지 이동
    setIsDeleteModalOpen(false);
    setIsDeleteSuccessModalOpen(true);

    // 예시: 2초 후에 성공 모달을 닫고ce 페이지로 이동
    setTimeout(() => {
      setIsDeleteSuccessModalOpen(false);
      navigate("/album");
    }, 2000);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteSuccessOk = () => {
    setIsDeleteSuccessModalOpen(false);
  };
  const [lightbox, setLightbox] = useState({ open: false, imgSrc: "" });
  const openLightbox = imgSrc => setLightbox({ open: true, imgSrc: imgSrc[0] });
  const closeLightbox = () => setLightbox({ open: false, imgSrc: "" });
  // Lightbox 상태에 따라 Swiper 높이 조절
  useEffect(() => {
    const swiperElement = document.querySelector(".swiper");
    if (lightbox.open) {
      swiperElement.style.height = "55vh";
    } else {
      swiperElement.style.height = "100%";
    }
  }, [lightbox.open]);
  return (
    <AlbumWrap paddingTop={40}>
      <AlbumTopBar padding={1}>
        <AlbumTitle>활동앨범</AlbumTitle>
      </AlbumTopBar>
      <ContentWrap>
        <TitleWrap>
          <h3>제목입니다.</h3>
          <p>2024-01-17</p>
        </TitleWrap>
        <MainContent>
          <SwiperWrap>
            <Swiper
              loading="swiper-lazy-preloader swiper-lazy-preloader-white"
              height={200}
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
              // style={{ transform: `translate3d(0px, 0px, 0px)` }} //
            >
              {data.map(item => (
                <SwiperSlide key={item.id}>
                  <img src={item.pic} onClick={() => openLightbox(item.pic)} />
                </SwiperSlide>
              ))}
              <LightBox
                imgSrc={lightbox.imgSrc}
                open={lightbox.open}
                closeLightbox={closeLightbox}
              />
            </Swiper>
          </SwiperWrap>

          <DetailsText>
            <p>
              애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요. 우리나라는
              애국가에 특별한 이름을 붙이지 않고 국가(國歌)로 사용하고 있어요.
            </p>
          </DetailsText>
          <Comment />
        </MainContent>
        {/* 삭제 모달 */}
        <Modal
          title="정말 삭제할까요?"
          open={isDeleteModalOpen}
          onOk={handleDeleteOk}
          onCancel={handleDeleteCancel}
          okText="확인"
          cancelText="취소"
        >
          <p>삭제된 내용은 복구할 수 없습니다.</p>
        </Modal>

        {/* 삭제 성공 모달 */}
        <Modal
          title="삭제 완료"
          open={isDeleteSuccessModalOpen}
          onOk={handleDeleteSuccessOk}
          okText="확인"
        >
          <p>삭제가 완료되었습니다.</p>
        </Modal>
        <Footer>
          <Link to="/album">
            <GreenBtn>목록보기</GreenBtn>
          </Link>
          <Link to={`/album/modify/`}>
            <BlueBtn>수정</BlueBtn>
          </Link>
          <PinkBtn onClick={showDeleteModal}>삭제</PinkBtn>
        </Footer>
      </ContentWrap>
    </AlbumWrap>
  );
};

export default DetailsAlbum;
