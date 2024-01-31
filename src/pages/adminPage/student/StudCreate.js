import React, { useRef, useState } from "react";
import { PageTitle } from "../../../styles/basic";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import DaumPostcode from "react-daum-postcode";
import {
  AdminMemo,
  AdminMemoForm,
  BasicInfo,
  BasicInfoAdress,
  BasicInfoCode,
  BasicInfoForm,
  BasicInfoItem,
  BottomBt,
  ClassInfo,
  ClassInfoForm,
  ImgInfo,
  ImgInfoForm,
  PhoneInfo,
  PhoneInfoForm,
  StudFormTop,
  StudFormWrap,
} from "../../../styles/adminstyle/studcreate";
import { GreenBtn, PinkBtn } from "../../../styles/ui/buttons";
import ModalTwoBtn from "../../../components/ui/ModalTwoBtn";
import ModalOneBtn from "../../../components/ui/ModalOneBtn";
import { postStudentCreate } from "../../../api/adminPage/admin_api";

// 프로필 이미지 첨부 (AntDesign)
const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  // onChange(info) {
  //   if (info.file.status !== "uploading") {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === "done") {
  //     message.success(`${info.file.name} 파일 첨부 성공`);
  //   } else if (info.file.status === "error") {
  //     message.error(`${info.file.name} 파일 첨부 실패`);
  //   }
  // },
};

// 초기값
const initState = {
  pic: "",
  dto: {
    kidNm: "",
    iclass: 0,
    gender: 0,
    birth: "",
    address: "",
    memo: "",
    emerNm: "",
    emerNb: "",
  },
};

