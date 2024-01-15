import React from "react";
import ContentLayout from "../../layouts/ContentLayout";
import { Outlet } from "react-router";
const Edu = () => {
  return (
    <>
      <Outlet />
      <ContentLayout>
        <h1>교육 영역 페이지</h1>
      </ContentLayout>
    </>
  );
};

export default Edu;
