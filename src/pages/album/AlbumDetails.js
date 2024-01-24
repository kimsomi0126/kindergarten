import { Modal } from "antd";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, useNavigate } from "react-router-dom";

import DetailsAlbum from "../../components/album/DetailsAlbum";
import {
  AlbumTopBar,
  AlbumWrap,
  ContentWrap,
  AlbumTitle,
  TitleWrap,
} from "../../styles/album/album";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";

const AlbumDetails = id => {
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

    // 예시: 2초 후에 성공 모달을 닫고 /notice 페이지로 이동
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

  return (
    <AlbumWrap paddingTop={40}>
      <AlbumTopBar padding={1}>
        <AlbumTitle>활동앨범</AlbumTitle>
      </AlbumTopBar>
      <ContentWrap>
        <TitleWrap>제목입니다.</TitleWrap>
        <p style={{ marginRight: 20, color: "#999" }}>2024-01-17</p>
        {/* <div
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
          </p> */}

        <DetailsAlbum />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 20,
          }}
        >
          <div style={{ marginRight: 10 }}>
            <Link to="/album">
              <GreenBtn>목록보기</GreenBtn>
            </Link>
          </div>
          <div style={{ marginRight: 10 }}>
            <Link to={`/album/modify/`}>
              <BlueBtn>수정</BlueBtn>
            </Link>
          </div>
          <div>
            <PinkBtn onClick={showDeleteModal}>삭제</PinkBtn>
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

        {/* 삭제 성공 모달 */}
        <Modal
          title="삭제 완료"
          open={isDeleteSuccessModalOpen}
          onOk={handleDeleteSuccessOk}
          okText="확인"
        >
          <p>삭제가 완료되었습니다.</p>
        </Modal>
      </ContentWrap>
    </AlbumWrap>
  );
};

export default AlbumDetails;
