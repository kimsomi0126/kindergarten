import React from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { Link, useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const NavBar = () => {
  const navigate = useNavigate();
  const { moveToPath, doLogout } = useCustomLogin();
  const { isLogin, isParentLogin } = useCustomLogin();
  console.log("선생님 로그인 :", isLogin);
  console.log("학부모 로그인 :", isParentLogin);
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };
  return (
    <NavWrap>
      <p>
        {" "}
        {isLogin
          ? "선생님 환영합니다."
          : isParentLogin
          ? "학부모님 환영합니다."
          : null}
      </p>
      <HeaderBtn>
        {isLogin ? (
          <>
            <PurpleBtn onClick={e => navigate("/admin")}>학부모관리</PurpleBtn>
            <OrangeBtn onClick={e => navigate("/admin/student/list")}>
              원생관리
            </OrangeBtn>
            <GreenBtn
              onClick={() => {
                handleLogout();
              }}
            >
              로그아웃
            </GreenBtn>
          </>
        ) : isParentLogin ? (
          <>
            <GrayBtn onClick={e => navigate("/ind")}>알림장</GrayBtn>
            <OrangeBtn onClick={e => navigate("/mypage")}>마이페이지</OrangeBtn>
            <GreenBtn
              onClick={() => {
                handleLogout();
              }}
            >
              로그아웃
            </GreenBtn>
          </>
        ) : (
          <>
            <OrangeBtn onClick={e => navigate("user/accounts")}>
              회원가입
            </OrangeBtn>
            <GreenBtn onClick={e => navigate("login")}>로그인</GreenBtn>
          </>
        )}
      </HeaderBtn>
    </NavWrap>
  );
};

export default NavBar;
