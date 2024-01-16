import React from "react";
import ContentLayout from "./common/ContentLayout";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default UserLayout;
