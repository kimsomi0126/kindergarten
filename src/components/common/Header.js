import React from "react";
import { Link } from "react-router-dom";
import { HeaderBtn } from "../../styles/basic";

const Header = () => {
  return (
    // 310
    <HeaderBtn>
      <Link to={"/signup"} styles="button">
        <div>회원가입</div>
      </Link>
      <Link to={"/login"}>
        <div>로그인</div>
      </Link>
    </HeaderBtn>
  );
};

export default Header;
