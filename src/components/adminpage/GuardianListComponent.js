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
    parentNm: "string",
    uid: "string",
    phoneNb: "string",
    kids: [
      {
        kidNm: "string",
        iclass: "string",
      },
    ],
  },
];

const GuardianListComponent = () => {
  const [parentList, setParentList] = useState(initParentList);
  useEffect(() => {
    getAdminParentList(setParentList);
  }, []);
  return (
    <UserMain>
      <div>
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">전체 선택</label>
      </div>
      <UserListWrap>
        {parentList.map(item => {
          <UserListItem key={item.iparent}>
            <UserListBox>
              <input type="checkbox" />
              <UserInfo>
                <span>{item.uid}</span>
                <p>{item.parentNm} </p>
              </UserInfo>
              {item.kids.map((kidsitem, index) => (
                <div key={index}>
                  <ChildInfo>
                    <p>
                      {kidsitem.kidNm}
                      {kidsitem.iclass === 1
                        ? "무궁화반"
                        : kidsitem.iclass === 2
                        ? "해바라기반"
                        : kidsitem.iclass === 3
                        ? "장미반"
                        : ""}
                    </p>
                  </ChildInfo>
                </div>
              ))}
              <em>{item.phoneNb}</em>
              <GrayBtn>정보 수정</GrayBtn>
            </UserListBox>
          </UserListItem>;
        })}
      </UserListWrap>
    </UserMain>
  );
};

export default GuardianListComponent;
