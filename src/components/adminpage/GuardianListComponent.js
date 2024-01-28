import React, { useEffect, useState } from "react";
import {
  ChildInfo,
  UserInfo,
  UserListBox,
  UserListItem,
  UserListWrap,
  UserMain,
} from "../../styles/adminstyle/guardianlist";
import { GrayBtn } from "../../styles/ui/buttons";
import {
  editParentInfo,
  getAdminParentList,
} from "../../api/adminPage/admin_api";
import ModalTwoBtn from "../ui/ModalTwoBtn";
import { Form, Input } from "antd";
import useCustomLogin from "../../hooks/useCustomLogin";

const initParentList = [
  {
    iparent: 0,
    parentNm: "",
    uid: "",
    phoneNb: "",
    kids: [
      {
        kidNm: "",
        iclass: 0,
      },
    ],
  },
];

const initParentInfo = [
  {
    iparent: 0,
    parentNm: "",
    phoneNb: "",
    uid: "",
    prEmail: "",
  },
];

const GuardianListComponent = ({ handleOk }) => {
  // 학부모 리스트 GET
  const [parentList, setParentList] = useState(initParentList);
  const page = 1;
  const iclass = 0;

  useEffect(() => {
    getAdminParentList({ successFn, failFn, errorFn, page, iclass });
  }, []);

  const successFn = result => {
    setParentList(result);
  };
  const failFn = result => {
    setParentList(result);
  };
  const errorFn = result => {
    setParentList(result);
  };

  // 학부모 정보 수정
  const [parentInfo, setParentInfo] = useState(initParentInfo);
  const { loginState, moveToPath } = useCustomLogin();

  useEffect(() => {
    setParentInfo({
      ...loginState,
      uid: loginState.uid,
      parentNm: loginState.parentNm,
      phoneNb: loginState.phoneNb,
      prEmail: loginState.prEmail,
    });
  }, [loginState]);

  const handleSubmit = e => {
    // 웹브라우저 갱신막기
    e.preventDefault();
    editParentInfo({ parentInfo, successEditFn, failEditFn, errorEditFn });
  };
  const handleChange = e => {
    parentInfo[e.target.name] = e.target.value;
    setParentInfo({ ...parentInfo });
  };
  const successEditFn = result => {
    console.log(result);
  };
  const failEditFn = result => {
    console.log(result);
  };
  const errorEditFn = result => {
    console.log(result);
  };
  // 정보 수정 모달창 적용
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  const onEditCancel = () => {
    setIsEditModalOpen(false);
  };

  // 체크박스 전체 선택
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleSelectAllChange = e => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="student"]',
    );

    checkboxes.forEach(checkbox => {
      checkbox.checked = checked;
    });
  };

  const handleStudentCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="student"]',
    );

    const allChecked = Array.from(checkboxes).every(
      checkbox => checkbox.checked,
    );

    setSelectAllChecked(allChecked);
  };

  return (
    <UserMain>
      <div>
        <input
          type="checkbox"
          id="selectAll"
          name="student"
          checked={selectAllChecked}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="selectAll">전체 선택</label>
      </div>
      <UserListWrap>
        {parentList.map(item => (
          <UserListItem key={item.iparent}>
            <UserListBox>
              <input
                type="checkbox"
                name="student"
                onChange={handleStudentCheckboxChange}
              />
              <UserInfo>
                <span>{item.uid}</span>
                <p>{item.parentNm}</p>
              </UserInfo>
              <div style={{ display: "flex", gap: 10 }}>
                {item.kids.map((kidsitem, index) => (
                  <div key={`${item.iparent}_${index}`}>
                    <ChildInfo>
                      <p>
                        {kidsitem.iclass === 1
                          ? "무궁화반"
                          : kidsitem.iclass === 2
                          ? "해바라기반"
                          : kidsitem.iclass === 3
                          ? "장미반"
                          : ""}{" "}
                        {kidsitem.kidNm}
                      </p>
                    </ChildInfo>
                  </div>
                ))}
              </div>

              <em>{item.phoneNb}</em>
              <GrayBtn onClick={handleEditClick}>정보 수정</GrayBtn>
              {isEditModalOpen && (
                <ModalTwoBtn
                  isOpen={isEditModalOpen}
                  handleOk={handleOk}
                  handleCancel={onEditCancel}
                  title="학부모 정보 수정"
                >
                  <Form>
                    <Form.Item>
                      <Input
                        name="uid"
                        value={parentInfo.uid}
                        onChange={e => handleChange(e)}
                        readOnly
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input
                        name="parentNm"
                        value={parentInfo.parentNm}
                        onChange={e => handleChange(e)}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input
                        name="phoneNb"
                        value={parentInfo.phoneNb}
                        onChange={e => handleChange(e)}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input
                        name="prEmail"
                        value={parentInfo.prEmail}
                        onChange={e => handleChange(e)}
                      />
                    </Form.Item>

                    <Form.Item
                      name="newpassword"
                      style={{ marginBottom: 20 }}
                      rules={[
                        {
                          required: true,
                          message: "비밀번호를 입력해주세요.",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="새로운 비밀번호 입력" />
                    </Form.Item>

                    <Form.Item
                      name="newconfirm"
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
                      <Input.Password placeholder="새로운 비밀번호 확인" />
                    </Form.Item>
                  </Form>
                </ModalTwoBtn>
              )}
            </UserListBox>
          </UserListItem>
        ))}
      </UserListWrap>
    </UserMain>
  );
};

export default GuardianListComponent;
