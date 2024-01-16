import { Layout, theme } from "antd";
import { WrapMain } from "../styles/basic";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import SideBar from "../components/common/SideBar";
const MainLayout = ({ children }) => {
  return (
    <Layout className="layout-wrap">
      {/* 사이드바(전체메뉴)영역 */}
      <SideBar />
      <Layout>
        {/* 상단네비영역 */}
        <NavBar />
        {/* 컨텐츠영역 */}
        <WrapMain>{children}</WrapMain>
      </Layout>
      {/* 하단푸터 */}
      <Footer />
    </Layout>
  );
};
export default MainLayout;
