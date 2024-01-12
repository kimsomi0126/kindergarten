import React from "react";
import { Link } from "react-router-dom";
import { HeaderBtn } from "../../styles/basic";

const NavBar = () => {
  return (
    <HeaderBtn>
      <Link to={"/signup"} styles="button">
        <p>회원가입</p>
      </Link>
      <Link to={"/login"}>
        <p>로그인</p>
      </Link>
    </HeaderBtn>
  );
};

export default NavBar;
