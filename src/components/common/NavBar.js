import React from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const NavBar = () => {
  const navigate = useNavigate();
  const { moveToPath, doLogout } = useCustomLogin();
  const { loginState, isLogin, isParentLogin } = useCustomLogin();
  const currentYear = new Date().getFullYear();
  const ikidList = loginState.kidList;
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };
  return (
    <NavWrap>
      <p>
        {isLogin
          ? `${loginState.teacherNm} 환영합니다.`
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
            <OrangeBtn
              onClick={e =>
                navigate(`/mypage?year=${currentYear}&ikid=${ikidList[0].ikid}`)
              }
            >
              마이페이지
            </OrangeBtn>
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
