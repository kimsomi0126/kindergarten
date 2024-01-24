import { Button, Flex, Form, Input, Radio, Select, Tooltip } from "antd";
import React, { useState } from "react";
import { FormWrap } from "../../../styles/user/login";
import { GreenBtn } from "../../../styles/ui/buttons";
import { Link } from "react-router-dom";
import { LogoWrap } from "../../../styles/basic";
import { postParentLogin, postTeacherLogin } from "../../../api/user/userApi";
import useCustomLogin from "../../../hooks/useCustomLogin";

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState("");
  const [userState, setUserState] = useState();
  const { doLogin, moveToPath } = useCustomLogin();

  const onFinish = values => {
    console.log("Success:", loginParam);

    doLogin({ loginParam, successFn, failFn, errorFn });

    //postParentLogin({ loginParam, successFn, failFn, errorFn });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onValuesChanged = (changeValues, allValues) => {
    setLoginParam({ ...allValues });
  };
  const handleUserStateChange = e => {
    setUserState(e.target.value);
  };
  // 로그인 결과
  const successFn = () => {
    moveToPath("/");
  };
  const failFn = () => {
    alert("로그인 실패");
  };
  const errorFn = () => {
    alert("에러");
  };

  return (
    <>
      <FormWrap>
        <LogoWrap>
          <img
            src={process.env.PUBLIC_URL + "/images/common/header/logo.svg"}
          />
          <p>서비스 이용을 위해 로그인 해주세요.</p>
        </LogoWrap>
        <Flex vertical gap="middle">
          <Radio.Group
            defaultValue="2"
            buttonStyle="solid"
            size="large"
            onChange={e => {
              handleUserStateChange(e);
            }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <Radio.Button value="1" style={{ width: "50%" }}>
              학부모
            </Radio.Button>
            <Radio.Button value="2" style={{ width: "50%" }}>
              선생님
            </Radio.Button>
          </Radio.Group>
        </Flex>
        <Form
          name="login"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={(changeValues, allValues) => {
            onValuesChanged(changeValues, allValues);
          }}
          autoComplete="off"
        >
          <Form.Item
            name="uid"
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
            name="upw"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요.",
              },
            ]}
          >
            <Input.Password
              size="large"
              autoComplete="false"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Item>

          <Form.Item>
            <GreenBtn
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              로그인
            </GreenBtn>
          </Form.Item>
        </Form>
        <Tooltip title="회원가입 하러가기">
          <Link to="/user/accounts">아직 회원이 아니신가요?</Link>
        </Tooltip>
      </FormWrap>
    </>
  );
};

export default LoginComponent;
