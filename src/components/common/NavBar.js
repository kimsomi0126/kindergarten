import React from "react";
import { Link } from "react-router-dom";
import { Buttons, HeaderBtn, NavWrap } from "../../styles/basic";

const NavBar = () => {
  return (
    <NavWrap>
      <HeaderBtn>
        <Buttons
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
        </Buttons>
      </HeaderBtn>
    </NavWrap>
  );
};

export default NavBar;
