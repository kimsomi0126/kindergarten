import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, Upload } from "antd";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileListStyle } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";

import { postNotice } from "../../api/notice/notice_api";
import { SERVER_URL } from "../../api/config";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
const path = `${SERVER_URL}/api/full`;

const NoticeWrite = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 추가: 경고 모달 상태
  const [fullNoticeFix, setFullNoticeFix] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();

  const handleGreenButtonClick = () => {
    formRef.current.submit();
  };

  const onChange = e => {
    setFullNoticeFix(e.target.checked);
  };

  const handleChange = info => {
    let fileList = [...info.fileList].filter(file => !!file.status);
    setFileList(fileList);
    // 파일 개수 확인 후 경고 모달 열기
    if (fileList.length > 10) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
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
      onOk: () => handleCancelOk(),
      okText: "확인",
      cancelText: "취소",
      onCancel: () => {},
    });
  };

  const onFinish = async data => {
    if (fileList.length > 10) {
      Modal.error({
        title: "이미지 업로드 제한",
        content: "이미지는 최대 10개까지 업로드할 수 있습니다.",
      });
      return;
    }

    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          iteacher: 1,
          fullTitle: data.fullTitle,
          fullContents: data.fullContents,
          fullNoticeFix: fullNoticeFix ? 1 : 0,
        }),
      ],
      { type: "application/json" },
    );

    formData.append("dto", dto);

    fileList.forEach(file => {
      formData.append("pics", file.originFileObj);
    });

    postNotice({
      product: formData,
      successFn: handleSuccess,
      failFn: handleFail,
      errorFn: handleError,
    });
  };

  const handleCancelOk = () => {
    navigate("/notice");
    setIsModalVisible(false);
  };

  const handleSuccess = response => {
    setIsModalVisible(true);
  };

  const handleFail = errorMessage => {
    Modal.error({
      title: "유치원소식 업로드 실패",
      content: errorMessage,
    });
  };

  const handleError = error => {
    console.error("유치원소식 업로드 오류:", error);
    Modal.error({
      title: "유치원소식 업로드 중 오류 발생",
      content: error,
    });
  };

  return (
    <div>
      <PageTitle>유치원 소식</PageTitle>
      <div
        style={{
          width: "100%",
          height: 600,
          padding: 16,
          borderTop: "1.5px solid #00876D",
          borderBottom: "1.5px solid #00876D",
          background: "#FAFAFA",
          marginTop: 30,
        }}
      >
        <Checkbox onChange={onChange} style={{ marginBottom: 10 }}>
          상단고정
        </Checkbox>

        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="fullTitle"
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
            name="fullContents"
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
              maxCount={10}
              multiple={true}
            >
              <Button icon={<UploadOutlined />}>업로드(최대 10개)</Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>

        <div
          style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <GreenBtn onClick={handleGreenButtonClick}>등록</GreenBtn>
          <PinkBtn
            onClick={handleCancelConfirmation}
            style={{ marginLeft: 20 }}
          >
            취소
          </PinkBtn>
        </div>
      </div>

      <ModalOneBtn
        isOpen={isOpen}
        handleOk={() => setIsOpen(false)} // 모달 닫기
        title="이미지 업로드 제한"
        subTitle="이미지는 최대 10개까지 업로드할 수 있습니다."
      />
    </div>
  );
};

export default NoticeWrite;
