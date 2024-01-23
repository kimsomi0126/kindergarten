import React, { useState } from "react";
import { ContentInner } from "../../styles/basic";
import LoginComponent from "../../components/user/login/LoginComponent";
import { ModifyModal } from "../../components/common/ResultModal";
import { Modal } from "antd";
import ModalTwoBtn from "../../components/ui/ModalTwoBtn";

// const LazyIdentNum = lazy(() => import("./pages/user/IdentNum"));
// const LazyGuardianSignup = lazy(() => import("./pages/user/GuardianSignup"));
// const LazyMyPage = lazy(() => import("./pages/user/MyPage"));
// 교직원 가입 페이지 예정
// const LazyStaffSignup = lazy(() => import("./pages/user/StaffSignup"));

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <ContentInner>
      <LoginComponent />
    </ContentInner>
  );
};

export default Login;
