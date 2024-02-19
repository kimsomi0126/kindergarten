import React, { useState, useEffect, useRef } from "react";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload, Modal } from "antd";
import { PageTitle } from "../../styles/basic";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetail, getList, putNotice } from "../../api/notice/notice_api";
import { IMG_URL, SERVER_URL } from "../../api/config";
import { FileListStyle, WriteWrap } from "../../styles/album/album";
import { NoticeWrap } from "../../styles/notice/notice";

const path = `${IMG_URL}/api/full`;
const imgpath = `${IMG_URL}/pic/fullnotice`;
const customRequest = ({ onSuccess }) => {
  onSuccess("ok");
};
const obj = [
  {
    fullTitle: "",
    fullContents: "",
    writer: "",
    createdAT: "",
    pics: [],
  },
];

const NoticeModify = () => {
  const { tno } = useParams();
  const formRef = useRef();
  const [noticeData, setNoticeData] = useState(obj); // noticeData 상태를 추가

  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [fullNoticeFix, setFullNoticeFix] = useState(false); // 새로운 상태 추가
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // const [initialData, setInitialData] = useState({
  //   fullTitle: "",
  //   fullContents: "",
  //   fullNoticeFix: "",
  //   pics: [],
  // });

  const handleGreenButtonClick = () => {
    formRef.current.submit(); // Form의 submit 메서드 호출
  };

  // URL에서 파일을 생성하고 fileList 상태를 업데이트하는 함수
  const imageUrlToFile = async imageUrl => {
    try {
      // console.log("imageUrl", imageUrl);
      const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
      const response = await fetch(imageUrl, { mode: "no-cors" });
      const blob = await response.blob();
      const imageFile = new File([blob], fileName, { type: "image/jpeg" }); // MIME type을 지정할 수 있습니다.

      // fileList에 새로운 파일을 추가합니다.
      setFileList(prevFileList => [...prevFileList, imageFile]);
    } catch (error) {
      console.error("Error converting image URL to File:", error);
    }
  };

  const onChange = e => {
    // console.log(`checked = ${e.target.checked}`);
    setFullNoticeFix(e.target.checked);
  };

  const handleImageRemove = file => {
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
  };

  const handleSuccess = data => {
    setIsModalVisible(true);
    navigate(`/notice/details/${tno}`);
    // console.log("게시글 수정 성공:", data);
  };

  const handleFailure = errorMessage => {
    Modal.error({
      title: "유치원소식 수정 실패",
      content: errorMessage,
    });
  };

  const handleError = error => {
    console.error("유치원소식 수정 오류:", error);
    Modal.error({
      title: "유치원소식 수정 중 오류 발생",
      content:
        "서버 오류 또는 네트워크 문제가 발생했습니다. 다시 시도해주세요.",
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancelConfirmation = () => {
    Modal.confirm({
      title: "정말 취소하시겠습니까?",
      content: "수정 내용이 저장되지 않습니다.",
      onOk: () => {
        // console.log("취소가 확인되었습니다.");
        navigate("/notice"); // 사용자를 앨범 목록 페이지로 이동
      },
      okText: "확인",
      cancelText: "계속 수정",
    });
  };

  const onFinish = async data => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          ifullNotice: tno,
          fullTitle: data.fullTitle,
          fullContents: data.fullContents,
          fullNoticeFix: data.fullNoticeFix,
          iteacher: 1,
          delPics: [],
        }),
      ],
      { type: "application/json" },
    );
    formData.append("dto", dto);

    // 새로 추가된 이미지 파일을 FormData에 추가합니다.
    fileList.forEach(async file => {
      console.log("file", file);
      if (file.originFileObj) {
        // 새로운 파일인 경우, 파일 데이터를 추가합니다.
        formData.append("pics", file.originFileObj);
        // } else if (file.url) {
        //   // 이미 서버에 존재하는 파일인 경우, 파일 경로를 추가합니다.
        //   formData.append("pics", file.url);
      }
    });

    console.log("formData", formData);
    // 서버에 요청을 보냅니다.
    try {
      const response = await putNotice({
        data: formData,
        successFn: handleSuccess,
        failFn: handleFailure,
        errorFn: handleError,
      });

      // 응답 처리
      console.log("Response from putNotice:", response);
    } catch (error) {
      handleError(error.message);
    }
  };

  useEffect(() => {
    const fetchNoticeData = async () => {
      getDetail({
        tno: tno,
        successFn: data => {
          setNoticeData(data);
          form.setFieldsValue({
            fullTitle: data.fullTitle,
            fullContents: data.fullContents,
          });

          // Transform album pictures for the fileList state
          const transformedFileList = data.pics.map((picObj, index) => ({
            uid: index.toString(), // uid is required to be unique
            name: picObj.pic, // file name
            status: "done", // upload status
            url: `${imgpath}/${tno}/${picObj.pic}`, // file URL, adjust the path as needed
          }));
          console.log("transformedFileList", transformedFileList);
          setFileList(transformedFileList);
        },
        failFn: errorMessage => {
          console.error("Notice fetch failed:", errorMessage);
          // Handle failure (show error message to user, etc.)
        },
        errorFn: errorData => {
          console.error("Error fetching notice:", errorData);
          // Handle error (show error message to user, etc.)
        },
      });
    };

    fetchNoticeData();
  }, [tno, form]);

  const beforeUpload = file => {
    // 새로 업로드되는 파일을 fileList에 추가
    const newFileList = [
      ...fileList,
      {
        uid: file.uid, // 파일의 고유 ID
        name: file.name, // 파일 이름
        status: "done", // 파일 상태
        originFileObj: file, // 파일 객체
      },
    ];
    setFileList(newFileList);
    return false; // 파일을 자동으로 업로드하지 않음
  };

  const handleChange = ({ fileList: newFileList }) => {
    // 업로드된 파일의 상태 변화를 처리
    setFileList(newFileList);
  };

  const onRemove = file => {
    // 파일이 제거될 때 fileList에서 해당 파일을 제거
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
  };

  return (
    <NoticeWrap>
      <PageTitle>유치원 소식 수정</PageTitle>
      <WriteWrap>
        <Checkbox
          onChange={onChange}
          style={{ marginBottom: 10 }}
          checked={fullNoticeFix}
        >
          상단고정
        </Checkbox>
        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="fullTitle"
            initialValue={noticeData.noticeTitle} // 기존 값 설정
            rules={[{ required: true, message: "제목을 입력해주세요!" }]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>
          <Form.Item
            name="fullContents"
            initialValue={noticeData.noticeContents} // 기존 값 설정
            style={{ height: "150px" }}
            rules={[{ required: true, message: "내용을 입력해주세요!" }]}
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
              beforeUpload={beforeUpload}
              onRemove={onRemove}
              onChange={handleChange}
              customRequest={customRequest}
              className="upload-list-inline"
              multiple={true}
              maxCount={3}
            >
              <Button icon={<UploadOutlined />}>업로드</Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>
      </WriteWrap>
      <BtnWrap right>
        <GreenBtn onClick={handleGreenButtonClick}>수정</GreenBtn>
        <PinkBtn onClick={handleCancelConfirmation}>취소</PinkBtn>
      </BtnWrap>

      <Link to="/notice">
        <Modal
          title="수정 완료"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelButtonProps={{ style: { display: "none" } }}
          width={350}
        >
          <p>성공적으로 수정되었습니다.</p>
        </Modal>
      </Link>
    </NoticeWrap>
  );
};

export default NoticeModify;
