import React from "react";
import { Outlet } from "react-router";
import { WrapContent } from "../../styles/basic";
import MainLayout from "../MainLayout";

const ContentLayout = ({ children }) => {
  return (
    <WrapContent maxw="1440">
      <Outlet />
    </WrapContent>
  );
};

export default ContentLayout;
