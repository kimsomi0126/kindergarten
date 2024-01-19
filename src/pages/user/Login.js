import React from "react";
import { ContentInner } from "../../styles/basic";
import LoginComponent from "../../components/user/login/LoginComponent";

// const LazyIdentNum = lazy(() => import("./pages/user/IdentNum"));
// const LazyGuardianSignup = lazy(() => import("./pages/user/GuardianSignup"));
// const LazyMyPage = lazy(() => import("./pages/user/MyPage"));
// 교직원 가입 페이지 예정
// const LazyStaffSignup = lazy(() => import("./pages/user/StaffSignup"));

const Login = () => {
  return (
    <ContentInner>
      <LoginComponent />
    </ContentInner>
  );
};

export default Login;
