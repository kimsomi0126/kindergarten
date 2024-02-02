import React, { useEffect, useRef, useState } from "react";
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
import { SERVER_URL } from "../../../api/config";

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

const initDto = {
  kidNm: "",
  iclass: 0,
  gender: 0,
  birth: "",
  address: "",
  memo: "",
  emerNm: "",
  emerNb: "",
};

const StudentCreate = () => {
  // 원생 등록
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dto, setDto] = useState({});
  const [pic, setPic] = useState();
  const path = `${SERVER_URL}/api/kid`;

  const onFinish = value => {
    console.log("data", value);
    const allAddress = `${value.address.postcode}) ${value.address.detail1}, ${value.address.detail2}`;
    const values = {
      ...value,
      birth: value["birth"].format("YYYY-MM-DD"),
      address: allAddress,
      iclass: parseInt(value["iclass"].value),
      gender: parseInt(value["gender"].value),
    };
    console.log(values);
    setDto(values);
  };
  console.log(dto);

  // 파일 업로드 실행
  const handleClick = () => {};

  // 모달창
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsCancelModalOpen(true);
  };

  // 우편번호
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

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

  const [form] = Form.useForm();
  const postCodeStyle = {
    width: "480px",
    height: "445px",
  };
  const completeHandler = data => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
    setInitialValues({
      address: {
        postcode: zonecode,
        detail1: address,
      },
    });
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

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [zonecode, address]);

  return (
    <>
      <StudFormTop>
        <PageTitle>원생 등록</PageTitle>
      </StudFormTop>

      <Form
        form={form}
        onFinish={onFinish}
        // onValuesChange={(changeValue, allValue) => {
        //   onValuesChange(changeValue, allValue);
        // }}
      >
        <StudFormWrap>
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
              <BasicInfoCode>
                <Form.Item name={["address", "postcode"]}>
                  <Input disabled type="text" placeholder="우편 번호" />
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
                  name={["address", "detail1"]}
                >
                  <Input disabled type="text" placeholder="주소 입력" />
                </Form.Item>
                <Form.Item
                  style={{
                    width: "50%",
                  }}
                  name={["address", "detail2"]}
                >
                  <Input type="text" placeholder="상세 주소 입력" />
                </Form.Item>
              </BasicInfoAdress>
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
                <Upload name="file" action="">
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
                <TextArea placeholder="관리자 메모" />
              </Form.Item>
            </AdminMemoForm>
          </AdminMemo>
        </StudFormWrap>
        <BottomBt>
          <GreenBtn onClick={handleClick}>등록</GreenBtn>
          <PinkBtn type="button" onClick={handleCancelClick}>
            취소
          </PinkBtn>
        </BottomBt>
      </Form>
    </>
  );
};

export default StudentCreate;
