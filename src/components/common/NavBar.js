import React, { useEffect } from "react";
import { HeaderBtn, NavWrap } from "../../styles/basic";
import {
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PinkBtn,
  PurpleBtn,
} from "../../styles/ui/buttons";
import { Link, useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import NotiAlarm from "../user/NotiAlarm";
import { useRecoilState } from "recoil";
import pushState from "../../atoms/pushState";
import { onMessageListener } from "../../fb/fbconfig";
import {
  patchParentFbToken,
  patchTeacherFbToken,
  getFbToken,
} from "../../api/user/pushApi";

const NavBar = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  // 로그인정보 체크
  const {
    moveToPath,
    doLogout,
    loginState,
    isLogin,
    isAdminLogin,
    isParentLogin,
    isTeacherLogin,
    refreshAccessToken,
  } = useCustomLogin();
  const ikidList = loginState.kidList;
  const iclass = isLogin && !isTeacherLogin ? 0 : loginState.iclass;
  const iteacher = loginState.iteacher;

  // 로그아웃
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };
  // 푸시알림
  const [notiPush, setNotiPush] = useRecoilState(pushState);

  // 알림사용 승인 후 firebase 토큰 가져오기
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          getFbToken(successFn);
        }
      });
    } else {
      getFbToken(successFn);
    }
  }, [loginState]);
  //firebase 토큰가져오기 성공 시 서버로 변경된 토큰 보냄
  const successFn = res => {
    const userFirebaseToken = isParentLogin
      ? loginState.prFirebaseToken
      : loginState.firebaseToken;

    if (userFirebaseToken !== res && loginState.accessToken) {
      let params = {
        iteacher: loginState.iteacher,
        firebaseToken: res,
      };
      if (isParentLogin) {
        params = {
          iparent: loginState.iparent,
          firebaseToken: res,
        };
        patchParentFbToken({ params, successFn: successrefrash });
      } else {
        patchTeacherFbToken({ params, successFn: successrefrash });
      }
      console.log(params);
    }
  };

  // firebase 토큰 갱신 하면 로그인 정보 다시 가져옴
  const successrefrash = res => {
    // const resultNum = res.data.result;
    // if (resultNum === 1) {
    //   refreshAccessToken();
    // } else {
    //   console.log("firebase 토큰업데이트 실패");
    // }
    refreshAccessToken();
  };

  // 알림체크
  onMessageListener()
    .then(payload => {
      const data = JSON.parse(payload.data);
      console.log(data);
      setNotiPush(prev => {
        const copyDm = { ...prev };
        const prevDm = copyDm.pushList[data.idm] || {
          unCheckedMsgCnt: 0,
          data: null,
        };
        prevDm.unCheckedMsgCnt++;
        prevDm.data = data;
        copyDm.pushList[data.idm] = prevDm;
        copyDm.totalCnt++;
        return copyDm;
      });
    })
    .catch(error => console.log(error));

  // console.log("리프레시", loginState.accessToken);
  // console.log("기존", loginState.accessToken);
  console.log(notiPush);
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
      {!isAdminLogin ? (
        <NotiAlarm state={notiPush.totalCnt === 0 ? false : true} />
      ) : null}

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
            {isTeacherLogin ? (
              <PinkBtn
                className="nav-btn"
                onClick={e =>
                  navigate(`/admin/teacher/edit?iteacher=${iteacher}`)
                }
              >
                정보수정
              </PinkBtn>
            ) : null}
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
