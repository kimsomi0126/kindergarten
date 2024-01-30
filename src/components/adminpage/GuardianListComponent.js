import React, { useEffect, useRef, useState } from "react";
import {
  ChildInfo,
  UserInfo,
  UserListBox,
  UserListItem,
  UserListWrap,
  UserMain,
} from "../../styles/adminstyle/guardianlist";
import { GrayBtn } from "../../styles/ui/buttons";
import { getAdminParentList } from "../../api/adminPage/admin_api";
import AdminParentEdit from "../../pages/adminPage/AdminParentEdit";

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

const GuardianListComponent = () => {
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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editKey, setEditKey] = useState(0);

  const onAdminParentEditClick = () => {
    setIsEditOpen(true);
    setEditKey(prevKey => prevKey + 1);
  };

  const handleCancel = () => {
    setIsEditOpen(false);
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
        {Array.isArray(parentList) &&
          parentList.map(item => (
            <UserListItem key={item.iparent}>
              <UserListBox>
                <input type="checkbox" name="student" />
                <UserInfo>
                  <span>{item.uid}</span>
                  <p>{item.parentNm}</p>
                </UserInfo>
                <div style={{ display: "flex", gap: 10 }}>
                  {Array.isArray(item.kids) &&
                    item.kids.map((kidsitem, index) => (
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
                <GrayBtn onClick={onAdminParentEditClick}>정보 수정</GrayBtn>
                {isEditOpen && (
                  <AdminParentEdit
                    open={isEditOpen}
                    handleCancel={handleCancel}
                    key={editKey}
                  />
                )}
              </UserListBox>
            </UserListItem>
          ))}
      </UserListWrap>
    </UserMain>
  );
};
export default GuardianListComponent;
