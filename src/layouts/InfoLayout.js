import React from "react";
import ContentLayout from "./common/ContentLayout";
import { Outlet } from "react-router";

const InfoLayout = ({ children }) => {
  return (
    <ContentLayout>
      <Outlet />
      {children}
    </ContentLayout>
  );
};

export default InfoLayout;
