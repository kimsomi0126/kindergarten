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
  // console.log(loginState);
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
            <GrayBtn
              onClick={e =>
                navigate(`/ind?year=${currentYear}&page=1&iclass=0`)
              }
            >
              알림장목록
            </GrayBtn>

            <PurpleBtn onClick={e => navigate("/admin?page=1&iclass=0")}>
              학부모관리
            </PurpleBtn>
            <OrangeBtn
              onClick={e => navigate("/admin/student?page=1&kidCheck=0")}
            >
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
            <GrayBtn
              onClick={e =>
                navigate(
                  `/ind?year=${currentYear}&page=1&ikid=${
                    ikidList[0] ? ikidList[0].ikid : 0
                  }`,
                )
              }
            >
              알림장
            </GrayBtn>
            <OrangeBtn
              onClick={e =>
                navigate(
                  `/mypage?year=${currentYear}&ikid=${
                    ikidList[0] ? ikidList[0].ikid : 0
                  }`,
                )
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
