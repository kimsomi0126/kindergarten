import React from "react";
import { Link } from "react-router-dom";
import { Buttons, LogoWrap, SideBarWrap } from "../../styles/basic";

const SideBar = () => {
  return (
    <SideBarWrap>
      <LogoWrap>
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "images/common/sidebar/logo.svg"}
          ></img>
        </Link>
      </LogoWrap>
      <div>
        <div>
          <Link as={Link} to={"/info"}>
            유치원안내
          </Link>
          <div>
            <Link to={"/info"}>유치원 소개</Link>
          </div>
          <div>
            <Link to={"/info/class"}>유치원 현황</Link>
          </div>
          <div>
            <Link to={"/info/location"}>오시는 길</Link>
          </div>
        </div>
        <div>
          <p>교육</p>
          <Link to={"/edu"}>교육과정</Link>
          <Link to={"/act"}>방과후활동</Link>
        </div>
        <div>
          <Link to={"/album"}>활동앨범</Link>
        </div>
        <div>
          <Link to={"/notice"}>유치원소식</Link>
        </div>
        <div>
          <p>관리자</p>
          <Link to={"/admin"}>학부모 관리</Link>
          <Link to={"/admin/student/list"}>원생 관리</Link>
          <Link to={"admin/student/create"}>원생 등록</Link>
        </div>
      </div>
    </SideBarWrap>
  );
};

export default SideBar;
