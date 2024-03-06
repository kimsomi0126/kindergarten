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
import { useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../api/config";
import { postIndAlbum } from "../../api/indivAlbum/indivalbum_api";
import { getIndAlubm } from "../../api/indivAlbum/indivalbum_api";
import { AlbumWrap, FileListStyle, WriteWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { BtnWrap, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import ModalOneBtn from "../ui/ModalOneBtn";
import { NoticeWrap } from "../../styles/notice/notice";
import useCustomLogin from "../../hooks/useCustomLogin";

const path = `${SERVER_URL}/api/notice`;
const { SHOW_CHILD } = Cascader;

const WriteIndivAlbum = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ikid = searchParams.get("ikid");
  const year = searchParams.get("year");
  const page = searchParams.get("page");
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [treeData, setTreeData] = useState([]);
  const navigate = useNavigate();
  const [noticeCheck, setNoticeCheck] = useState(0);
  const [selectedKids, setSelectedKids] = useState([]);
  const [showExceedLimitModal, setShowExceedLimitModal] = useState(false); // 파일 제한 초과 경고 모달 상태
  const { loginState, isAdminLogin } = useCustomLogin();
  console.log("loginState", loginState);
  const iclass = loginState === 4 ? 0 : loginState.iclass;
  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  const [isImageUploadWarningVisible, setIsImageUploadWarningVisible] =
    useState(false); // 이미지 업로드 경고 모달 상태

  useEffect(() => {
    fetchChildrenList();
  }, []);

  // const beforeUpload = (file, fileList) => {
  //   const totalFiles =
  //     fileList.length + fileList.filter(f => f.status === "done").length;
  //   if (totalFiles > 5) {
  //     setShowExceedLimitModal(true); // 경고 모달 표시
  //     return Upload.LIST_IGNORE; // 파일 업로드 중단
  //   }
  //   return true; // 파일 추가를 계속 진행
  // };

  const handleExceedLimitModalOk = e => {
    setShowExceedLimitModal(false); // 경고 모달 닫기
    e.stopPropagation(); // 이벤트가 상위 엘리먼트에 전달되지 않게 막기
  };

  // 이미지 업로드 경고 모달 핸들러
  const handleImageUploadWarningOk = e => {
    setIsImageUploadWarningVisible(false); // 경고 모달 닫기
    e.stopPropagation(); // 이벤트가 상위 엘리먼트에 전달되지 않게 막기
  };

  const fetchChildrenList = async () => {
    try {
      const response = await getIndAlubm({
        product: {},
        successFn: handleChildrenListSuccess,
        failFn: handleChildrenListFail,
        errorFn: handleChildrenListError,
      });
    } catch (error) {
      console.error("Error fetching children list:", error);
    }
  };

  const handleChildrenListSuccess = data => {
    const groupedData = groupChildrenByClass(data);
    const treeData = groupedData.map(classItem => ({
      title: getClassTitle(classItem.classNumber),
      value: classItem.classNumber,
      key: classItem.classNumber,
      children: classItem.children.map(child => ({
        title: child.kidNm,
        value: child.ikid,
        key: child.ikid,
      })),
    }));
    setTreeData(treeData);
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
    setNoticeCheck(e.target.checked ? 1 : 0); // 중요 체크를 했을 때 1, 안 했을 때 0으로 설정
  };

  const handleChildrenListFail = errorMessage => {
    console.error("Failed to fetch children list:", errorMessage);
  };

  const handleChildrenListError = error => {
    console.error("Error while fetching children list:", error);
  };

  const formRef = useRef();

  const handleGreenButtonClick = () => {
    if (fileList.length === 0) {
      setIsImageUploadWarningVisible(true);
      return; // 파일이 업로드되지 않았다면 폼 제출 방지
    }
    formRef.current.submit();
  };

  const handleChange = info => {
    let newFileList = [...info.fileList].filter(file => !!file.status);
    // if (newFileList.length > 5) {
    //   // 파일 리스트의 길이가 5개를 초과할 경우 모달 창을 띄움
    //   setIsModalVisible(true);
    //   // 5개를 초과한 파일은 제외하고 설정
    //   newFileList = newFileList.slice(-5);
    // }
    setFileList(newFileList);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const customRequest = ({ onSuccess }) => {
    onSuccess("ok");
  };

  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
  };

  // 취소 확인 모달 핸들러
  const handleCancelConfirmModalOk = () => {
    setShowCancelConfirmModal(false);
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmModal(true); // 취소 확인 모달 표시
  };

  const onFinish = async data => {
    console.log("onFinish data", data);
    const formData = new FormData();
    // const dto = new Blob(
    //   [
    //     JSON.stringify({
    //       ikids: ikid,
    //       noticeTitle: data.noticeTitle,
    //       noticeContents: data.noticeContents,
    //       noticeCheck: noticeCheck ? 1 : 0,
    //     }),
    //   ],
    //   { type: "application/json" },
    // );
    // formData.append("dto", dto);

    // 파일 데이터 추가
    fileList.forEach(file => {
      formData.append("pics", file.originFileObj);
    });

    // JSON 데이터 추가
    const dto = {
      ikids: selectedKids, // ikids 필드 추가
      memoryTitle: data.memoryTitle,
      memoryContents: data.memoryContents,
    };
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" }),
    );

    postIndAlbum({
      product: formData,
      successFn: () => setShowSuccessModal(true), // 성공 모달 표시
      failFn: handleFail,
      errorFn: handleError,
    });
  };

  console.log("treeData", treeData);
  const handleCancelOk = () => {
    navigate(`/ind?year=${year}&page=1&iclass=${iclass === 4 ? 0 : iclass}`);
    setIsModalVisible(false);
  };

  const handleSuccess = () => {
    setIsModalVisible(true);
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
        navigate(
          `/ind?year=${year}}&page=1&iclass=${iclass === 4 ? 0 : iclass}`,
        );
      },
    });
  };

  const groupChildrenByClass = children => {
    const grouped = children.reduce((acc, child) => {
      const { iclass } = child;
      if (!acc[iclass]) {
        acc[iclass] = [];
      }
      acc[iclass].push(child);
      return acc;
    }, {});
    return Object.keys(grouped).map(classNumber => ({
      classNumber: parseInt(classNumber),
      children: grouped[classNumber],
    }));
  };

  return (
    <NoticeWrap>
      <PageTitle>추억앨범</PageTitle>
      <Form ref={formRef} form={form} onFinish={onFinish}>
        <WriteWrap>
          <TreeSelect
            style={{ width: "20%" }}
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

          <Form.Item
            style={{ paddingTop: "2rem" }}
            name="memoryTitle"
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
            name="memoryContents"
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
              maxCount={20}
              style={{ lineHeight: "15rem" }}
              // beforeUpload={beforeUpload}
            >
              <Button icon={<UploadOutlined />}>업로드(최대 20개)</Button>
            </Upload.Dragger>
          </FileListStyle>
        </WriteWrap>
        <BtnWrap right>
          <GreenBtn type="button" onClick={handleGreenButtonClick}>
            등록
          </GreenBtn>
          <PinkBtn type="button" onClick={handleCancelConfirmation}>
            취소
          </PinkBtn>
        </BtnWrap>
      </Form>

      {/* 모달창 */}
      <Link
        to={`/ind/album?year=${year}&page=1&iclass=${
          iclass === 4 ? 0 : iclass
        }`}
      >
        {/* 등록 성공 모달 */}
        {showSuccessModal && (
          <ModalOneBtn
            isOpen={showSuccessModal}
            handleOk={handleSuccessModalOk}
            title="등록 완료"
            subTitle="성공적으로 등록되었습니다."
          />
        )}

        {/* 취소 확인 모달 */}
        {showCancelConfirmModal && (
          <ModalOneBtn
            isOpen={showCancelConfirmModal}
            handleOk={handleCancelConfirmModalOk}
            title="정말 취소할까요?"
            subTitle="작성된 내용은 저장되지 않습니다."
          />
        )}

        {/* 이미지 업로드 경고 모달 */}
        {isImageUploadWarningVisible && (
          <ModalOneBtn
            isOpen={isImageUploadWarningVisible}
            handleOk={handleImageUploadWarningOk}
            title="이미지 업로드 경고"
            subTitle={`최소 하나의 이미지 파일은 \n 업로드 되어야 합니다.`}
            maskClosable={false}
          />
        )}
        {/* 파일 제한 초과 경고 모달 */}
        {showExceedLimitModal && (
          <ModalOneBtn
            isOpen={showExceedLimitModal}
            handleOk={handleExceedLimitModalOk}
            title="업로드 제한 초과"
            subTitle="업로드할 수 있는 파일 수는 최대 20개입니다."
            maskClosable={false}
          />
        )}
      </Link>
    </NoticeWrap>
  );
};

export default WriteIndivAlbum;
