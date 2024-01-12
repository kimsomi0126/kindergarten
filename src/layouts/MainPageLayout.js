import React from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import SideBar from "../components/common/SideBar";
import { Wrap } from "../styles/basic";

const MainPageLayout = ({ children }) => {
  return (
    <Wrap maxw="1920">
      <NavBar />
      <SideBar />
      <Footer />
      {children}
    </Wrap>
  );
};

export default MainPageLayout;
