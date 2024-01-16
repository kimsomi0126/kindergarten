import React from "react";
import { Outlet } from "react-router";
import ContentLayout from "../../layouts/common/ContentLayout";

const IndivNotiList = () => {
  return (
    <>
      <Outlet />
      <ContentLayout>
        <h1>알림장 리스트 페이지</h1>
      </ContentLayout>
    </>
  );
};

export default IndivNotiList;
