import React, { useState } from "react";
import ContentLayout from "../../../layouts/common/ContentLayout";
import { PageTitle } from "../../../styles/basic";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {
  AdminMemo,
  AdminMemoForm,
  BasicInfo,
  BasicInfoForm,
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
  return (
    <ContentLayout>
      <PageTitle>원생등록</PageTitle>
      <StudFormWrap style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* 기본정보 */}
        <BasicInfo>
          <p>기본정보</p>
          <BasicInfoForm>
            <Form.Item>
              <Input
                placeholder="이름"
                style={{
                  width: 420,
                }}
              />
            </Form.Item>
            <Form.Item>
              <DatePicker placeholder="생년월일" style={{ width: 420 }} />
            </Form.Item>
            <Form.Item>
              <Select
                labelInValue
                defaultValue={{
                  value: "",
                  label: (
                    <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                      성별선택
                    </span>
                  ),
                }}
                style={{
                  width: 420,
                }}
              >
                <Select.Option value="1">남자</Select.Option>
                <Select.Option value="0">여자</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="주소 입력"
                style={{
                  width: 600,
                }}
              />
              <OrangeBtn>주소 검색</OrangeBtn>
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="상세 주소 입력"
                style={{
                  width: 600,
                }}
              />
            </Form.Item>
          </BasicInfoForm>
        </BasicInfo>
        {/* 재원정보 */}
        <ClassInfo>
          <p>재원정보</p>
          <ClassInfoForm>
            <Form.Item>
              <DatePicker
                placeholder="입학날짜"
                style={{
                  width: 400,
                }}
              />
            </Form.Item>
            <Form.Item>
              <Select
                labelInValue
                defaultValue={{
                  value: "",
                  label: (
                    <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                      재원상태
                    </span>
                  ),
                }}
                style={{
                  width: 400,
                }}
              >
                <Select.Option value="0">재원중</Select.Option>
                <Select.Option value="-1">졸업</Select.Option>
                <Select.Option value="-2">퇴소</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
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
                style={{
                  width: 400,
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
          <p>프로필이미지</p>
          <ImgInfoForm>
            <Form.Item>
              <Upload {...props} fileList={fileList}>
                <Button icon={<UploadOutlined />}>파일첨부</Button>
              </Upload>
            </Form.Item>
          </ImgInfoForm>
        </ImgInfo>
        {/* 비상연락처 */}
        <PhoneInfo>
          <p>비상연락처</p>
          <PhoneInfoForm>
            <Form.Item>
              <Input
                type="text"
                placeholder="이름입력"
                style={{ width: 620 }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="tel"
                pattern="[0-9]*"
                placeholder="휴대폰 번호 입력 // 하이픈(-) 제외"
                style={{ width: 620 }}
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
    </ContentLayout>
  );
};

export default StudentCreate;
