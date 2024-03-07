import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, Upload } from "antd";
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
  editIndNotice,
  getIndDetail,
  putIndDetail,
} from "../../api/individualNotice/indivNoticeApi";
import MyClass from "../../components/user/MyClass";
import { FileListStyle, WriteWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import {
  IndClass,
  IndDetailTop,
} from "../../styles/individualNotice/inddetail";
import "../../styles/notice/gallery.css";
import useCustomLogin from "../../hooks/useCustomLogin";
import { NoticeWrap } from "../../styles/notice/notice";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { IndBot } from "../../styles/individualNotice/ind";
import ModalOneBtn from "../../components/ui/ModalOneBtn";

const imgpath = `${IMG_URL}/pic/notice`;
const path = `${IMG_URL}/api/notice`;
const customRequest = ({ onSuccess }) => {
  onSuccess("ok");
};

export const obj = [
  {
    inotice: 0,
    noticeTitle: "",
    noticeContents: "",
    pics: [],
    comments: [],
    createdAt: "",
    kidNm: "",
    iclass: 0,
    ikid: 0,
    noticeCheck: 0,
  },
];

const IndivNotiModify = () => {
  const { tno } = useParams();
  const [ikidData, setIkidData] = useState(0);
  const [noticeData, setNoticeData] = useState(obj); // noticeData 상태를 추가

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
  const [deletedPic, setDeletedPic] = useState([]);
  const [form] = Form.useForm();

  // params 정보
  const [searchParams, setSearchParams] = useSearchParams();
  const ikid = searchParams.get("ikid");
  const year = searchParams.get("year");
  const page = searchParams.get("page");
  const iclass = searchParams.get("iclass");
  const kidNm = searchParams.get("kidNm");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [showExceedLimitModal, setShowExceedLimitModal] = useState(false); // 파일 제한 초과 경고 모달 상태
  const [newPics, setNewPics] = useState([]);
  const [pageNumber, setPageNumber] = useState("");

  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  // 로그인 회원 정보에서 아이 리스트 추출
  const {
    loginState,
    isLogin,
    isParentLogin,
    isTeacherLogin,
    isAdminLogin,
    isAccept,
  } = useCustomLogin();

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const returnPage = listNumber => {
    setPageNumber(listNumber.result[0]);
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmModal(true); // 취소 확인 모달 표시
  };

  const handleFail = errorMessage => {
    Modal.error({
      title: "알림장 업로드 실패",
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

  const onFinish = async data => {
    const formData = new FormData();
    console.log("data", data);
    // JSON 데이터 추가
    const noticeInfo = {
      inotice: tno,
      ikid: ikid,
      noticeTitle: data.noticeTitle,
      noticeContents: data.noticeContents,
      NoticeCheck: noticeCheck,
      // delPic: [],
    };
    console.log("noticeCheck", noticeCheck);

    // deletedPics 배열에 항목이 있는 경우에만 delPics 속성을 추가
    if (deletedPic.length > 0) {
      noticeInfo.delPic = deletedPic;
    }
    const dto = new Blob([JSON.stringify(noticeInfo)], {
      type: "application/json",
    });
    formData.append("dto", dto);

    console.log("================= 보내는 데이터 : ", dto);

    console.log("현재 남아있는 fileList ", fileList);
    fileList.forEach(async file => {
      console.log("file", file);
      if (file.originFileObj) {
        // 새로운 파일인 경우, 파일 데이터를 추가합니다.
        formData.append("pics", file.originFileObj);
      }
    });

    // 서버에 요청을 보냅니다.
    try {
      const response = await putIndDetail({
        data: formData,
        successFn: listNumber => {
          setShowSuccessModal(true), returnPage(listNumber);
        }, // 성공 모달 표시
        failFn: handleFail,
        errorFn: handleError,
      });

      // 응답 처리
      console.log("Response from putIndDetail:", response);
    } catch (error) {
      handleError(error.message);
    }
  };

  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
    navigate(
      isParentLogin
        ? `/ind/details/${pageNumber}?year=2024&page=1&ikid=${ikid}`
        : `/ind/details/${pageNumber}?year=2024&page=1&iclass=${iclass}`,
    );
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

  const onChange = e => {
    setNoticeCheck(e.target.checked ? 1 : 0);
  };

  useEffect(() => {
    const fetchNoticeData = async () => {
      editIndNotice({
        tno,
        ikid,
        successFn: data => {
          form.setFieldsValue({
            ikid: ikid,
            noticeTitle: data.noticeTitle,
            noticeContents: data.noticeContents,
          });
          // Transform album pictures for the fileList state
          console.log("데이터 확인", data);
          const transformedFileList = data.noticePics.map(
            (noticePics, index) => ({
              inoticePic: noticePics.inoticePic, // uid is required to be unique
              name: noticePics.noticePic, // file name
              status: "done", // upload status
              url: `${imgpath}/${tno}/${noticePics.noticePic}`, // file URL, adjust the path as needed
            }),
          );
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

    // editIndNotice({
    //   tno: tno,
    //   successFn: data => {
    //     setData(data);
    //     setIsLoading(false);
    //   },
    //   failFn: message => {
    //     console.error(message);
    //     setIsLoading(false);
    //   },
    //   errorFn: data => {
    //     console.error(data);
    //     setIsLoading(false);
    //   },
    // });
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
    console.log("삭제시 file", file);

    const newFileList = fileList.filter(
      item => item.inoticePic !== file.inoticePic,
    );
    setFileList(newFileList);
    if (typeof file.inoticePic === "number") {
      setDeletedPic([...deletedPic, file.inoticePic]);
    }

    return true; // 삭제 처리를 진행
  };
  console.log("data", data);
  // useEffect(() => {
  //   // console.log("삭제 목록 deletedPics : ", deletedPics);
  // }, [deletedPic]);

  // useEffect(() => {
  //   // console.log("현재 보이는 목록 fileList : ", fileList);
  // }, [fileList]);

  return (
    <NoticeWrap>
      <PageTitle>알림장 수정</PageTitle>

      <WriteWrap>
        <IndDetailTop>
          <IndClass>
            <MyClass state={parseInt(iclass)} /> <h4>{kidNm}</h4>
          </IndClass>
        </IndDetailTop>
        <Checkbox
          onChange={onChange}
          style={{ marginBottom: 10 }}
          checked={noticeCheck}
        >
          중요
        </Checkbox>
        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="noticeTitle"
            initialValue={noticeData.noticeTitle} // 기존 값 설정
            rules={[{ required: true, message: "제목을 입력해주세요!" }]}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>
          <Form.Item
            name="noticeContents"
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
              maxCount={5}
            >
              <Button icon={<UploadOutlined />}>업로드(최대 5개)</Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>
      </WriteWrap>
      <BtnWrap right>
        <GreenBtn onClick={handleGreenButtonClick}>수정</GreenBtn>
        <Link to="/ind?year=2024&page=1&iclass=0">
          <PinkBtn type="button" onClick={handleCancelConfirmation}>
            취소
          </PinkBtn>
        </Link>
      </BtnWrap>

      {/* 모달창 */}
      <Link
        to={
          isParentLogin
            ? `/ind?year=2024&page=1&ikid=${ikid}`
            : `/ind?year=2024&page=1&iclass=${iclass}`
        }
      >
        {showSuccessModal && (
          <ModalOneBtn
            isOpen={showSuccessModal}
            handleOk={handleSuccessModalOk}
            title="수정 완료"
            subTitle="성공적으로 수정되었습니다."
          />
        )}
      </Link>
    </NoticeWrap>
  );
};

export default IndivNotiModify;
