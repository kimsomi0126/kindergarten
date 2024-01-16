import React from "react";
import ContentLayout from "./common/ContentLayout";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default AdminLayout;
