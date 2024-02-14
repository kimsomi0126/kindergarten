import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const SideMenu = () => {
  const { isLogin } = useCustomLogin();
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
          getItem(<Link to="/admin?page=1&iclass=0">학부모관리</Link>, "5-1"),
          getItem(
            <Link to="/admin/student?page=1&kidCheck=0">원생관리</Link>,
            "5-2",
          ),
          getItem(<Link to="/admin/student/create">원생등록</Link>, "5-3"),
          getItem(<Link to="/admin/teacher">선생님관리</Link>, "5-4"),
          getItem(<Link to="/admin/teacher/create">선생님등록</Link>, "5-5"),
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
