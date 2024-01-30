import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload, Modal, Result } from "antd";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createNotice } from "../../api/notice/notice_api";

const NoticeWrite = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const postWrite = result => {};

  const handleClickPostProduct = async () => {
    try {
      // 사용자가 업로드한 파일의 URL을 추출
      const uploadedFileUrls = fileList.map(file => file.url);

      // Form에서 입력받은 값들
      const { Input, TextArea, Checkbox } = form.getFieldsValue();

      // 서버로 보낼 데이터 구성
      const postData = {
        pics: uploadedFileUrls,
        dto: {
          fullTitle: Input,
          fullContents: TextArea,
          fullNoticeFix: Checkbox ? 1 : 0, // 체크박스가 선택되면 1, 아니면 0
          iteacher: 0, // iteacher 값을 필요에 따라 설정
        },
      };

      // 서버로 데이터 전송
      await createNotice({ postWrite, obj: postData });

      // 성공적으로 등록되었을 때 Modal 표시
      showModal();
    } catch (error) {
      console.error("글쓰기 등록 실패:", error);
      // 실패 시에는 Modal 등의 에러 처리 로직 추가
      // 예: Modal.error({ title: "에러", content: "글쓰기 등록에 실패했습니다." });
    }
  };

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
      onOk: handleCancleOk,
      okText: "확인",
      cancelText: "취소",
      onCancel: () => {},
    });
  };

  const onFinish = () => {
    form
      .validateFields()
      .then(() => {
        const { Input, TextArea } = form.getFieldsValue();
        if (!Input || !TextArea) {
          Modal.warning({
            title: "입력 오류",
            content: "제목과 내용을 입력해주세요.",
          });
        } else {
          showModal();
        }
      })
      .catch(errorInfo => {
        console.log("Validation failed:", errorInfo);
      });
  };
  const handleCancleOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.

    // 예시: 삭제 처리 후 /notice 페이지로 이동
    navigate("/notice");

    setIsModalVisible(false);
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

        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="Input"
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

          <Upload.Dragger
            action="http://localhost:3000/notice/write"
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            customRequest={customRequest}
            className="upload-list-inline"
            maxCount={3}
            multiple={true}
          >
            <Button icon={<UploadOutlined />}>업로드 (최대 3개 파일)</Button>
          </Upload.Dragger>
        </Form>
      </div>
      <div
        style={{
          marginTop: 35,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GreenBtn htmlType="submit" onClick={onFinish}>
          등록
        </GreenBtn>
        <PinkBtn onClick={handleCancelConfirmation} style={{ marginLeft: 20 }}>
          취소
        </PinkBtn>
      </div>

      <Link to="/notice">
        <Modal
          title="등록 완료"
          visible={isModalVisible}
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
