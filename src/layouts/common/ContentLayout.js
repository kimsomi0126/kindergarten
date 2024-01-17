import React from "react";
import { Outlet } from "react-router";
import { WrapContent } from "../../styles/basic";
import MainLayout from "../MainLayout";

const ContentLayout = ({ children }) => {
  return (
    <MainLayout>
      <WrapContent maxw="1440">
        <Outlet />
        {children}
      </WrapContent>
    </MainLayout>
  );
};

export default ContentLayout;
