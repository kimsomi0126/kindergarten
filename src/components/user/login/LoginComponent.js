import { Form, Input, Select, Tooltip } from "antd";
import React from "react";
import { FormWrap } from "../../../styles/user/login";
import { GreenBtn } from "../../../styles/ui/buttons";
import { Link } from "react-router-dom";
import { LogoWrap } from "../../../styles/basic";
import { Option } from "antd/es/mentions";

const onFinish = values => {
  console.log("Success:", values);
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};

const LoginComponent = () => {
  return (
    <FormWrap>
      <LogoWrap>
        <img src={process.env.PUBLIC_URL + "/images/common/header/logo.svg"} />
        <p>서비스 이용을 위해 로그인 해주세요.</p>
      </LogoWrap>
      <Form
        name="login"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
          level: "1",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="level"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select size="large">
            <Option value="1">학부모</Option>
            <Option value="2">선생님</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요.",
            },
          ]}
        >
          <Input size="large" placeholder="아이디를 입력해주세요." />
        </Form.Item>

        <Form.Item
          name="pw"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요.",
            },
          ]}
        >
          <Input.Password size="large" placeholder="비밀번호를 입력해주세요." />
        </Form.Item>

        <Form.Item>
          <GreenBtn type="primary" htmlType="submit" style={{ width: "100%" }}>
            로그인
          </GreenBtn>
        </Form.Item>
      </Form>
      <Tooltip title="회원가입 하러가기">
        <Link to="/user/accounts">아직 회원이 아니신가요?</Link>
      </Tooltip>
    </FormWrap>
  );
};

export default LoginComponent;
