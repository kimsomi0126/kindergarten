import React from "react";
import { Outlet } from "react-router-dom";
import ContentLayout from "../../layouts/ContentLayout";

const UserPage = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default UserPage;
