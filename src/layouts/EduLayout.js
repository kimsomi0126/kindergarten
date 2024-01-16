import React from "react";
import { Outlet } from "react-router";
import ContentLayout from "./common/ContentLayout";

const EduLayout = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default EduLayout;
