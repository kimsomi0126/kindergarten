import React from "react";
import { Link } from "react-router-dom";
import { LogoWrap, WrapNav } from "../../styles/basic";

const SideBar = () => {
  return (
    <WrapNav>
      <LogoWrap>
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/images/common/header/logo.svg"}
          ></img>
        </Link>
      </LogoWrap>
      <div>
        <div>
          <p>유치원안내</p>
          <Link to={"/info"}>
            <p>유치원 소개</p>
          </Link>
          <Link to={"/info"}>
            <p>유치원 현황</p>
          </Link>
          <Link to={"/info"}>
            <p>오시는 길</p>
          </Link>
        </div>
        <div>
          <p>교육</p>
          <Link to={"/edu"}>
            <p>교육과정</p>
          </Link>
          <Link to={"/edu"}>
            <p>방과후활동</p>
          </Link>
        </div>
        <div>
          <Link to={"/album"}>
            <p>활동앨범</p>
          </Link>
        </div>
        <div>
          <Link to={"/notice"}>
            <p>유치원소식</p>
          </Link>
        </div>
        <div>
          <p>관리자</p>
          <Link to={"/admin"}>
            <p>학부모 관리</p>
          </Link>
          <Link to={"/admin/student/list"}>
            <p>원생 관리</p>
          </Link>
          <Link to={"admin/student/create"}>
            <p>원생 등록</p>
          </Link>
        </div>
      </div>
    </WrapNav>
  );
};

export default SideBar;
