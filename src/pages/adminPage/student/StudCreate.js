import React, { useState } from "react";
import { PageTitle } from "../../../styles/basic";
import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
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
  StudFormWrap,
} from "../../../styles/adminstyle/studcreate";
import { GreenBtn, OrangeBtn, PinkBtn } from "../../../styles/ui/buttons";

const StudentCreate = () => {
  const [zodecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ]);
  const handleChange = info => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-1);

    // 2. Read from response and show file link
    newFileList = newFileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange: handleChange,
    multiple: true,
  };
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
    height: "500px",
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
      <PageTitle>원생등록</PageTitle>
      <StudFormWrap>
        {/* 기본정보 */}
        <BasicInfo>
          <p>기본 정보</p>
          <BasicInfoForm>
            <BasicInfoItem>
              <Form.Item
                style={{
                  width: "33%",
                }}
              >
                <Input placeholder="이름" />
              </Form.Item>
              <Form.Item
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
              <Form.Item>
                <Input
                  type="text"
                  value={zodecode}
                  onChange={e => setZonecode(e.target.value)}
                  placeholder="우편 번호"
                />
              </Form.Item>
              <OrangeBtn onClick={toggleHandler}>주소 검색</OrangeBtn>
              {isOpen && (
                <Modal
                  title="주소 검색"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
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
            <Form.Item
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
            </Form.Item>
            <Form.Item
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
            </Form.Item>
            <Form.Item
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
              <Button icon={<UploadOutlined />}>파일첨부</Button>
            </Form.Item>
            <Form.Item>
              <Upload {...props} fileList={fileList}></Upload>
            </Form.Item>
          </ImgInfoForm>
        </ImgInfo>
        {/* 비상연락처 */}
        <PhoneInfo>
          <p>비상 연락처</p>
          <PhoneInfoForm>
            <Form.Item
              style={{
                width: "50%",
              }}
            >
              <Input type="text" placeholder="이름 입력" />
            </Form.Item>
            <Form.Item
              style={{
                width: "50%",
              }}
            >
              <Input
                type="tel"
                pattern="[0-9]*"
                placeholder="휴대폰 번호 입력 // 하이픈(-) 제외"
              />
            </Form.Item>
          </PhoneInfoForm>
        </PhoneInfo>
        {/* 관리자메모 */}
        <AdminMemo>
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
        <GreenBtn>등록</GreenBtn>
        <PinkBtn>취소</PinkBtn>
      </BottomBt>
    </>
  );
};

export default StudentCreate;
