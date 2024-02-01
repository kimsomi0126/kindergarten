// ModifyAlbum.js
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAlbum, putAlbum } from "../../api/album/album_api";
import { IMG_URL } from "../../api/config";
import { AlbumWrap, FileListStyle } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";
const path = `${IMG_URL}/api/album`;
const imgpath = `${IMG_URL}/pic/album`;
const customRequest = ({ onSuccess }) => {
  onSuccess("ok");
};
const initAlbumCommnet = [
  {
    albumTitle: "",
    albumContents: "",
    albumPic: [],
    albumComments: [],
    createdAt: "",
  },
];
const ModifyAlbum = () => {
  const { pno } = useParams();
  const formRef = useRef();
  const [albumData, setAlbumData] = useState(initAlbumCommnet); // albumData 상태를 추가

  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = info => {
    let fileList = [...info.fileList].filter(file => !!file.status);
    setFileList(fileList);
  };

  const uploadAreaStyle = {
    height: "150px",
    lineHeight: "150px",
  };
  const handleGreenButtonClick = () => {
    formRef.current.submit(); // Form의 submit 메서드 호출
  };

  const onFinish = async data => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          iteacher: 1,
          albumTitle: data.albumTitle,
          albumContents: data.albumContents,
          ialbum: pno,
        }),
      ],
      { type: "application/json" },
    );
    formData.append("dto", dto);

    // 새로 추가된 이미지 파일을 FormData에 추가
    fileList.forEach(file => {
      if (file.originFileObj) {
        // originFileObj 속성이 있으면 새로운 파일이므로 FormData에 추가
        formData.append("pics", file.originFileObj);
      }
    });

    // 기존 이미지 파일을 FormData에 추가
    albumData.albumPic.forEach(pic => {
      // 여기서 pic는 기존 이미지 파일의 이름(또는 경로)입니다.
      // 이를 서버가 인식할 수 있는 형식의 File 객체로 변환해서 추가해야 합니다.
      // 예시: fetch를 사용하여 이미지를 blob으로 가져오고, 이를 File 객체로 변환해서 추가
      // 주의: 이는 비동기 작업이므로, 모든 파일을 처리한 후에 putAlbum을 호출해야 합니다.
      fetch(`${imgpath}/${pno}/${pic}`).then(response => {
        response.blob().then(blob => {
          const file = new File([blob], pic, { type: "image/jpeg" }); // MIME 타입 설정이 필요
          formData.append("pics", file);
        });
      });
    });

    // 모든 파일 처리가 완료되면, putAlbum을 호출
    // 주의: 비동기 작업을 동기적으로 처리해야 하므로, Promise.all 또는 async/await 구조를 사용할 필요가 있음
    // putAlbum 호출 부분은 모든 파일이 formData에 추가된 후에 위치해야 합니다.
  };

  const handleSuccess = response => {
    setIsModalVisible(true);
    console.log("수정이 성공적으로 완료되었습니다.", response);
    // 성공적으로 업로드 완료 후 처리할 작업을 추가할 수 있습니다.
    // 예를 들어, 수정된 앨범의 상세 페이지로 리디렉션할 수 있습니다.
    navigate(`/album/details/${pno}`);
  };

  const handleFailure = errorMessage => {
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
        console.log("취소가 확인되었습니다.");
        navigate("/album"); // 사용자를 앨범 목록 페이지로 이동
      },
      okText: "확인",
      cancelText: "계속 수정",
    });
  };

  useEffect(() => {
    const fetchAlbumData = async () => {
      getAlbum({
        pno: pno,
        successFn: data => {
          setAlbumData(data); // Set the album data in state

          // Update form fields with the album data
          form.setFieldsValue({
            albumTitle: data.albumTitle,
            albumContents: data.albumContents,
          });

          // Transform album pictures for the fileList state
          const transformedFileList = data.albumPic.map((pic, index) => ({
            uid: index.toString(), // uid is required to be unique
            name: pic, // file name
            status: "done", // upload status
            url: `${imgpath}/${pno}/${pic}`, // file URL, adjust the path as needed
          }));
          setFileList(transformedFileList);
        },
        failFn: errorMessage => {
          console.error("Album fetch failed:", errorMessage);
          // Handle failure (show error message to user, etc.)
        },
        errorFn: errorData => {
          console.error("Error fetching album:", errorData);
          // Handle error (show error message to user, etc.)
        },
      });
    };

    fetchAlbumData();
  }, [pno, form]);

  const beforeUpload = file => {
    // 새로 업로드되는 파일을 fileList에 추가
    const newFileList = [...fileList, file];
    setFileList(newFileList);
    return false; // 자동 업로드를 방지
  };

  const onRemove = file => {
    // 파일이 제거될 때 fileList에서 해당 파일을 제거
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
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
        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="albumTitle"
            initialValue={albumData.albumTitle} // 기존 값 설정
            rules={[{ required: true, message: "제목을 입력해주세요!" }]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>

          <Form.Item
            name="albumContents"
            initialValue={albumData.albumContents} // 기존 값 설정
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
              style={uploadAreaStyle}
              // onPreview={handlePreview}
            >
              <Button icon={<UploadOutlined />}>업로드 </Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>
        <div
          style={{
            paddingTop: 15,
            float: "right",
            // position: "absolute",
            // background: "red",
          }}
        >
          <GreenBtn onClick={handleGreenButtonClick}>수정</GreenBtn>

          <PinkBtn
            onClick={handleCancelConfirmation}
            style={{ marginLeft: 20 }}
          >
            취소
          </PinkBtn>
        </div>
      </div>

      <Link to="/album">
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
    </AlbumWrap>
  );
};

export default ModifyAlbum;