const StudentCreate = () => {
  // 원생 등록
  const [student, setStudent] = useState(initState);
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = info => {
    let fileList = [...info.fileList].filter(file => !!file.status);
    setFileList(fileList);
  };

  const onFinish = async data => {
    console.log("fileList", fileList);
    const formData = new FormData();
    console.log("data", data);
    const dto = new Blob(
      [
        JSON.stringify({
          kidNm: data.kidNm,
          iclass: data.iclass,
          gender: data.gender,
          birth: data.birth,
          address: data.address,
          memo: data.memo,
          emerNm: data.emerNm,
          emerNb: data.emerNb,
        }),
      ],
      { type: "application/json" },
    );

    formData.append("dto", dto);

    fileList.forEach(file => {
      formData.append("pics", file.originFileObj);
    });

    // formData를 서버에 전송
    postStudentCreate({
      successFn: handleSuccess,
      failFn: handleFailure,
      errorFn: handleError,
      studenet: formData,
    });
  };
  const handleSuccess = response => {
    setIsModalVisible(true);
    // 성공적으로 업로드 완료 후 처리할 작업을 추가할 수 있습니다.
  };

  const handleFailure = errorMessage => {
    // 업로드 실패 시 처리할 작업을 추가할 수 있습니다.
    // Modal.error({
    //   title: "앨범 업로드 실패",
    //   content: errorMessage,
    // });
  };

  const handleError = error => {
    console.error("앨범 업로드 오류:", error);
    // Modal.error({
    //   title: "앨범 업로드 중 오류 발생",
    //   content:
    //     "서버 오류 또는 네트워크 문제가 발생했습니다. 다시 시도해주세요.",
    // });
  };

  // 파일 업로드 실행
  const handleClick = () => {};

  // 모달창 적용
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };
  const handleCancelClick = () => {
    setIsCancelModalOpen(true);
  };

  const onCancel = () => {
    setIsCancelModalOpen(false);
  };
  // 우편번호
  const [zodecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  // Daum Post 관련
  const themeObj = {
    bgColor: "#FAFAFA", //바탕 배경색
    searchBgColor: "#00876D", //검색창 배경색
    contentBgColor: "#FFFFFF", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "#FAFAFA", //페이지 배경색
    textColor: "#222222", //기본 글자색
    queryTextColor: "#FFFFFF", //검색창 글자색
    postcodeTextColor: "#00876D", //우편번호 글자색
    emphTextColor: "#FD7900", //강조 글자색
    outlineColor: "#FFFFFF", //테두리
  };

  const postCodeStyle = {
    width: "480px",
    height: "445px",
  };
  const completeHandler = data => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
    console.log(data);
  };
  const closeHandler = state => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };
  const toggleHandler = () => {
    setIsOpen(prevOpenState => !prevOpenState);
    setIsModalOpen(true);
  };
  const inputChangeHandler = event => {
    setDetailedAddress(event.target.value);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StudFormTop>
        <PageTitle>원생 등록</PageTitle>
      </StudFormTop>
      <StudFormWrap>
        <Form onFinish={onFinish}>
          {/* 기본정보 */}
          <BasicInfo>
            <p>기본 정보</p>
            <BasicInfoForm>
              <BasicInfoItem>
                <Form.Item
                  name="kidNm"
                  style={{
                    width: "33%",
                  }}
                >
                  <Input placeholder="이름" />
                </Form.Item>
                <Form.Item
                  name="birth"
                  style={{
                    width: "33%",
                  }}
                >
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    placeholder="생년월일"
                  />
                </Form.Item>
                <Form.Item
                  name="gender"
                  style={{
                    width: "33%",
                  }}
                >
                  <Select
                    labelInValue
                    defaultValue={{
                      value: "",
                      label: (
                        <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                          성별 선택
                        </span>
                      ),
                    }}
                  >
                    <Select.Option value="1">남자</Select.Option>
                    <Select.Option value="0">여자</Select.Option>
                  </Select>
                </Form.Item>
              </BasicInfoItem>
              <Form.Item name="address">
                <BasicInfoCode>
                  <Form.Item>
                    <Input
                      disabled
                      type="text"
                      value={zodecode}
                      onChange={e => setZonecode(e.target.value)}
                      placeholder="우편 번호"
                    />
                  </Form.Item>
                  <button onClick={toggleHandler}>주소 검색</button>
                  {isOpen && (
                    <Modal
                      title="주소 검색"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={null}
                    >
                      <DaumPostcode
                        theme={themeObj}
                        style={postCodeStyle}
                        onComplete={completeHandler}
                        onClose={closeHandler}
                      />
                    </Modal>
                  )}
                </BasicInfoCode>
                <BasicInfoAdress>
                  <Form.Item
                    style={{
                      width: "50%",
                    }}
                  >
                    <Input
                      disabled
                      type="text"
                      placeholder="주소 입력"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    style={{
                      width: "50%",
                    }}
                  >
                    <Input
                      type="text"
                      placeholder="상세 주소 입력"
                      value={detailedAddress}
                      onChange={inputChangeHandler}
                    />
                  </Form.Item>
                </BasicInfoAdress>
              </Form.Item>
            </BasicInfoForm>
          </BasicInfo>
          {/* 재원정보 */}
          <ClassInfo>
            <p>재원 정보</p>
            <ClassInfoForm>
              <Form.Item
                name="iclass"
                style={{
                  width: "33%",
                }}
              >
                <Select
                  labelInValue
                  defaultValue={{
                    value: "",
                    label: (
                      <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                        반 선택
                      </span>
                    ),
                  }}
                >
                  <Select.Option value="1">무궁화반</Select.Option>
                  <Select.Option value="2">해바라기반</Select.Option>
                  <Select.Option value="3">장미반</Select.Option>
                </Select>
              </Form.Item>
            </ClassInfoForm>
          </ClassInfo>
          {/* 프로필 이미지 */}
          <ImgInfo>
            <p>프로필 이미지</p>
            <ImgInfoForm>
              <Form.Item>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>파일 첨부</Button>
                </Upload>
              </Form.Item>
            </ImgInfoForm>
          </ImgInfo>
          {/* 비상연락처 */}
          <PhoneInfo>
            <p>비상 연락처</p>
            <PhoneInfoForm>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Form.Item
                  name="emerNm"
                  style={{
                    width: "50%",
                  }}
                >
                  <Input type="text" placeholder="이름 입력" />
                </Form.Item>
                <Form.Item
                  name="emerNb"
                  rules={[
                    {
                      pattern: /^\d{10,11}$/,
                      message: "휴대폰 번호를 올바르게 입력하세요.",
                    },
                  ]}
                  style={{
                    width: "50%",
                  }}
                >
                  <Input
                    type="tel"
                    placeholder="휴대폰 번호 입력 // 하이픈(-) 제외"
                  />
                </Form.Item>
              </div>
            </PhoneInfoForm>
          </PhoneInfo>
          {/* 관리자메모 */}
          <AdminMemo>
            <p>관리자 메모</p>
            <AdminMemoForm>
              <Form.Item name="memo">
                <TextArea
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder="관리자 메모"
                  autoSize={{
                    minRows: 4,
                    maxRows: 5,
                  }}
                />
              </Form.Item>
            </AdminMemoForm>
          </AdminMemo>
        </Form>
      </StudFormWrap>
      <BottomBt>
        <GreenBtn onClick={handleClick}>등록</GreenBtn>
        {isAddModalOpen && (
          <ModalOneBtn
            isOpen={isAddModalOpen}
            handleOk={handleOk}
            title="등록 완료"
            subTitle="성공적으로 등록되었습니다."
          />
        )}
        <PinkBtn onClick={handleCancelClick}>취소</PinkBtn>
        {isCancelModalOpen && (
          <ModalTwoBtn
            isOpen={isCancelModalOpen}
            handleOk={handleOk}
            handleCancel={onCancel}
            title="정말 취소할까요?"
            subTitle="작성된 내용은 저장되지 않습니다."
          />
        )}
      </BottomBt>
    </>
  );
};

export default StudentCreate;
