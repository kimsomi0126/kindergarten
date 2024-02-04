import React, { useEffect, useState } from "react";
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
import { IMG_URL } from "../../../api/config";
import ModalOneBtn from "../../ui/ModalOneBtn";
import { Navigate } from "react-router-dom";
import { patchCode } from "../../../api/adminPage/admin_api";

const MyProfileComponent = ({ ilevel, myData, ikid, onChildClick }) => {
  useEffect(() => {}, []);
  const my = myData;
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigate, setIsNavigate] = useState();
  const handleCodeClick = () => {
    patchCode({
      successpatchFn,
      errorpatchFn,
      ikid,
    });
    console.log("아이키드", ikid);
  };
  const successpatchFn = res => {
    setIsOpen(true);
    setTitle("변경 완료");
    setSubTitle("성공적으로 변경되었습니다.");
    onChildClick();
  };
  const errorpatchFn = res => {
    console.log(res);
    setIsOpen(true);
    setTitle("변경 실패");
    setSubTitle("변경을 실패했습니다. 다시 시도해주세요.");
  };
  const handleOk = () => {
    setIsOpen(false);
    // 링크이동
    if (isNavigate) {
      Navigate(isNavigate);
    }
  };
  return (
    <>
      <ModalOneBtn
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      />
      <ProfileWrap>
        <ProfileImg>
          <img
            src={`${IMG_URL}/pic/kid/${ikid}/${my.profile}`}
            alt={my.kidNm}
          />
        </ProfileImg>
        <ProfileInfo>
          <MyClassWrap state={my.iclass}>
            <MyClass state={my.iclass} admin={true} />
            {ilevel === "admin" ? (
              <IdentCodeWrap>
                <dl>
                  <dt>식별코드</dt>
                  <dd>{my.code}</dd>
                </dl>
                <OrangeBtn onClick={handleCodeClick}>식별코드수정</OrangeBtn>
              </IdentCodeWrap>
            ) : null}
          </MyClassWrap>
          <MyInfo>
            <dl>
              <dt>이름</dt>
              <dd>{my.kidNm}</dd>
            </dl>
            <dl>
              <dt>성별</dt>
              <dd>{my.gender === 0 ? "여자" : "남자"}</dd>
            </dl>
            <dl>
              <dt>생년월일</dt>
              <dd>{my.birth}</dd>
            </dl>
            <dl>
              <dt>주소</dt>
              <dd>{my.address}</dd>
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
            <div>{my.memo}</div>
          </dd>
        </AdminMemo>
      ) : null}
    </>
  );
};

export default MyProfileComponent;
