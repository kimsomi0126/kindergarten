import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
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
        src={process.env.PUBLIC_URL + "/images/common/sidebar/introduce.svg"}
      />,
      [
        getItem(<Link to="/info">유치원 소개</Link>, "1-1"),
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
        getItem(<Link to="/">교육과정</Link>, "2-1"),
        getItem(<Link to="/">방과후활동</Link>, "2-2"),
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
    getItem(
      "관리자",
      "5",
      <img
        src={process.env.PUBLIC_URL + "/images/common/sidebar/manager.svg"}
      />,
      [
        getItem(<Link to="/admin">학부모관리</Link>, "5-1"),
        getItem(<Link to="/admin/student/List">원생관리</Link>, "5-2"),
        getItem(<Link to="/admin/student/Create">원생등록</Link>, "5-3"),
      ],
    ),
  ];
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
