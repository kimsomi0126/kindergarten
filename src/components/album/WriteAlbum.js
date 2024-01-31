import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlbumWrap, FileListStyle } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";

import { postAlbum } from "../../api/album/album_api";
import { SERVER_URL } from "../../api/config";
const path = `${SERVER_URL}/api/album`;

//초기값
const initState = {
  pics: [],
  iteacher: 1,
  albumTitle: "",
  albumContents: "",
};

const WriteAlbum = ({ submit }) => {
  const [form] = Form.useForm();
  const [product, setProduct] = useState(initState);
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = info => {
    let fileList = [...info.fileList].filter(file => !!file.status);
    setFileList(fileList);
  };

  const customRequest = ({ onSuccess }) => {
    onSuccess("ok");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancelConfirmation = () => {
    Modal.confirm({
      title: "정말 취소할까요?",
      content: "작성된 내용은 저장되지 않습니다.",
      onOk: handleCancleOk,
      okText: "확인",
      cancelText: "취소",
      onCancel: () => {},
    });
  };

  const onFinish = async data => {
    console.log("fileList", fileList);
    const formData = new FormData();
    console.log("data", data);
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
      successFn: handleSuccess,
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
    console.error("앨범 업로드 오류:", error);
    Modal.error({
      title: "앨범 업로드 중 오류 발생",
      content:
        "서버 오류 또는 네트워크 문제가 발생했습니다. 다시 시도해주세요.",
    });
  };

  // 업로드 칸 스타일을 수정하기 위한 변수
  const uploadAreaStyle = {
    height: "150px",
    lineHeight: "150px",
  };
  return (
    <AlbumWrap paddingTop={40} width={100} height={100}>
      <PageTitle>활동앨범</PageTitle>
      <div
        style={{
          width: "100%",
          height: 560,
          padding: 16,
          borderTop: "1.5px solid #00876D",
          borderBottom: "1.5px solid #00876D",
          background: "#FAFAFA",
          marginTop: 30,
        }}
      >
        <Form form={form} onFinish={onFinish}>
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
            >
              <Button icon={<UploadOutlined />}>업로드 </Button>
            </Upload.Dragger>
          </FileListStyle>
          <div
            style={{
              paddingTop: 15,
              float: "right",
              // position: "absolute",
              // background: "red",
            }}
          >
            <GreenBtn htmlType="submit">{submit}</GreenBtn>

            <PinkBtn
              onClick={handleCancelConfirmation}
              style={{ marginLeft: 20 }}
            >
              취소
            </PinkBtn>
          </div>
        </Form>
      </div>

      <Link to="/album">
        <Modal
          title="등록 완료"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelButtonProps={{ style: { display: "none" } }}
          width={350}
        >
          <p>성공적으로 등록되었습니다.</p>
        </Modal>
      </Link>
    </AlbumWrap>
  );
};

export default WriteAlbum;
