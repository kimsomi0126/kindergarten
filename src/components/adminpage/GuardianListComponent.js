import React from "react";
import {
  ChildInfo,
  UserInfo,
  UserListBox,
  UserListItem,
  UserListWrap,
  UserMain,
} from "../../styles/adminstyle/guardianlist";
import { GrayBtn } from "../../styles/ui/buttons";

const GuardianListComponent = () => {
  return (
    <UserMain>
      <div>
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">전체 선택</label>
      </div>
      <UserListWrap>
        <UserListItem>
          <UserListBox>
            <input type="checkbox" />
            <UserInfo>
              <span>bong11</span>
              <p>봉미선 </p>
            </UserInfo>
            <ChildInfo>
              <p>해바라기반 신짱구</p>
              <p>무궁화반 신짱아</p>
            </ChildInfo>
            <em>010.0000.0000</em>
            <GrayBtn>정보 수정</GrayBtn>
          </UserListBox>
        </UserListItem>
      </UserListWrap>
    </UserMain>
  );
};

export default GuardianListComponent;
