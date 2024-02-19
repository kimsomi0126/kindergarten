import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEditAlbum, putAlbum } from "../../api/album/album_api";
import { IMG_URL } from "../../api/config";
import { AlbumWrap, FileListStyle, WriteWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import ModalOneBtn from "../ui/ModalOneBtn";
import ModalTwoBtn from "../ui/ModalTwoBtn";
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
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumContents, setAlbumContents] = useState("");
  const [albumPics, setAlbumPics] = useState([]);
  const [newPics, setNewPics] = useState([]);
  const [deletedPics, setDeletedPics] = useState([]);
  const [isEditConfirmModalVisible, setIsEditConfirmModalVisible] =
    useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isMinimumWarningVisible, setIsMinimumWarningVisible] = useState(false);
  const uploadAreaStyle = {
    height: "5rem",
    lineHeight: "5rem",
  };
  const handleGreenButtonClick = () => {
    setIsEditConfirmModalVisible(true); // 수정 확인 모달을 표시
  };
  const handleEditCancel = () => {
    setIsEditConfirmModalVisible(false); // 모달 닫기
  };
  const handleEditConfirm = () => {
    // 모달에서 '확인' 버튼 클릭 시 호출될 함수
    formRef.current.submit(); // Form의 submit 메서드 호출
    setIsEditConfirmModalVisible(false); // 모달 닫기
  };

  const handleSuccess = response => {
    setIsSuccessModalVisible(true); // 성공 메시지 모달 표시
  };

  const handleModalClose = () => {
    setIsSuccessModalVisible(false); // 모달 닫기
    navigate(`/album/details/${pno}`); // 성공 후 상세 페이지로 이동
  };

  // 이미지 삭제 시 최소 파일 수 검증 경고 모달을 닫는 함수
  const handleCloseMinimumWarning = e => {
    setIsMinimumWarningVisible(false); // 경고 모달 상태를 false로 변경하여 닫음
    e.stopPropagation();
    // 여기에 필요한 추가 로직을 배치할 수 있음
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
        // console.log("취소가 확인되었습니다.");
        navigate("/album"); // 사용자를 앨범 목록 페이지로 이동
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
          iteacher: 1,
          albumTitle: data.albumTitle,
          albumContents: data.albumContents,
          ialbum: pno,
          delPics: deletedPics,
        }),
      ],
      { type: "application/json" },
    );
    formData.append("dto", dto);

    // 새로 추가된 이미지 파일을 FormData에 추가합니다.
    fileList.forEach(async file => {
      const response = await fetch(file);
      const data = await response.blob();
      if (file.originFileObj) {
        // 새로운 파일인 경우, 파일 데이터를 추가합니다.
        formData.append("pics", file.originFileObj);
      }
    });

    // 서버에 요청을 보냅니다.
    try {
      const response = await putAlbum({
        product: formData,
        successFn: handleSuccess,
        failFn: handleFailure,
        errorFn: handleError,
      });

      // 응답 처리
      // console.log("Response from putAlbum:", response);
    } catch (error) {
      handleError(error.message);
    }
  };

  useEffect(() => {
    const fetchAlbumData = async () => {
      getEditAlbum({
        pno: pno,
        successFn: data => {
          setAlbumData(data); // Set the album data in state
          setAlbumData({ ...data });
          setAlbumTitle(data.albumTitle);
          setAlbumContents(data.albumContents);
          // Update form fields with the album data
          form.setFieldsValue({
            albumTitle: data.albumTitle,
            albumContents: data.albumContents,
          });

          // Transform album pictures for the fileList state
          const newData = data.albumPic;
          const transformedFileList = newData.map((albumPic, index) => ({
            uid: albumPic.ialbumPic, // uid is required to be unique
            name: albumPic.albumPic, // file name
            status: "done", // upload status
            url: `${imgpath}/${pno}/${albumPic.albumPic}`, // file URL, adjust the path as needed
          }));
          console.log("transformedFileList", transformedFileList);
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

  // 이미지 파일을 삭제할 때 호출될 함수
  const handleRemove = file => {
    // 이미지 파일 리스트의 길이가 2개 이상일 때만 삭제 처리
    if (fileList.length > 1) {
      const newFileList = fileList.filter(item => item.uid !== file.uid);
      setFileList(newFileList);
      if (file.uid) {
        setDeletedPics([...deletedPics, file.uid]);
      }
      return true; // 삭제 처리를 진행
    } else {
      // 이미지 파일이 1개만 남았을 경우, 경고 모달 표시
      setIsMinimumWarningVisible(true);
      return false; // 삭제 처리를 중지
    }
  };

  return (
    <AlbumWrap paddingTop={40} width={100} height={100}>
      <PageTitle>활동앨범</PageTitle>
      <Form ref={formRef} form={form} onFinish={onFinish}>
        <WriteWrap>
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
              onRemove={handleRemove}
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
        </WriteWrap>
        <BtnWrap style={{ justifyContent: "flex-end" }}>
          <GreenBtn type="button" onClick={handleGreenButtonClick}>
            수정
          </GreenBtn>
          <PinkBtn type="button" onClick={handleCancelConfirmation}>
            취소
          </PinkBtn>
        </BtnWrap>
      </Form>
      <ModalTwoBtn
        isOpen={isEditConfirmModalVisible}
        handleOk={handleEditConfirm}
        handleCancel={handleEditCancel}
        title="앨범 수정 확인"
        subTitle={`앨범을 수정하시겠습니까? \n수정하신 내용은 되돌릴 수 없습니다.`}
      ></ModalTwoBtn>

      <Link to="/album">
        <ModalOneBtn
          isOpen={isSuccessModalVisible}
          handleOk={handleModalClose}
          title="앨범 수정 완료"
          subTitle={`성공적으로 수정되었습니다. \n 수정 내용을 확인하시려면 확인 버튼을 클릭해주세요.`}
        ></ModalOneBtn>
        <ModalOneBtn
          isOpen={isMinimumWarningVisible}
          handleOk={handleCloseMinimumWarning}
          title="이미지 파일 경고"
          subTitle={`최소 하나의 이미지파일은 업로드 되어야 합니다.`}
        ></ModalOneBtn>
        {/* <Modal
          title="수정 완료"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="확인"
          cancelButtonProps={{ style: { display: "none" } }}
          width={350}
        >
          <p>성공적으로 수정되었습니다.</p>
        </Modal> */}
      </Link>
    </AlbumWrap>
  );
};

export default ModifyAlbum;
