import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload, Modal } from "antd";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../api/notice/notice_api";

const NoticeModify = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const { tno } = useParams(); // URL 파라미터에서 tno 가져오기

  const [initialData, setInitialData] = useState({
    fullTitle: "",
    fullContents: "",
  });

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = info => {
    let fileList = [...info.fileList];

    // 사진 파일이 업로드된 경우 fileList 업데이트
    fileList = fileList.map(file => {
      if (file.response) {
        // 서버에서 응답이 오면, 파일 URL을 fileList에 추가
        file.url = file.response.url;
      }
      return file;
    });

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
      onOk: handleCancelOk,
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

  const handleCancelOk = () => {
    // 여기에 삭제 처리 로직을 추가할 수 있습니다.
    // 예시: 삭제 처리 후 /notice 페이지로 이동
    navigate("/notice");
    setIsModalVisible(false);
  };

  useEffect(() => {
    // getDetail 함수를 이용하여 상세 정보 가져오기
    // 여기에서 가져온 데이터로 form을 세팅합니다.
    const fetchData = async () => {
      try {
        const result = await getDetail({
          tno,
          successFn: data => {
            console.log("데이터 가져오기 성공:", data);

            // 데이터 구조 확인 후 수정
            setInitialData({
              fullTitle: data.fullTitle,
              fullContents: data.fullContents,
            });

            // form의 필드값을 직접 세팅
            form.setFieldsValue({
              fullTitle: data.fullTitle,
              fullContents: data.fullContents,
            });
          },
          failFn: error => {
            console.error("데이터 가져오기 실패:", error);
          },
          errorFn: error => {
            console.error("데이터 가져오기 에러:", error);
          },
        });
      } catch (error) {
        console.error("데이터 가져오기 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []); // 페이지 로드 시에만 실행

  return (
    <div>
      <PageTitle>유치원 소식 수정</PageTitle>
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

        <Form form={form} onFinish={onFinish} initialValues={initialData}>
          <Form.Item
            name="fullTitle" // 이 부분 수정
            rules={[{ required: true, message: "제목을 입력해주세요!" }]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>

          <Form.Item
            style={{ height: "150px" }}
            name="fullContents" // 이 부분 수정
            rules={[{ required: true, message: "내용을 입력해주세요!" }]}
          >
            <Input.TextArea
              placeholder="내용 입력"
              style={{ height: "150px" }}
            />
          </Form.Item>

          <Upload
            action="http://localhost:3000/notice/modify"
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
        <GreenBtn htmlType="submit" onClick={onFinish}>
          수정
        </GreenBtn>
        <PinkBtn onClick={handleCancelConfirmation} style={{ marginLeft: 20 }}>
          취소
        </PinkBtn>
      </div>

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
          <p>성공적으로 수정되었습니다.</p>
        </Modal>
      </Link>
    </div>
  );
};

export default NoticeModify;
