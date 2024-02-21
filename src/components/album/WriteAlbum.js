import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlbumWrap, FileListStyle, WriteWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";

import { postAlbum } from "../../api/album/album_api";
import { SERVER_URL } from "../../api/config";
import ModalOneBtn from "../ui/ModalOneBtn";
const path = `${SERVER_URL}/api/album`;

const WriteAlbum = ({ albumData, submit }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showExceedLimitModal, setShowExceedLimitModal] = useState(false); // 파일 제한 초과 경고 모달 상태

  const handleChange = info => {
    let fileList = [...info.fileList].slice(-20); // 최대 20개 파일만 유지
    setFileList(fileList);
  };

  const beforeUpload = file => {
    const isExceedLimit = fileList.length >= 20; // 현재 파일 리스트의 길이가 20 이상인지 검사
    if (isExceedLimit) {
      // 파일리스트 길이가 20개를 초과하는 경우
      setShowExceedLimitModal(true); // 경고 모달 표시
      return Upload.LIST_IGNORE; // 파일 업로드 중단
    }
    return true; // 파일 추가를 계속 진행
  };

  const handleExceedLimitModalOk = e => {
    e.stopPropagation(); // 이벤트가 상위 엘리먼트에 전달되지 않게 막기
    setShowExceedLimitModal(false); // 경고 모달 닫기
  };

  const customRequest = ({ onSuccess }) => {
    onSuccess("ok");
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 앨범 등록 성공 모달 핸들러
  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
    navigate("/album");
  };

  const handleCancelConfirmModalOk = () => {
    // 모달을 닫고, 사용자를 앨범 목록 페이지로 이동합니다.
    setShowCancelConfirmModal(false);
    navigate("/album");
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmModal(true); // 취소 확인 모달 표시
  };

  // if (fileList.length > 20) {
  //   Modal.error({
  //     title: "이미지 업로드 제한",
  //     content: "이미지는 최대 20개까지 업로드할 수 있습니다.",
  //   });
  //   return;
  // }

  const onFinish = async data => {
    const formData = new FormData();
    // 글 정보를 담은 dto Blob객체 생성
    const dto = new Blob(
      [
        JSON.stringify({
          iteacher: 1,
          albumTitle: data.albumTitle,
          albumContents: data.albumContents,
        }),
      ],
      // JSON 형식으로 설정
      { type: "application/json" },
    );

    // dto 객체를 FormData에 추가
    formData.append("dto", dto);

    // fileList에 있는 각 파일을 formData에 추가
    fileList.forEach(file => {
      // originFileObj가 실제 파일 데이터를 가지고 있음
      formData.append("pics", file.originFileObj);
    });

    // formData를 서버에 전송
    postAlbum({
      product: formData,
      successFn: () => setShowSuccessModal(true), // 성공 모달 표시
      failFn: handleFailure,
      errorFn: handleError,
    });
  };

  const handleCancleOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.

    // 예시: 삭제 처리 후 /album 페이지로 이동
    navigate("/album");

    setIsModalVisible(false);
  };

  const handleSuccess = response => {
    setIsModalVisible(true);
    // 성공적으로 업로드 완료 후 처리할 작업을 추가할 수 있습니다.
  };

  const handleFailure = errorMessage => {
    // 업로드 실패 시 처리할 작업을 추가할 수 있습니다.
    Modal.error({
      title: "앨범 업로드 실패",
      content: errorMessage,
    });
  };

  const handleError = error => {
    Modal.error({
      title: "앨범 업로드 중 오류 발생",
      content:
        "서버 오류 또는 네트워크 문제가 발생했습니다. 다시 시도해주세요.",
    });
  };

  // 업로드 칸 스타일을 수정하기 위한 변수
  const uploadAreaStyle = {
    height: "5rem",
    lineHeight: "5rem",
  };

  return (
    <AlbumWrap>
      <PageTitle>활동앨범</PageTitle>
      <Form form={form} onFinish={onFinish}>
        <WriteWrap>
          <Form.Item
            name="albumTitle"
            rules={[
              {
                required: true,
                message: "제목을 입력해주세요!",
              },
            ]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>
          <Form.Item
            style={{ height: "150px" }}
            name="albumContents"
            rules={[
              {
                required: true,
                message: "내용을 입력해주세요!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="내용 입력"
              style={{ height: "150px" }}
            />
          </Form.Item>
          <FileListStyle>
            <Upload.Dragger
              action={`${path}`}
              listType="picture"
              fileList={fileList}
              onChange={handleChange}
              customRequest={customRequest}
              className="upload-list-inline"
              multiple={true}
              style={uploadAreaStyle}
              maxCount={20}
              beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>업로드(최대 20개) </Button>
            </Upload.Dragger>
          </FileListStyle>
        </WriteWrap>
        <BtnWrap right>
          <GreenBtn htmlType="submit">등록</GreenBtn>
          <PinkBtn onClick={handleCancelConfirmation}>취소</PinkBtn>
        </BtnWrap>
      </Form>

      <Link to="/album">
        {/* 등록 성공 모달 */}
        {showSuccessModal && (
          <ModalOneBtn
            isOpen={showSuccessModal}
            handleOk={handleSuccessModalOk}
            title="등록 완료"
            subTitle="성공적으로 등록되었습니다."
          />
        )}

        {/* 취소 확인 모달 */}
        {showCancelConfirmModal && (
          <ModalOneBtn
            isOpen={showCancelConfirmModal}
            handleOk={handleCancelConfirmModalOk}
            title="정말 취소할까요?"
            subTitle="작성된 내용은 저장되지 않습니다."
          />
        )}

        {/* 파일 제한 초과 경고 모달 */}
        {showExceedLimitModal && (
          <ModalOneBtn
            isOpen={showExceedLimitModal}
            handleOk={handleExceedLimitModalOk}
            title="업로드 제한 초과"
            subTitle="업로드할 수 있는 파일 수는 최대 20개입니다."
          />
        )}
      </Link>
    </AlbumWrap>
  );
};

export default WriteAlbum;
