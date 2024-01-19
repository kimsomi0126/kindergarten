import React, { useState } from "react";
import { Checkbox, Col, Form, Input, Modal, Select } from "antd";
import { GreenBtn } from "../../styles/ui/buttons";
import { FormWrap, PrivacyWrap } from "../../styles/user/login";
import { LogoWrap } from "../../styles/basic";
import PrivacyPolicy from "../../components/user/PrivacyPolicy";

const { Option } = Select;

const SignupForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const kidName = "신짱구";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = <Form.Item name="prefix" noStyle></Form.Item>;

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map(domain => `${value}${domain}`),
      );
    }
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <FormWrap>
        <LogoWrap>
          <h3>학부모 회원가입</h3>
          <p>회원정보를 입력해주세요.</p>
        </LogoWrap>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="gender"
            rules={[
              {
                required: true,
                message: `${kidName}와의 관계를 선택해주세요.`,
              },
            ]}
          >
            {/* 가족관계 = 1 : 부, 2 : 모, 3 : 조부, 4 : 조모, 5 : 형제/자매, 6 : 그 외 */}
            <Select placeholder={kidName + "어린이와의 관계"}>
              <Option value="1">부</Option>
              <Option value="2">모</Option>
              <Option value="3">조부</Option>
              <Option value="4">조모</Option>
              <Option value="5">형제/자매</Option>
              <Option value="6">그 외</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="id"
            style={{ marginBottom: 20 }}
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
            name="name"
            style={{ marginBottom: 20 }}
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
            name="password"
            style={{ marginBottom: 20 }}
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요.",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="비밀번호 입력" />
          </Form.Item>

          <Form.Item
            name="confirm"
            style={{ marginBottom: 20 }}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "비밀번호를 한번 더 입력해주세요.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "비밀번호가 일치하지 않습니다. 다시 작성해주세요.",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="비밀번호 확인" />
          </Form.Item>

          <Form.Item
            name="phone"
            style={{ marginBottom: 20 }}
            rules={[
              {
                required: true,
                message: "전화번호를 입력해주세요.",
              },
            ]}
          >
            <Input placeholder="전화번호 입력" />
          </Form.Item>
          <Form.Item
            name="email"
            style={{ marginBottom: 20 }}
            rules={[
              {
                type: "email",
                message: "올바른 E-mail 양식이 아닙니다.",
              },
              {
                required: true,
                message: "이메일을 입력해주세요.",
              },
            ]}
          >
            <Input placeholder="이메일 입력" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("개인정보 처리방침 동의가 필요합니다."),
                      ),
              },
            ]}
          >
            <Checkbox>
              개인정보 처리방침에 동의합니다.
              <span onClick={showModal}>[내용보기]</span>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <GreenBtn htmlType="submit" style={{ width: "100%" }}>
              가입하기
            </GreenBtn>
          </Form.Item>
        </Form>
      </FormWrap>

      <PrivacyPolicy isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};

export default SignupForm;
