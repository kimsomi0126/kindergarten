import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, TreeSelect, Checkbox } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../api/config";
import {
  getIndchildrenList,
  postIndNotice,
} from "../../api/individualNotice/indivNoticeApi";
import { FileListStyle } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import ModalOneBtn from "../ui/ModalOneBtn";

const path = `${SERVER_URL}/api/notice`;

const IndWriteComponent = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const ikid = serchParams.get("ikid");
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [treeData, setTreeData] = useState([]);
  const navigate = useNavigate();
  const [noticeCheck, setNoticeCheck] = useState([]);

  // 모달 상태 관리
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  useEffect(() => {
    fetchChildrenList();
  }, []);

  const fetchChildrenList = async () => {
    try {
      const response = await getIndchildrenList({
        product: {}, // 필요한 경우에는 요청에 필요한 데이터를 여기에 전달하세요
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
    setNoticeCheck(e.target.checked);
  };

  const handleChildrenListFail = errorMessage => {
    console.error("Failed to fetch children list:", errorMessage);
    // 실패했을 때 적절한 처리를 수행하세요
  };

  const handleChildrenListError = error => {
    console.error("Error while fetching children list:", error);
    // 에러가 발생했을 때 적절한 처리를 수행하세요
  };

  const formRef = useRef();

  const handleGreenButtonClick = () => {
    formRef.current.submit();
  };

  const handleChange = info => {
    let fileList = [...info.fileList].filter(file => !!file.status);
    setFileList(fileList);
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
    console.log("data", data);
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          ikids: ikid,
          noticeTitle: data.noticeTitle,
          noticeContents: data.noticeContents,
          noticeCheck: noticeCheck ? 1 : 0,
        }),
      ],
      { type: "application/json" },
    );
    formData.append("dto", dto);
    fileList.forEach(file => {
      formData.append("pics", file.originFileObj);
    });

    postIndNotice({
      product: formData,
      successFn: handleSuccess,
      failFn: handleFail,
      errorFn: handleError,
    });
  };

  const handleCancelOk = () => {
    navigate(`/ind?year=2024&page=1&iclass=0`);
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
    console.error("알림장 업로드 오류:", error);
    Modal.error({
      title: "알림장 업로드 중 오류 발생",
      content: error,
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
    <div>
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
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            onChange={value => console.log(value)}
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
          <GreenBtn onClick={handleGreenButtonClick}>등록</GreenBtn>
          <PinkBtn type="button" onClick={handleCancelConfirmation}>
            취소
          </PinkBtn>
        </div>
      </div>

      {/* 모달창 */}
      <Link to="/ind?year=2024&page=1&iclass=0">
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
      </Link>
    </div>
  );
};

export default IndWriteComponent;
