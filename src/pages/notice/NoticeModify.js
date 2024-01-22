import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload, Modal } from "antd";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { Link } from "react-router-dom";

const NoticeWrite = () => {
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = info => {
    let fileList = [...info.fileList];
    setFileList(fileList);
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess();
    }, 1000);
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
      okText: "확인",
      cancelText: "취소",
      onOk: handleCancel,
      onCancel: () => {},
    });
  };

  return (
    <div>
      <PageTitle>유치원 소식</PageTitle>
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
        <Checkbox onChange={onChange} style={{ marginBottom: 10 }}>
          상단고정
        </Checkbox>

        <Form>
          {/* Input 추가 */}
          <Form.Item
            name="Input"
            rules={[
              {
                required: true,
                message: "내용을 입력해주세요!",
              },
            ]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>

          {/* Input.TextArea 추가 */}
          <Form.Item
            style={{ height: "150px" }}
            name="TextArea"
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

          {/* Upload 수정 */}
          <Upload
            action="http://localhost:3000/notice/write"
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            customRequest={customRequest}
            className="upload-list-inline"
            maxCount={3}
          >
            <Button icon={<UploadOutlined />}>업로드 (최대 3개 파일)</Button>
          </Upload>
        </Form>
      </div>
      <div
        style={{
          marginTop: 35,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GreenBtn onClick={showModal}>수정</GreenBtn>
        <PinkBtn onClick={handleCancelConfirmation} style={{ marginLeft: 20 }}>
          취소
        </PinkBtn>
      </div>

      {/* 등록 버튼 클릭 시 모달 */}
      <Link to="/notice">
        <Modal
          title="수정 완료"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelButtonProps={{ style: { display: "none" } }}
          width={350}
        >
          <p>성공적으로 등록되었습니다.</p>
          {/* 모달 내용 추가 */}
        </Modal>
      </Link>
    </div>
  );
};

export default NoticeWrite;
