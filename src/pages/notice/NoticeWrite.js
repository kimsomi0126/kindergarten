import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input, Form, Checkbox, message } from "antd";
import { PageTitle } from "../../styles/basic";

const NoticeWrite = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = info => {
    let fileList = [...info.fileList];

    setFileList(fileList);
  };

  const customRequest = ({ file, onSuccess }) => {
    // 실제로 서버에 업로드할 때 사용할 로직
    // 예시로 setTimeout을 사용해 가상의 비동기 업로드를 흉내냅니다.
    setTimeout(() => {
      onSuccess();
    }, 1000);
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
            <Input />
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
            <Input.TextArea style={{ height: "150px" }} />
          </Form.Item>

          {/* Upload 수정 */}
          <Upload
            action="http://localhost:3000/notice/write" // 실제 업로드를 처리하는 서버의 URL로 변경해주세요.
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            customRequest={customRequest} // customRequest 추가
            className="upload-list-inline"
          >
            <Button icon={<UploadOutlined />}>업로드 (최대 3개 파일)</Button>
          </Upload>
        </Form>
      </div>
    </div>
  );
};

export default NoticeWrite;
