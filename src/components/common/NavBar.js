import React from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavWrap>
      <p>ㅇㅇㅇ님 환영합니다.</p>
      <HeaderBtn>
        <PurpleBtn>학부모관리 </PurpleBtn>
        <GrayBtn>알림장</GrayBtn>
        <OrangeBtn>
          <Link to="/signup">회원가입</Link>
        </OrangeBtn>
        <GreenBtn>
          <Link to="/login">로그인</Link>
        </GreenBtn>
      </HeaderBtn>
    </NavWrap>
  );
};

export default NavBar;
