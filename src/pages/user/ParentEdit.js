import React, { useEffect, useState } from "react";
import { Form, Input, Modal } from "antd";
import { getParentInfo } from "../../api/user/userApi";
import { OrangeBtn, PinkBtn } from "../../styles/ui/buttons";
import { ModalBody, ModalTitle } from "../../styles/ui/warning";
import { FlexBox } from "../../styles/user/mypage";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import { useNavigate } from "react-router";

const initState = {
  parentNm: "",
  phoneNb: "",
  uid: "",
  prEmail: "",
  upw: "",
};
const ParentEdit = ({ isEditOpen, handleCancel }) => {
  const navigate = useNavigate();
  // 기존회원정보
  const [parentData, setParentData] = useState(initState);

  // 모달오픈여부
  const [isOpen, setIsOpen] = useState(false);

  // 모달텍스트
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const handleClick = value => {};

  const [form] = Form.useForm();
  const onFinish = value => {
    console.log("Received values of form: ", value);
    setParentData(value);
  };

  useEffect(() => {
    getParentInfo({ successFn, failFn, errorFn });
    console.log("들어오는값", parentData);
  }, []);

  const successFn = result => {
    console.log("성공", result);
    setParentData(result);
  };
  const failFn = result => {
    console.log("실패", result);
  };
  const errorFn = (code, message) => {
    console.log("에러", code, message);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const modalStyles = {
    footer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
    },
    body: {
      paddingTop: "2rem",
    },
  };
  return (
    <>
      <ModalOneBtn>
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      </ModalOneBtn>
      <Modal
        open={isEditOpen}
        onOk={handleClick}
        onCancel={handleCancel}
        closeIcon={null}
        width={400}
        footer={<></>}
        styles={modalStyles}
      >
        <ModalTitle>
          <h3>학부모 정보 수정</h3>
        </ModalTitle>
        <ModalBody>
          <Form
            form={form}
            name="parentedit"
            onFinish={onFinish}
            initialValues={parentData}
          >
            <Form.Item
              name="uid"
              style={{ marginBottom: 20 }}
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해주세요.",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>
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
              name="upw"
              style={{ marginBottom: 20 }}
              rules={[
                {
                  required: true,
                  message: "새로운 비밀번호를 입력해주세요.",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="새로운 비밀번호 입력" />
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
                        "입력한 비밀번호와 일치하지 않습니다. 다시 작성해주세요.",
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="새로운 비밀번호 확인" />
            </Form.Item>
            <FlexBox style={{ justifyContent: "center" }}>
              <PinkBtn type="submit">등록</PinkBtn>
              <OrangeBtn type="button" onClick={handleCancel}>
                취소
              </OrangeBtn>
            </FlexBox>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ParentEdit;
