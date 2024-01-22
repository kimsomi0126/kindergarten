import React, { useState } from "react";
import { Button, Modal } from "antd";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, useNavigate } from "react-router-dom";
import { NoticeImageData } from "../../components/common/TemporaryData";
import { PageTitle } from "../../styles/basic";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";

const NoticeDetails = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
              <p style={{ margin: 0, fontSize: 27 }}>제목입니다.</p>
            </div>
            <p style={{ marginRight: 20, fontSize: 15, color: "#999" }}>
              2024-01-17
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
            <div style={{ margin: 40, maxWidth: 500, display: "inline-block" }}>
              <ImageGallery items={NoticeImageData} thumbnailPosition="left" />
            </div>
          </div>
          <p style={{ margin: 30, textAlign: "center", fontSize: 20 }}>
            내용입니다
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
            <Link to={`/notice/modify/`}>
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
        visible={isDeleteModalOpen}
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
