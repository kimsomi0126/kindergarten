import React from "react";
import { Link } from "react-router-dom";
import { WrapNav } from "../../styles/basic";

const NavBar = () => {
  return (
    <WrapNav>
      <div>
        <Link to={"/"}>
          <div>로고 위치</div>
        </Link>
      </div>
      <div>
        <div>
          <h3>유치원안내</h3>
          <Link to={"/info"}>
            <div>유치원 소개</div>
          </Link>
          <Link to={"/info"}>
            <div>유치원 현황</div>
          </Link>
          <Link to={"/info"}>
            <div>오시는 길</div>
          </Link>
        </div>
        <div>
          <h3>교육</h3>
          <Link to={"/edu"}>
            <div>교육과정</div>
          </Link>
          <Link to={"/edu"}>
            <div>방과후활동</div>
          </Link>
        </div>
        <div>
          <Link to={"/album"}>
            <h3>활동앨범</h3>
          </Link>
        </div>
        <div>
          <Link to={"/notice"}>
            <h3>유치원소식</h3>
          </Link>
        </div>
        <div>
          <h3>관리자</h3>
          <Link to={"/admin"}>
            <div>학부모 관리</div>
          </Link>
          <Link to={"/admin/student/list"}>
            <div>원생 관리</div>
          </Link>
          <Link to={"admin/student/create"}>
            <div>원생 등록</div>
          </Link>
        </div>
      </div>
    </WrapNav>
    // 310
  );
};

export default NavBar;
