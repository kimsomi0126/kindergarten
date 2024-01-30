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
import { getDetail } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import "../../styles/notice/gallery.css";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";

export const obj = {
  fullTitle: "",
  fullContents: "",
  writer: "",
  createdAt: "",
  pics: [""],
};

const NoticeDetails = () => {
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

  const handleDeleteOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.

    // 예시: 삭제 처리 후 /notice 페이지로 이동
    navigate("/notice");

    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const successFn = result => {
    setDetailData(result);
    const pics = result.pics;
    const newImages = pics.map((pic, index) => ({
      original: `http://192.168.0.144:5224/pic/fullnotice/${tno}/` + pic,
      thumbnail: `http://192.168.0.144:5224/pic/fullnotice/${tno}/` + pic,
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
    <>
      <PageTitle>유치원 소식</PageTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <div
          style={{
            borderTop: "1.5px solid #00876D",
            borderBottom: "1.5px solid #00876D",
            width: "100%",
            background: "white",
            textAlign: "center",
            paddingTop: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ margin: "auto" }}>
              <p style={{ margin: 0, fontSize: 27 }}>{detailData.fullTitle}</p>
            </div>
            <p style={{ marginRight: 20, fontSize: 15, color: "#999" }}>
              {detailData.createdAt}
            </p>
          </div>
          <div
            style={{
              borderTop: "1.5px solid #DDDDDD",
              width: "100%",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            <div
              key={postNumber}
              style={{ margin: 40, maxWidth: 500, display: "inline-block" }}
            >
              <ImageGallery
                items={detailImage}
                thumbnailPosition="left"
                slideInterval={slideInterval}
              />
            </div>
          </div>
          <p style={{ margin: 30, textAlign: "center", fontSize: 20 }}>
            {detailData.fullContents}
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 20,
          }}
        >
          <div style={{ marginRight: 10 }}>
            <Link to="/notice">
              <GreenBtn>목록보기</GreenBtn>
            </Link>
          </div>
          <div style={{ marginRight: 10 }}>
            <Link to={`/notice/modify/${tno}`}>
              <BlueBtn>수정</BlueBtn>
            </Link>
          </div>
          <div>
            <PinkBtn onClick={showDeleteModal}>삭제</PinkBtn>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default NoticeDetails;
