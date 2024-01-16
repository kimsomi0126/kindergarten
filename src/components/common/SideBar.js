import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoWrap, SideBarWrap } from "../../styles/basic";
import Sider from "antd/es/layout/Sider";
import SideMenu from "./SideMenu";
import { AllBtn } from "../../styles/ui/buttons";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <SideBarWrap>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="demo-logo-vertical" />
        <LogoWrap>
          <Link to={"/"}>
            {collapsed ? (
              <img
                src={
                  process.env.PUBLIC_URL + "/images/common/header/smallLogo.svg"
                }
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/common/header/logo.svg"}
              />
            )}
          </Link>
        </LogoWrap>
        <SideMenu />
        <AllBtn type="text" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "접기" : "펼치기"}
        </AllBtn>
      </Sider>
    </SideBarWrap>
  );
};

export default SideBar;
