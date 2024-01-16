import React from "react";
import ContentLayout from "./common/ContentLayout";
import { Outlet } from "react-router";

const AlbumLayout = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};

export default AlbumLayout;
