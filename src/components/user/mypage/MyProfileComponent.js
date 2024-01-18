import React from "react";
import {
  AdminMemo,
  IdentCodeWrap,
  MyClassWrap,
  MyInfo,
  ProfileImg,
  ProfileInfo,
  ProfileWrap,
} from "../../../styles/user/mypage";
import { OrangeBtn } from "../../../styles/ui/buttons";
import MyClass from "../MyClass";

const MyProfileComponent = ({ ilevel }) => {
  return (
    <>
      <ProfileWrap>
        <ProfileImg>
          <img
            src={process.env.PUBLIC_URL + "/images/user/my_img01.jpg"}
            alt="신짱구"
          />
        </ProfileImg>
        <ProfileInfo>
          <MyClassWrap state={2}>
            <MyClass state={2} admin={true} />
            {ilevel === "admin" ? (
              <IdentCodeWrap>
                <dl>
                  <dt>식별코드</dt>
                  <dd>00000</dd>
                </dl>
                <OrangeBtn>식별코드수정</OrangeBtn>
              </IdentCodeWrap>
            ) : null}
          </MyClassWrap>
          <MyInfo>
            <dl>
              <dt>이름</dt>
              <dd>홍길동</dd>
            </dl>
            <dl>
              <dt>성별</dt>
              <dd>남자</dd>
            </dl>
            <dl>
              <dt>생년월일</dt>
              <dd>2019-05-05</dd>
            </dl>
            <dl>
              <dt>주소</dt>
              <dd>서울특별시 어쩌구 저쩌동</dd>
            </dl>
            {ilevel === "admin" ? (
              <dl>
                <dt>비상연락처</dt>
                <dd>홍길동 01000000000</dd>
              </dl>
            ) : null}
          </MyInfo>
        </ProfileInfo>
      </ProfileWrap>
      {ilevel === "admin" ? (
        <AdminMemo>
          <dt>관리자메모</dt>
          <dd>
            <div>입력한내용이 없습니다.</div>
          </dd>
        </AdminMemo>
      ) : null}
    </>
  );
};

export default MyProfileComponent;
