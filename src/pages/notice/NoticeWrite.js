import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, Upload } from "antd";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileListStyle } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";

import { postNotice } from "../../api/notice/notice_api";
import { SERVER_URL } from "../../api/config";
const path = `${SERVER_URL}/api/full`;

// 서버로 보낼 데이터 구성

const NoticeWrite = ({ location }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fullNoticeFix, setFullNoticeFix] = useState(false); // 새로운 상태 추가
  const navigate = useNavigate();

  const formRef = useRef(); // Form 컴포넌트에 대한 ref 생성

  const handleGreenButtonClick = () => {
    formRef.current.submit(); // Form의 submit 메서드 호출
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
    setFullNoticeFix(e.target.checked);
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
      onOk: () => handleCancelOk(),
      okText: "확인",
      cancelText: "취소",
      onCancel: () => {},
    });
  };

  const onFinish = async data => {
    console.log("fileList", fileList);
    console.log("fullNoticeFix", fullNoticeFix); // 확인용 로그

    const formData = new FormData();

    // 글 정보를 담은 dto Blob객체 생성
    const dto = new Blob(
      [
        JSON.stringify({
          iteacher: 1,
          fullTitle: data.fullTitle,
          fullContents: data.fullContents,
          fullNoticeFix: fullNoticeFix ? 1 : 0,
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
    postNotice({
      product: formData,
      successFn: handleSuccess,
      failFn: handleFail,
      errorFn: handleError,
    });
  };

  const handleCancelOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.

    // 예시: 삭제 처리 후 /notice 페이지로 이동
    navigate("/notice");

    setIsModalVisible(false);
  };

  const handleSuccess = response => {
    setIsModalVisible(true);
    // 성공적으로 업로드 완료 후 처리할 작업을 추가할 수 있습니다.
  };

  const handleFail = errorMessage => {
    // 업로드 실패 시 처리할 작업을 추가할 수 있습니다.
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
              // maxCount={3}
              multiple={true}
            >
              <Button icon={<UploadOutlined />}>업로드</Button>
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

      <Link to="/notice">
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
    </div>
  );
};

export default NoticeWrite;
