import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { deleteNotice, getDetail } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import "../../styles/notice/gallery.css";
import { BlueBtn, BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { IMG_URL } from "../../api/config";
import { NoticeGallery, NoticeWrap } from "../../styles/notice/notice";
import {
  ContentWrap,
  DetailsText,
  Footer,
  MainContent,
  TitleWrap,
} from "../../styles/album/album";
const path = `${IMG_URL}/pic/fullnotice`;
export const obj = {
  fullTitle: "",
  fullContents: "",
  writer: "",
  createdAt: "",
  pics: [
    {
      pic: "",
      ifullPic: 0,
    },
  ],
};

const DetailsNotice = ({ isLogin }) => {
  const params = useSearchParams();
  const slideInterval = 1700;

  const [postNumber, setPostNumber] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(obj);
  const [detailImage, setDetailImage] = useState([]);
  const { tno } = useParams();
  const navigate = useNavigate();

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteOk = async () => {
    try {
      await deleteNotice({
        tno,
        successFn: () => {
          navigate("/notice");
        },
        failFn: error => {
          console.error("삭제실패:", error);
        },
        errorFn: error => {
          console.error("삭제 에러:", error);
          // 에러 시, 필요한 처리를 추가할 수 있습니다.
        },
      });
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("삭제 처리 중 에러 발생:", error);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const successFn = result => {
    setDetailData(result);
    const pics = result.pics;
    // console.log("사진 경로", pics);
    const newImages = pics.map((pic, index) => ({
      original: `${path}/${tno}/` + pic.pic,
      thumbnail: `${path}/${tno}/` + pic.pic,
    }));

    setDetailImage(prevDetailImage => [...prevDetailImage, ...newImages]);
    setPostNumber(pics.length); // 이미지 번호를 1부터 시작하도록 수정
  };

  // console.log("!!!!", detailImage);
  const failFn = result => {};
  const errorFn = result => {};
  useEffect(() => {
    getDetail({ tno, successFn, failFn, errorFn });
  }, [tno]);
  // console.log(detailData);

  return (
    <NoticeWrap>
      <PageTitle>유치원 소식</PageTitle>
      <ContentWrap>
        <TitleWrap>
          <h3>{detailData.fullTitle}</h3>
          <p>{detailData.createdAt}</p>
        </TitleWrap>
        <MainContent>
          <NoticeGallery key={postNumber}>
            {detailData.pics.length >= 1 ? (
              <ImageGallery
                items={detailImage}
                thumbnailPosition="left"
                slideInterval={slideInterval}
              />
            ) : null}
          </NoticeGallery>

          <DetailsText>
            <pre>{detailData.fullContents}</pre>
          </DetailsText>
        </MainContent>
      </ContentWrap>
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
      <Footer>
        <BtnWrap style={{ justifyContent: "flex-end" }}>
          <GreenBtn
            onClick={() => {
              navigate("/notice");
            }}
          >
            목록보기
          </GreenBtn>
          {isLogin ? (
            <>
              <BlueBtn
                onClick={() => {
                  navigate({
                    pathname: `/notice/modify/${tno}`,
                    state: {
                      detailData: detailData,
                    },
                  });
                }}
              >
                수정
              </BlueBtn>

              <div>
                {isLogin ? (
                  <PinkBtn onClick={showDeleteModal}>삭제</PinkBtn>
                ) : null}
              </div>
            </>
          ) : null}
        </BtnWrap>
      </Footer>
    </NoticeWrap>
  );
};

export default DetailsNotice;
