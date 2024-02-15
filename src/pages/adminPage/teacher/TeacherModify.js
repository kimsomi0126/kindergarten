import React from "react";
import {
  TBottomBt,
  TeacherClassForm,
  TeacherClassInfo,
  TeacherFormTop,
  TeacherFormWrap,
  TeacherIdForm,
  TeacherIdInfo,
  TeacherIdItem,
  TeacherImg,
  TeacherImgForm,
  TeacherMemo,
  TeacherMemoForm,
} from "../../../styles/adminstyle/teachercreate";
import { PageTitle } from "../../../styles/basic";
import { Button, Input, Upload, Form, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { GreenBtn, OrangeBtn, PinkBtn } from "../../../styles/ui/buttons";

const TeacherCreate = () => {
  return (
    <>
      <TeacherFormTop>
        <PageTitle>선생님 정보 수정</PageTitle>
      </TeacherFormTop>
      <Form>
        <TeacherFormWrap>
          {/* 계정정보 */}
          <TeacherIdInfo>
            <p>계정 정보</p>
            <TeacherIdForm>
              <TeacherIdItem>
                <Form.Item
                  name="teacherUid"
                  style={{
                    width: "33%",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "아이디를 입력해주세요.",
                    },
                  ]}
                >
                  <Input placeholder="아이디 입력" />
                </Form.Item>
                <Form.Item
                  name="teacherUpw"
                  style={{
                    width: "33%",
                    display: "none",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "비밀번호를 입력해주세요.",
                    },
                  ]}
                >
                  <Input placeholder="비밀번호 입력" />
                </Form.Item>
                <OrangeBtn>비밀번호 수정</OrangeBtn>
              </TeacherIdItem>
            </TeacherIdForm>
          </TeacherIdInfo>
          {/* 기본정보 */}
          <TeacherIdInfo>
            <p>기본 정보</p>
            <TeacherIdForm>
              <TeacherIdItem>
                <Form.Item
                  name="teacherNm"
                  style={{
                    width: "33%",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "이름을 입력해주세요.",
                    },
                  ]}
                >
                  <Input placeholder="이름 입력" />
                </Form.Item>
                <Form.Item
                  name="tcEmail"
                  style={{
                    width: "33%",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "이메일 주소를 입력해주세요.",
                    },
                  ]}
                >
                  <Input placeholder="이메일 입력" />
                </Form.Item>
              </TeacherIdItem>
            </TeacherIdForm>
          </TeacherIdInfo>
          {/* 재직정보 */}
          <TeacherClassInfo>
            <p>재직 정보</p>
            <TeacherClassForm>
              <Form.Item
                name="iclass"
                style={{
                  width: "33%",
                }}
                rules={[
                  {
                    required: true,
                    message: "반을 선택해주세요.",
                  },
                ]}
              >
                <Select
                  labelInValue
                  defaultValue={{
                    value: "",
                    label: (
                      <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                        담당 반 선택
                      </span>
                    ),
                  }}
                >
                  <Select.Option value="1">무궁화반</Select.Option>
                  <Select.Option value="2">해바라기반</Select.Option>
                  <Select.Option value="3">장미반</Select.Option>
                </Select>
              </Form.Item>
            </TeacherClassForm>
          </TeacherClassInfo>
          {/* 프로필 이미지 */}
          <TeacherImg>
            <p>프로필 이미지</p>
            <TeacherImgForm>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "프로필이미지를 등록해주세요.",
                  },
                ]}
              >
                <Upload required>
                  <Button icon={<UploadOutlined />}>파일 첨부</Button>
                </Upload>
              </Form.Item>
            </TeacherImgForm>
          </TeacherImg>

          {/* 선생님 소개 */}
          <TeacherMemo>
            <p>선생님 메모</p>
            <TeacherMemoForm>
              <Form.Item name="teacherIntroduce">
                <TextArea placeholder="선생님 소개" />
              </Form.Item>
            </TeacherMemoForm>
          </TeacherMemo>
        </TeacherFormWrap>
        <TBottomBt>
          <GreenBtn>등록</GreenBtn>
          <PinkBtn>취소</PinkBtn>
        </TBottomBt>
      </Form>
    </>
  );
};

export default TeacherCreate;
