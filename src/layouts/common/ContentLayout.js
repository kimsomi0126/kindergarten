import React from "react";
import { Outlet } from "react-router";
import { ContentInner, WrapContent } from "../../styles/basic";
import MainLayout from "../MainLayout";

const ContentLayout = ({ children }) => {
  return (
    <MainLayout>
      <WrapContent maxw="1440">
        <ContentInner>
          <Outlet />
          {children}
        </ContentInner>
      </WrapContent>
    </MainLayout>
  );
};

export default ContentLayout;
