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
    const dto = {
      iteacher: data.iteacher,
      albumTitle: data.albumTitle,
      albumContents: data.albumContents,
      ialbum: data.ialbum,
    };

    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" }),
    );

    if (data.pics && data.pics.length > 0) {
      data.pics.forEach(file => {
        // Check that each item is a file before appending
        if (file instanceof File) {
          formData.append("pics", file, file.name);
        }
      });
    } else {
      // If there are no images, potentially handle the scenario as required by your backend
      // For example, you might need to append a flag or handle differently if no images are provided
      console.log("No images to upload.");
    }

    // formData를 서버에 전송
    putAlbum({
      product: formData,
      successFn: handleSuccess,
      failFn: handleFailure,
      errorFn: handleError,
    });
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
