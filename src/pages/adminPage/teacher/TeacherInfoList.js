import React from "react";
import {
  TeacherTop,
  TeacherTopRight,
} from "../../../styles/adminstyle/teacherinfolist";
import { PageTitle } from "../../../styles/basic";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { BlueBtn, OrangeBtn } from "../../../styles/ui/buttons";
import TeacherListComponent from "../../../components/adminpage/TeacherListComponent";
import { useNavigate } from "react-router";

const TeacherInfoList = () => {
  const navigate = useNavigate();
  return (
    <>
      <TeacherTop>
        <PageTitle>선생님 관리</PageTitle>
        <TeacherTopRight>
          <Dropdown>
            <Button>
              <DownOutlined />
            </Button>
          </Dropdown>
          <Search
            placeholder="검색어를 입력하세요."
            style={{
              width: 200,
            }}
            allowClear
          />
          <OrangeBtn>선택퇴사</OrangeBtn>
          <BlueBtn onClick={e => navigate("/admin/teacher/create")}>
            선생님 등록
          </BlueBtn>
        </TeacherTopRight>
      </TeacherTop>
      <TeacherListComponent />
    </>
  );
};

export default TeacherInfoList;
