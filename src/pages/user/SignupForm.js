import React, { useEffect, useState } from "react";
import { Checkbox, Form, Input, Select } from "antd";
import { GreenBtn, OrangeBtn } from "../../styles/ui/buttons";
import { FormWrap } from "../../styles/user/login";
import { LogoWrap } from "../../styles/basic";
import PrivacyPolicy from "../../components/user/PrivacyPolicy";
import { useLocation } from "react-router";
import { getCheckId } from "../../api/user/userApi";
import { FlexBox } from "../../styles/user/mypage";

const { Option } = Select;

const initState = {
  ikid: 0,
  irelation: 0,
  isValid: 0,
  parentNm: "",
  uid: "",
  upw: "",
  phoneNb: "",
  prEmail: "",
};

const initKid = {
  code: "",
  iclass: 0,
  ikid: 0,
  kidNm: "",
};
const SignupForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [registerData, setRegisterData] = useState(initState);
  const [kidInfo, setKidInfo] = useState(initKid);
  const [idCheckResult, setIdCheckResult] = useState(false);

  // 식별코드정보값 가져오기
  const location = useLocation();
  const res = location.state.res;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onFinish = values => {
    console.log("onFinish ", values);
  };

  const onValuesChanged = (changeValues, allValues) => {
    setRegisterData(allValues);
  };

  const successFn = res => {
    console.log(res);
    alert(res.message);
    setIdCheckResult(true);
  };
  const errorFn = res => {
    console.log(res);
    alert(res);
    setIdCheckResult(false);
  };

  const handleClickIdCheck = () => {
    const uid = registerData.uid;
    console.log(">>>", uid);
    getCheckId({ uid, successFn, errorFn });
  };
  useEffect(() => {
    // 식별코드정보 체크
    if (!res) {
      console.log("식별정보값 없음");
    } else {
      console.log("식별정보있음");
      setKidInfo(res);
    }
  }, [registerData, idCheckResult]);

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
          onValuesChange={(changeValues, allValues) => {
            onValuesChanged(changeValues, allValues);
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="irelation"
            rules={[
              {
                required: true,
                message: `${kidInfo.kidNm} 어린이와의 관계를 선택해주세요.`,
              },
            ]}
          >
            <Select placeholder={kidInfo.kidNm + " 어린이와의 관계"}>
              <Option value="1">부</Option>
              <Option value="2">모</Option>
              <Option value="3">조부</Option>
              <Option value="4">조모</Option>
              <Option value="5">형제/자매</Option>
              <Option value="6">그 외</Option>
            </Select>
          </Form.Item>
          <div className="ipt_box">
            <Form.Item
              name="uid"
              style={{ marginBottom: 20 }}
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해주세요.",
                },
                // {
                //   pattern: /^[a-zA-Z]+[0-9]+$/,
                //   message: "아이디는 영어와 숫자 조합으로 입력해주세요",
                // },
              ]}
            >
              <Input placeholder="아이디 입력" />
            </Form.Item>
            <OrangeBtn type="button" onClick={handleClickIdCheck}>
              중복확인
            </OrangeBtn>
          </div>
          <Form.Item
            name="parentNm"
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
            name="upw"
            style={{ marginBottom: 20 }}
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요.",
              },
            ]}
            hasFeedback
          >
            <Input.Password autoComplete="false" placeholder="비밀번호 입력" />
          </Form.Item>

          <Form.Item
            name="confirm"
            style={{ marginBottom: 20 }}
            dependencies={["upw"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "비밀번호를 한번 더 입력해주세요.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("upw") === value) {
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
            <Input.Password autoComplete="false" placeholder="비밀번호 확인" />
          </Form.Item>

          <Form.Item
            name="phoneNb"
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
            name="prEmail"
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
