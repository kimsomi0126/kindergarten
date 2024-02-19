import React, { useEffect, useState } from "react";
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
import useCustomLogin from "../../../hooks/useCustomLogin";
import { getTeacherList } from "../../../api/adminPage/admin_api";
import { useSearchParams } from "react-router-dom";

const initTeacherList = {
  teacherCnt: 0,
  list: [
    {
      iteacher: 0,
      iclass: 0,
      teacherNm: "",
      teacherUid: "",
      tcIsDel: 0,
      tcEmail: "",
      tcMemo: "",
      teacherProfile: "",
    },
  ],
};
const TeacherInfoList = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();
  const page = serchParams.get("page");
  const iclass = serchParams.get("iclass");

  // 모달창 내용
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigate, setIsNavigate] = useState();

  // 선생님 리스트 GET
  const [teacherList, setTeacherList] = useState(initTeacherList);
  const { isLogin } = useCustomLogin();

  useEffect(() => {
    if (!isLogin) {
      setTitle("관리자 전용 페이지");
      setSubTitle("관리자만 접근 가능합니다.");
      setIsOpen(true);
      setIsNavigate(`/login`);
      return;
    } else {
      getTeacherList({
        successFn,
        errorFn,
        iclass,
        page,
      });
    }
  }, [iclass, page]);

  const successFn = result => {
    setTeacherList(result);
    console.log("됐나요?", result);
  };

  const errorFn = result => {
    setTeacherList(result);
  };

  // 체크 항목 상태 변경
  const [checkedItems, setCheckedItems] = useState([]);

  const oncheckedClick = item => {
    setCheckedItems(item);
  };
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
      <TeacherListComponent
        iclass={iclass}
        page={page}
        teacherList={teacherList}
        oncheckedClick={oncheckedClick}
        checkedItems={checkedItems}
      />
    </>
  );
};

export default TeacherInfoList;
