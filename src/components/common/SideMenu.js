import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const SideMenu = () => {
  const { isLogin, isParentLogin, loginState } = useCustomLogin();
  const currentYear = new Date().getFullYear();
  const ikidList = loginState.kidList;
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      "유치원 안내",
      "1",
      <img
        src={process.env.PUBLIC_URL + "/images/common/sidebar/info_icon.svg"}
      />,
      [
        getItem(<Link to="/info/">유치원 소개</Link>, "1-1"),
        getItem(<Link to="/info/class">유치원 현황</Link>, "1-2"),
        getItem(<Link to="/info/location">오시는 길</Link>, "1-3"),
      ],
    ),
    getItem(
      "교육",
      "2",
      <img
        src={process.env.PUBLIC_URL + "/images/common/sidebar/education.svg"}
      />,
      [
        getItem(<Link to="/edu">교육과정</Link>, "2-1"),
        getItem(<Link to="/edu/specialact">방과후활동</Link>, "2-2"),
      ],
    ),
    getItem(
      "활동앨범",
      "3",
      <Link to="/album">
        <img
          src={process.env.PUBLIC_URL + "/images/common/sidebar/gallery.svg"}
        />
      </Link>,
    ),
    getItem(
      "유치원 소식",
      "4",
      <Link to="/notice">
        <img src={process.env.PUBLIC_URL + "/images/common/sidebar/news.svg"} />
      </Link>,
    ),
  ];
  if (isLogin) {
    items.push(
      getItem(
        "관리자",
        "5",
        <img
          src={process.env.PUBLIC_URL + "/images/common/sidebar/manager.svg"}
        />,
        [
          getItem(<Link to="/admin?page=1&iclass=0">학부모 관리</Link>, "5-1"),
          getItem(
            <Link to="/admin/student?page=1&kidCheck=0">원생 관리</Link>,
            "5-2",
          ),
          getItem(<Link to="/admin/student/create">원생 등록</Link>, "5-3"),
          getItem(
            <Link to={`/ind?year=${currentYear}&page=1&iclass=0`}>
              알림장 목록
            </Link>,
            "5-4",
          ),
          getItem(<Link to="/admin/teacher">선생님 관리</Link>, "5-5"),
        ],
      ),
    );
  }
  if (isParentLogin) {
    items.push(
      getItem(
        "회원전용",
        "6",
        <img
          src={process.env.PUBLIC_URL + "/images/common/sidebar/user.svg"}
        />,
        [
          getItem(
            <Link
              to={`/ind?year=${currentYear}&page=1&ikid=${
                ikidList[0] ? ikidList[0].ikid : 0
              }`}
            >
              알림장
            </Link>,
            "6-1",
          ),
          getItem(
            <Link
              to={`/mypage?year=${currentYear}&ikid=${
                ikidList[0] ? ikidList[0].ikid : 0
              }`}
            >
              마이페이지
            </Link>,
            "6-2",
          ),
        ],
      ),
    );
  }

  return (
    <Menu
      defaultSelectedKeys={[""]}
      mode="inline"
      items={items}
      style={{ border: 0 }}
    />
  );
};

export default SideMenu;
