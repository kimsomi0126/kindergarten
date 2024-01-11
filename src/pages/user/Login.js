import React, { lazy } from "react";
import { Outlet } from "react-router";

// const LazyIdentNum = lazy(() => import("./pages/user/IdentNum"));
// const LazyGuardianSignup = lazy(() => import("./pages/user/GuardianSignup"));
// const LazyMyPage = lazy(() => import("./pages/user/MyPage"));
// 교직원 가입 페이지 예정
// const LazyStaffSignup = lazy(() => import("./pages/user/StaffSignup"));

const Login = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
    </div>
  );
};

export default Login;
