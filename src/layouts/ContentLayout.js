import React from "react";
import { WrapContent } from "../styles/basic";
import MainPageLayout from "./MainPageLayout";

const ContentLayout = ({ children }) => {
  return (
    <MainPageLayout>
      <WrapContent maxw="1440">{children}</WrapContent>
    </MainPageLayout>
  );
};

export default ContentLayout;
