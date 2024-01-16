import React from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavWrap>
      <p>ㅇㅇㅇ님 환영합니다.</p>
      <HeaderBtn>
        <PurpleBtn onClick={e => navigate("/admin")}>학부모관리</PurpleBtn>
        <GrayBtn onClick={e => navigate("/ind")}>알림장</GrayBtn>
        <OrangeBtn onClick={e => navigate("/mypage")}>마이페이지</OrangeBtn>
        <OrangeBtn onClick={e => navigate("/signup")}>회원가입</OrangeBtn>
        <GreenBtn onClick={e => navigate("/login")}>로그인</GreenBtn>
      </HeaderBtn>
    </NavWrap>
  );
};

export default NavBar;
