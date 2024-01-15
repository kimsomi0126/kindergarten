import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import { LogoWrap, SideBarWrap, WrapMain } from "../styles/basic";
import NavBar from "../components/common/NavBar";
import { AllBtn } from "../styles/ui/buttons";
import { Link } from "react-router-dom";
import SideMenu from "../components/common/SideMenu";
import Footer from "../components/common/Footer";
const { Header, Sider } = Layout;
const MainPageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout-wrap">
      <SideBarWrap>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <div className="demo-logo-vertical" />
          <LogoWrap>
            <Link to={"/"}>
              {collapsed ? (
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/common/header/smallLogo.svg"
                  }
                />
              ) : (
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/common/header/logo.svg"
                  }
                />
              )}
            </Link>
          </LogoWrap>
          <SideMenu />
          <AllBtn
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "접기" : "펼치기"}
          </AllBtn>
        </Sider>
      </SideBarWrap>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <NavBar />
        </Header>
        <WrapMain>{children}</WrapMain>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default MainPageLayout;
