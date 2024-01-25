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
import { getAdminParentList } from "../../api/adminPage/admin_api";

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
              <GrayBtn>정보 수정</GrayBtn>
            </UserListBox>
          </UserListItem>
        ))}
      </UserListWrap>
    </UserMain>
  );
};

export default GuardianListComponent;
