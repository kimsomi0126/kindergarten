import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Modal,
  TreeSelect,
  Upload,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { deleteNotice, getDetail } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import "../../styles/notice/gallery.css";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import { IMG_URL } from "../../api/config";
import { FileListStyle } from "../../styles/album/album";
import { postIndNotice } from "../../api/individualNotice/indivNoticeApi";
const path = `${IMG_URL}/pic/fullnotice`;
const { SHOW_CHILD } = Cascader;
export const obj = {
  ikid: 0,
  inotice: "",
  noticeTitle: "",
  noticeContents: 0,
  noticePics: [],
};

const IndivNotiModify = () => {
  const params = useSearchParams();
  const slideInterval = 1700;

  const [postNumber, setPostNumber] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(obj);
  const [detailImage, setDetailImage] = useState([]);
  const { ikid } = useParams();
  const navigate = useNavigate();
  const [treeData, setTreeData] = useState([]);
  const [noticeFix, setNoticeFix] = useState(0);
  const [selectedKids, setSelectedKids] = useState([]);
  const [deletedPics, setDeletedPics] = useState([]);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [showExceedLimitModal, setShowExceedLimitModal] = useState(false); // 파일 제한 초과 경고 모달 상태

  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const beforeUpload = (file, fileList) => {
    const totalFiles =
      fileList.length + fileList.filter(f => f.status === "done").length;
    if (totalFiles > 5) {
      setShowExceedLimitModal(true); // 경고 모달 표시
      return Upload.LIST_IGNORE; // 파일 업로드 중단
    }
    return true; // 파일 추가를 계속 진행
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmModal(true); // 취소 확인 모달 표시
  };

  const onFinish = async data => {
    console.log("data", data);
    const formData = new FormData();

    fileList.forEach(file => {
      formData.append("pics", file.originFileObj);
    });

    // JSON 데이터 추가
    const dto = {
      ifullNotice: data.ifullNotice,
      noticeTitle: data.noticeTitle,
      noticeContents: data.noticeContents,
      fullNoticeFix: noticeFix ? 1 : 0,
      iteacher: 1,
    };

    if (deletedPics.length > 0) {
      dto.delPics = deletedPics;
    }

    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" }),
    );

    postIndNotice({
      product: formData,
      successFn: () => setShowSuccessModal(true), // 성공 모달 표시
      failFn: handleFail,
      errorFn: handleError,
    });
  };

  const handleFail = errorMessage => {
    Modal.error({
      title: "알림장 업로드 실패",
      content: errorMessage,
    });
  };

  const handleError = error => {
    console.error("오류", error);
    Modal.error({
      title: "오류",
      content: error,
      onOk: () => {
        navigate(`/ind?year=2024&page=1&iclass=0`);
      },
    });
  };

  const handleDeleteOk = async () => {
    try {
      await deleteNotice({
        ikid,
        successFn: () => {
          navigate("/ind?year=2024&page=1&iclass=0");
        },
        failFn: error => {
          console.error("삭제실패:", error);
        },
        errorFn: error => {
          console.error("삭제 에러:", error);
          // 에러 시, 필요한 처리를 추가할 수 있습니다.
        },
      });
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("삭제 처리 중 에러 발생:", error);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const formRef = useRef();

  const handleGreenButtonClick = () => {
    formRef.current.submit();
  };

  const handleChange = info => {
    let newFileList = [...info.fileList].filter(file => !!file.status);
    if (newFileList.length > 5) {
      // 파일 리스트의 길이가 5개를 초과할 경우 모달 창을 띄움
      setIsModalVisible(true);
      // 5개를 초과한 파일은 제외하고 설정
      newFileList = newFileList.slice(-5);
    }
    setFileList(newFileList);
  };

  const customRequest = ({ onSuccess }) => {
    onSuccess("ok");
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
    setNoticeFix(e.target.checked ? 1 : 0); // 중요 체크를 했을 때 1, 안 했을 때 0으로 설정
  };

  const successFn = result => {
    setDetailData(result);
    const pics = result.pics;
    const newImages = pics.map((pic, index) => ({
      original: `${path}/${ikid}/` + pic,
      thumbnail: `${path}/${ikid}/` + pic,
    }));

    setDetailImage(prevDetailImage => [...prevDetailImage, ...newImages]);
    setPostNumber(pics.length); // 이미지 번호를 1부터 시작하도록 수정
  };

  // console.log("!!!!", detailImage);
  const failFn = result => {};
  const errorFn = result => {};
  useEffect(() => {
    getDetail({ ikid, successFn, failFn, errorFn });
  }, [ikid]);
  // console.log(detailData);

  return (
    <>
      <PageTitle>알림장</PageTitle>
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
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <TreeSelect
            style={{ width: "100%" }}
            treeData={treeData}
            placeholder="유치원생 선택"
            treeCheckable={true}
            showCheckedStrategy={SHOW_CHILD}
            onChange={value => {
              if (Array.isArray(value)) {
                setSelectedKids(value);
                console.log("value check", value);
              } else {
                setSelectedKids([value]);
              }
            }}
          />
        </div>
        <Checkbox onChange={onChange} style={{ marginBottom: 10 }}>
          중요
        </Checkbox>
        <Form ref={formRef} form={form} onFinish={onFinish}>
          <Form.Item
            name="noticeTitle"
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
            name="noticeContents"
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
          <FileListStyle>
            <Upload.Dragger
              action={`${path}`}
              listType="picture"
              fileList={fileList}
              onChange={handleChange}
              customRequest={customRequest}
              className="upload-list-inline"
              multiple={true}
              beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>업로드</Button>
            </Upload.Dragger>
          </FileListStyle>
        </Form>
        <div
          style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <GreenBtn type="button" onClick={handleGreenButtonClick}>
            등록
          </GreenBtn>
          <PinkBtn type="button" onClick={handleCancelConfirmation}>
            취소
          </PinkBtn>
        </div>
      </div>

      {/* 삭제 모달 */}
      <Link to="/ind?year=2024&page=1&iclass=0">
        <Modal
          title="정말 삭제할까요?"
          open={isDeleteModalOpen}
          onOk={handleDeleteOk}
          onCancel={handleDeleteCancel}
          okText="확인"
          cancelText="취소"
        >
          <p>삭제된 내용은 복구할 수 없습니다.</p>
        </Modal>
      </Link>
    </>
  );
};

export default IndivNotiModify;
