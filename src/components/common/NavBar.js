import React from "react";
import { HeaderBtn, LogoWrap, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { Link, useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import NotiAlarm from "../user/NotiAlarm";

const NavBar = () => {
  const navigate = useNavigate();
  const { moveToPath, doLogout } = useCustomLogin();
  const { loginState, isLogin, isParentLogin } = useCustomLogin();
  const currentYear = new Date().getFullYear();
  const ikidList = loginState.kidList;
  const iclass = loginState.iclass;
  // console.log(loginState);
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };
  return (
    <NavWrap>
      <Link to={"/"} className="nav-logo">
        <img src={process.env.PUBLIC_URL + "/images/common/header/logo.svg"} />
      </Link>
      <p>
        {isLogin
          ? `${loginState.teacherNm} 환영합니다.`
          : isParentLogin
          ? "학부모님 환영합니다."
          : null}
      </p>
      {/* 푸시알림 */}
      {isLogin ? <NotiAlarm state={true} /> : null}

      <HeaderBtn>
        {isLogin ? (
          <>
            <GrayBtn
              className="nav-btn"
              onClick={e =>
                navigate(`/ind?year=${currentYear}&page=1&iclass=${iclass}`)
              }
            >
              알림장목록
            </GrayBtn>

            <PurpleBtn
              className="nav-btn"
              onClick={e => navigate(`/admin?page=1&iclass=${iclass}`)}
            >
              학부모관리
            </PurpleBtn>
            <OrangeBtn
              className="nav-btn"
              onClick={e =>
                navigate(`/admin/student?page=1&kidCheck=${iclass}`)
              }
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
              className="nav-btn"
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
              className="nav-btn"
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
