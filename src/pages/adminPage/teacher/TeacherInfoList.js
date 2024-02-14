import React from "react";
import {
  TeacherTop,
  TeacherTopRight,
} from "../../../styles/adminstyle/teacherinfolist";
import { PageTitle } from "../../../styles/basic";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { OrangeBtn } from "../../../styles/ui/buttons";
import TeacherListComponent from "../../../components/adminpage/TeacherListComponent";

const TeacherInfoList = () => {
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
        </TeacherTopRight>
      </TeacherTop>
      <TeacherListComponent />
    </>
  );
};

export default TeacherInfoList;
