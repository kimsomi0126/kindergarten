import React from "react";
import { FormWrap } from "../../styles/user/login";
import { ContentInner, LogoWrap } from "../../styles/basic";
import { Form, Input } from "antd";
import { GreenBtn } from "../../styles/ui/buttons";
import { useNavigate } from "react-router";

const Accounts = () => {
  const navigate = useNavigate();
  const onFinish = values => {
    console.log("Success:", values);
    navigate("/user/signup");
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ContentInner>
      <FormWrap>
        <LogoWrap>
          <h3>식별코드 입력</h3>
          <p>식별코드를 입력해주세요.</p>
        </LogoWrap>
        <Form
          name="account"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "식별코드를 입력해주세요. (15글자)",
                max: 15,
              },
            ]}
          >
            <Input size="large" placeholder="코드입력" />
          </Form.Item>

          <Form.Item>
            <GreenBtn htmlType="submit" style={{ width: "100%" }}>
              확인
            </GreenBtn>
          </Form.Item>
        </Form>
      </FormWrap>
    </ContentInner>
  );
};

export default Accounts;
