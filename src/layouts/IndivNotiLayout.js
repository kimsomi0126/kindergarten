import React from "react";
import { Outlet } from "react-router";
import ContentLayout from "./common/ContentLayout";

const IndivNotiLayout = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default IndivNotiLayout;
