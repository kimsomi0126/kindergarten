import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { IMG_URL } from "../../api/config";
import {
  getIndAlbumDetail,
  getIndAlubm,
  putIndAlbum,
} from "../../api/indivAlbum/indivalbum_api";
import MyClass from "../../components/user/MyClass";
import { AlbumWrap, FileListStyle, WriteWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import {
  IndClass,
  IndDetailTop,
} from "../../styles/individualNotice/inddetail";
import "../../styles/notice/gallery.css";
import { NoticeWrap } from "../../styles/notice/notice";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import ModalTwoBtn from "../../components/ui/ModalTwoBtn";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import MyTag from "../../components/indivAlbum/MyTag";
const path = `${IMG_URL}/api/memory`;
const imgpath = `${IMG_URL}/pic/memory`;
const customRequest = ({ onSuccess }) => {
  onSuccess("ok");
};
export const obj = {
  pics: [""],
  dto: {
    ifullNotice: 0,
    fullTitle: "",
    fullContents: "",
    fullNoticeFix: 0,
    iteacher: 0,
  },
};

const IndivAlbumModify = () => {
  const { tno, ikid } = useParams();
  const [noticeData, setNoticeData] = useState(obj); // noticeData 상태를 추가
  const params = useSearchParams();

  const [data, setData] = useState(obj);
  const [noticeCheck, setNoticeCheck] = useState(0);
  const [postNumber, setPostNumber] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(obj);
  const [detailImage, setDetailImage] = useState([]);
  const navigate = useNavigate();
  const [treeData, setTreeData] = useState([]);
  const [noticeFix, setNoticeFix] = useState(0);
  const [selectedKids, setSelectedKids] = useState([]);
  const [deletedPics, setDeletedPics] = useState([]);
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const year = searchParams.get("year");
  const page = searchParams.get("page");
  const iclass = searchParams.get("iclass");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [showExceedLimitModal, setShowExceedLimitModal] = useState(false); // 파일 제한 초과 경고 모달 상태
  const [newPics, setNewPics] = useState([]);

  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [isEditConfirmModalVisible, setIsEditConfirmModalVisible] =
    useState(false);
  const [isMinimumWarningVisible, setIsMinimumWarningVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsSuccessModalVisible(false); // 모달 닫기
    navigate(`/album/details/${tno}`); // 성공 후 상세 페이지로 이동
  };
  const handleEditConfirm = () => {
    // 모달에서 '확인' 버튼 클릭 시 호출될 함수
    formRef.current.submit(); // Form의 submit 메서드 호출
    setIsEditConfirmModalVisible(false); // 모달 닫기
  };
  const handleEditCancel = () => {
    setIsEditConfirmModalVisible(false); // 모달 닫기
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmModal(true); // 취소 확인 모달 표시
  };
  // 이미지 삭제 시 최소 파일 수 검증 경고 모달을 닫는 함수
  const handleCloseMinimumWarning = e => {
    e.stopPropagation();
    setIsMinimumWarningVisible(false); // 경고 모달 상태를 false로 변경하여 닫음
    // 여기에 필요한 추가 로직을 배치할 수 있음
  };

  const handleFail = errorMessage => {
    Modal.error({
      title: "알림장 업로드 실패",
      content: errorMessage,
    });
  };

  const handleError = error => {
    console.error("추억앨범 수정 오류:", error);
    Modal.error({
      title: "추억앨범 수정 중 오류 발생",
      content:
        "서버 오류 또는 네트워크 문제가 발생했습니다. 다시 시도해주세요.",
    });
  };
  const onFinish = async data => {
    const formData = new FormData();

    // deletedPics 배열에 항목이 있는 경우에만 delPics 속성을 추가
    const delPicsData = deletedPics.length > 0 ? deletedPics : null;
    // JSON 데이터 추가
    const noticeInfo = {
      ikid: [...noticeData.ikid],
      imemory: tno,
      memoryTitle: data.memoryTitle,
      memoryContents: data.memoryContents,
      delPics: delPicsData,
    };

    const dto = new Blob([JSON.stringify(noticeInfo)], {
      type: "application/json",
    });
    formData.append("dto", dto);

    fileList.forEach(file => {
      if (file.originFileObj) {
        // 새로운 파일인 경우, 파일 데이터를 추가합니다.
        formData.append("pics", file.originFileObj, file.name);
      }
    });

    // 서버에 요청을 보냅니다.
    try {
      const response = await putIndAlbum({
        data: formData,
        successFn: () => setShowSuccessModal(true), // 성공 모달 표시
        failFn: handleFail,
        errorFn: handleError,
      });
    } catch (error) {
      handleError(error.message);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const formRef = useRef();

  const handleGreenButtonClick = () => {
    formRef.current.submit();
  };

  const getClassTitle = classNumber => {
    switch (classNumber) {
      case 1:
        return "무궁화반";
      case 2:
        return "해바라기반";
      case 3:
        return "장미반";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchNoticeData = async () => {
      // 기존 정보를 가져와서
      getIndAlubm({
        tno: tno,
        successFn: data => {
          setNoticeData(data);
          form.setFieldsValue({
            memoryTitle: data.memoryTitle,
            memoryContents: data.memoryContents,
          });
          // console.log("data memoryPic", data);
          const transformedFileList = data.memoryPic.map((pic, index) => ({
            imemory: pic.imemoryPic, // uid is required to be unique
            name: pic.memoryPic, // file name
            status: "done", // upload status
            url: `${imgpath}/${tno}/${pic.memoryPic}`, // file URL, adjust the path as needed
          }));
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

    getIndAlbumDetail({
      tno: tno,
      successFn: data => {
        setData(data);
        setIsLoading(false);
      },
      failFn: message => {
        console.error(message);
        setIsLoading(false);
      },
      errorFn: data => {
        console.error(data);
        setIsLoading(false);
      },
    });

    fetchNoticeData();
  }, [tno]);

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
    setFileList(newFileList); // 기존 파일 리스트 업데이트
    const newUploadedPics = newFileList
      .filter(file => file.originFileObj) // 새로 업로드된 파일만 선택
      .map(file => file.name); // 파일 이름 추출
    setNewPics(newUploadedPics); // 새로 업로드된 파일 이름을 상태에 저장
  };
  // 이미지 파일을 삭제할 때 호출될 함수
  const onRemove = file => {
    const newFileList = fileList.filter(item => item.imemory !== file.imemory);
    setFileList(newFileList);
    if (typeof file.imemory === "number") {
      setDeletedPics([...deletedPics, file.imemory]);
    }

    return true; // 삭제 처리를 진행
  };
  // console.log("deletedPics", deletedPics);

  // console.log("noticeData", noticeData);
  return (
    <AlbumWrap>
      <PageTitle>추억앨범 수정</PageTitle>
      <WriteWrap>
        <IndDetailTop>
          <IndClass>
            {data.kids && data.kids.length > 0 && <MyTag state={data.kids} />}
          </IndClass>
        </IndDetailTop>
        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="memoryTitle"
            initialValue={noticeData.memoryTitle} // 기존 값 설정
            rules={[{ required: true, message: "제목을 입력해주세요!" }]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>
          <Form.Item
            name="memoryContents"
            initialValue={noticeData.memoryContents} // 기존 값 설정
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
              maxCount={10}
              style={{ lineHeight: "15rem" }}
            >
              <Button icon={<UploadOutlined />}>업로드</Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>
      </WriteWrap>
      <BtnWrap right>
        <GreenBtn onClick={handleGreenButtonClick}>수정</GreenBtn>
        <PinkBtn type="button" onClick={handleCancelConfirmation}>
          취소
        </PinkBtn>
      </BtnWrap>
      <ModalTwoBtn
        isOpen={isEditConfirmModalVisible}
        handleOk={handleEditConfirm}
        handleCancel={handleEditCancel}
        title="앨범 수정 확인"
        subTitle={`앨범을 수정하시겠습니까? \n수정하신 내용은 되돌릴 수 없습니다.`}
        maskClosable={false}
      ></ModalTwoBtn>
      {/* ModalTwoBtn 사용하여 취소 확인 모달 표시 */}
      <ModalTwoBtn
        isOpen={showCancelConfirmModal}
        handleOk={() => {
          setShowCancelConfirmModal(false); // 모달 닫기
          navigate(
            `/ind/album/details/${tno}?year=${year}&page=1&iclass=${
              iclass === 4 ? 0 : iclass
            }`,
          ); // 사용자를 앨범 목록 페이지로 이동
        }}
        handleCancel={() => {
          setShowCancelConfirmModal(false); // 모달 닫기
        }}
        title="정말 취소하시겠습니까?"
        subTitle="수정 내용이 저장되지 않습니다."
        maskClosable={false}
      />
      <Link
        to={`/ind/album/details/${tno}?year=${year}&page=1&iclass=${
          iclass === 4 ? 0 : iclass
        }`}
      >
        <ModalOneBtn
          isOpen={isSuccessModalVisible}
          handleOk={handleModalClose}
          title="앨범 수정 완료"
          subTitle={`성공적으로 수정되었습니다. \n 수정 내용을 확인하시려면 확인 버튼을 클릭해주세요.`}
          maskClosable={false}
        />
        <ModalOneBtn
          isOpen={isMinimumWarningVisible}
          handleOk={handleCloseMinimumWarning}
          title="이미지 파일 경고"
          subTitle={`최소 하나의 이미지파일은 업로드 되어야 합니다.`}
          maskClosable={false}
        />
      </Link>
    </AlbumWrap>
  );
};

export default IndivAlbumModify;
