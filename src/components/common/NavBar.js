import React from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";

const NavBar = () => {
  return (
    <NavWrap>
      <p>ㅇㅇㅇ님 환영합니다.</p>
      <HeaderBtn>
        <PurpleBtn>학부모관리 </PurpleBtn>
        <GrayBtn>알림장</GrayBtn>
        <OrangeBtn>회원가입</OrangeBtn>
        <GreenBtn>로그인</GreenBtn>
        {/* <Buttons
          as={Link}
          to={"/signup"}
          color="orangeDeep"
          background="orangeLight"
        >
          회원가입
        </Buttons>
        <Buttons
          as={Link}
          to={"/login"}
          color="greenDeep"
          background="greenLight"
        >
          로그인
        </Buttons> */}
      </HeaderBtn>
    </NavWrap>
  );
};

export default NavBar;
