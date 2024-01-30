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
import { getAlbum } from "../../api/album/album_api";
import Loading from "../loading/Loading";

// import required modules
const initAlbumCommnet = [
  {
    albumTitle: "",
    albumContents: "",
    albumPic: [],
    albumComments: [],
    createdAt: "",
  },
];
// const data = [
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
//   { id: 1, pic: ["https://swiperjs.com/demos/images/nature-1.jpg"] },
//   { id: 2, pic: ["https://swiperjs.com/demos/images/nature-2.jpg"] },
//   { id: 3, pic: ["https://swiperjs.com/demos/images/nature-3.jpg"] },
//   { id: 4, pic: ["https://swiperjs.com/demos/images/nature-4.jpg"] },
//   { id: 5, pic: ["https://swiperjs.com/demos/images/nature-5.jpg"] },
//   { id: 6, pic: ["https://swiperjs.com/demos/images/nature-6.jpg"] },
//   { id: 7, pic: ["https://swiperjs.com/demos/images/nature-7.jpg"] },
//   { id: 8, pic: ["https://swiperjs.com/demos/images/nature-8.jpg"] },
// ];

const DetailsAlbum = ({ pno }) => {
  const [albumData, setAlbumData] = useState(initAlbumCommnet); // 앨범 데이터 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false);
  const navigate = useNavigate();
  // 컴포넌트 마운트 시 데이터 불러오기
  console.log("pno", pno);
  useEffect(() => {
    getAlbum({
      pno: pno,
      successFn: data => {
        setAlbumData(data); // 앨범 데이터 상태 업데이트
        setIsLoading(false); // 로딩 상태 업데이트
      },
      failFn: message => {
        console.error(message);
        setIsLoading(false);
      },
      errorFn: data => {
        console.error(data);
        setIsLoading(false);
      },
    });
  }, [pno]); // pno 값이 변경될 때마다 getAlbum 함수를 호출

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

  console.log("albumData", albumData);
  return (
    <AlbumWrap paddingTop={40}>
      <AlbumTopBar padding={1}>
        <AlbumTitle>활동앨범</AlbumTitle>
      </AlbumTopBar>
      <ContentWrap>
        <TitleWrap>
          <h3>{albumData.albumTitle}</h3>
          <p>{albumData.createdAt}</p>
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
              {albumData &&
                albumData.albumPic &&
                albumData.albumPic.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`http://192.168.0.144:5224/pic/album/${pno}/${item}`}
                      onClick={() =>
                        openLightbox(
                          `http://192.168.0.144:5224/pic/album/${pno}/${item}`,
                        )
                      }
                    />
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
            <p>{albumData.albumContents}</p>
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