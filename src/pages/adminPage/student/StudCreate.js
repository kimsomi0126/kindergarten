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
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} 파일 첨부 성공`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} 파일 첨부 실패`);
    }
  },
};

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
  // 등록
  const [student, setStudent] = useState(initState);
  // 정보 업데이트
  const handleChange = e => {
    student[e.target.name] = e.target.value;
    setStudent({ ...student });
  };
  const uploadRef = useRef(null);
  // 파일 업로드 실행
  const handleClick = () => {
    // const files = uploadRef.current.files;
    const files = uploadRef.current.fileList;
    // console.log(uploadRef.current.fileList[0]);
    const filesTotal = files.length;
    const formData = new FormData();
    for (let i = 0; i < filesTotal; i++) {
      formData.append("files", files[i]);
    }
    formData.append("pic", files[0].name);
    formData.append("kidNm", student.kidNm);
    formData.append("iclass", student.iclass);
    formData.append("gender", student.gender);
    formData.append("birth", student.birth);
    formData.append("address", student.address);
    formData.append("memo", student.memo);
    formData.append("emerNm", student.emerNm);
    formData.append("emerNb", student.emerNb);
    console.log(student);
    // 제품 정보 전송하기
    // postStudentCreate({ student: formData, successFn, failFn, errorFn });
  };

  const successFn = result => {
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };
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
        {/* 기본정보 */}
        <BasicInfo>
          <p>기본 정보</p>
          <BasicInfoForm>
            <BasicInfoItem>
              <Form.Item
                name="kidNm"
                onChange={e => handleChange(e)}
                style={{
                  width: "33%",
                }}
              >
                <Input placeholder="이름" value={student.kidNm} />
              </Form.Item>
              <Form.Item
                name="birth"
                onChange={e => handleChange(e)}
                style={{
                  width: "33%",
                }}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  placeholder="생년월일"
                  value={student.birth}
                />
              </Form.Item>
              <Form.Item
                name="gender"
                onChange={e => handleChange(e)}
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
            <BasicInfoCode>
              <Form.Item name="adress" onChange={e => handleChange(e)}>
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
          </BasicInfoForm>
        </BasicInfo>
        {/* 재원정보 */}
        <ClassInfo>
          <p>재원 정보</p>
          <ClassInfoForm>
            {/* <Form.Item
              style={{
                width: "33%",
              }}
            >
              <DatePicker
                placeholder="입학 날짜"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item> */}
            {/* <Form.Item
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
                      재원 상태
                    </span>
                  ),
                }}
              >
                <Select.Option value="0">재원중</Select.Option>
                <Select.Option value="-1">졸업</Select.Option>
                <Select.Option value="-2">퇴소</Select.Option>
              </Select>
            </Form.Item> */}
            <Form.Item
              name="iclass"
              onChange={e => handleChange(e)}
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
              <Upload ref={uploadRef} {...props}>
                <Button icon={<UploadOutlined />}>파일 첨부</Button>
              </Upload>
            </Form.Item>
          </ImgInfoForm>
        </ImgInfo>
        {/* 비상연락처 */}
        <PhoneInfo>
          <p>비상 연락처</p>
          <PhoneInfoForm>
            <Form
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <Form.Item
                style={{
                  width: "50%",
                }}
              >
                <Input
                  type="text"
                  placeholder="이름 입력"
                  value={student.emerNm}
                />
              </Form.Item>
              <Form.Item
                name="tel"
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
                  value={student.emerNb}
                />
              </Form.Item>
            </Form>
          </PhoneInfoForm>
        </PhoneInfo>
        {/* 관리자메모 */}
        <AdminMemo value={student.memo}>
          <p>관리자 메모</p>
          <AdminMemoForm>
            <TextArea
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="관리자 메모"
              autoSize={{
                minRows: 4,
                maxRows: 5,
              }}
            />
          </AdminMemoForm>
        </AdminMemo>
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
