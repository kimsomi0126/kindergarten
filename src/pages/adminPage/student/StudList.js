import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Select } from "antd";
import Search from "antd/es/input/Search";
import {
  StudentTop,
  StudentTopRight,
} from "../../../styles/adminstyle/studentlist";
import { PageTitle } from "../../../styles/basic";
import { BlueBtn, OrangeBtn, PurpleBtn } from "../../../styles/ui/buttons";
import StudListComponent from "../../../components/adminpage/StudListComponent";
import ModalTwoBtn from "../../../components/ui/ModalTwoBtn";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import useCustomLogin from "../../../hooks/useCustomLogin";
import {
  getAdminStudentList,
  patchClass,
} from "../../../api/adminPage/admin_api";
import ModalOneBtn from "../../../components/ui/ModalOneBtn";
import { DownOutlined } from "@ant-design/icons";

const initStudentList = {
  kidPage: [
    {
      ikid: 0,
      iclass: 0,
      kidNm: "",
      profile: "",
    },
  ],
  totalCnt: 0,
};

const StudList = () => {
  const [studentList, setStudentList] = useState(initStudentList);
  const [checkedItems, setCheckedItems] = useState([]);
  const { loginState } = useCustomLogin();
  const [serchParams, setSearchParams] = useSearchParams();
  const page = serchParams.get("page");
  const kidCheck = serchParams.get("kidCheck");

  // 원생 리스트 GET
  useEffect(() => {
    getAdminStudentList({
      successFn,
      failFn,
      errorFn,
      page,
      kidCheck,
    });
  }, [page, kidCheck, checkedItems]);
  const successFn = result => {
    setStudentList(result);
  };
  const failFn = result => {
    setStudentList(result);
  };
  const errorFn = result => {
    setStudentList(result);
  };

  // 반 선택
  const classArr = [
    { kidCheck: 0, classNm: "반 전체" },
    { kidCheck: 1, classNm: "무궁화반" },
    { kidCheck: 2, classNm: "해바라기반" },
    { kidCheck: 3, classNm: "장미반" },
    { kidCheck: -1, classNm: "졸업" },
    { kidCheck: -2, classNm: "퇴소" },
  ];

  const classItems =
    Array.isArray(classArr) &&
    classArr.map(item => {
      return {
        key: item.kidCheck.toString(),
        label: (
          <Link to={`/admin/student?page=${page}&kidCheck=${item.kidCheck}`}>
            {item.classNm}
          </Link>
        ),
      };
    });
  // 모달창 내용
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigate, setIsNavigate] = useState();

  const oncheckedClick = item => {
    setCheckedItems(item);
  };
  console.log("체크", checkedItems);

  // 반 변경 모달창

  // 졸업 모달창
  const [delOpen, setDelOpen] = useState(false);

  const handleGraduateClick = () => {
    console.log("선택 졸업");
    setDelOpen(true);
    setTitle("정말 변경할까요?");
    setSubTitle("확인하면 원생의 재원 상태가 변경됩니다.");
  };
  const handleDelOk = () => {
    const obj = {
      ikids: [...checkedItems],
      kidCheck: -1,
    };
    console.log("오비제이", checkedItems);
    patchClass({
      successpatchFn,
      errorpatchFn,
      obj,
    });
  };
  const successpatchFn = res => {
    setIsOpen(true);
    setTitle("변경 완료");
    setSubTitle("성공적으로 변경되었습니다.");
    setDelOpen(false);
    setCheckedItems([]);
  };
  const errorpatchFn = res => {
    console.log(res);
    setIsOpen(true);
    setTitle("변경 실패");
    setSubTitle("변경을 실패했습니다. 다시 시도해주세요.");
  };
  const handleCancel = () => {
    setDelOpen(false);
  };
  const handleOk = () => {
    setIsOpen(false);
    // 링크이동
    if (isNavigate) {
      Navigate(isNavigate);
    }
  };

  // 퇴소 모달창

  return (
    <>
      <StudentTop>
        <PageTitle>원생 관리</PageTitle>
        <StudentTopRight>
          <Dropdown menu={{ items: classItems }}>
            <Button>
              {kidCheck === "0"
                ? "반 전체"
                : kidCheck === "1"
                ? "무궁화반"
                : kidCheck === "2"
                ? "해바라기반"
                : kidCheck === "3"
                ? "장미반"
                : kidCheck === "-1"
                ? "졸업"
                : kidCheck === "-2"
                ? "퇴소"
                : "반 선택"}
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
          <BlueBtn>선택 반 변경</BlueBtn>

          <PurpleBtn onClick={handleGraduateClick}>선택졸업</PurpleBtn>
          {/* 안내창 */}
          <ModalOneBtn
            isOpen={isOpen}
            handleOk={handleOk}
            title={title}
            subTitle={subTitle}
          />
          {/* 재원 상태 변경창 */}
          <ModalTwoBtn
            isOpen={delOpen}
            handleOk={handleDelOk}
            handleCancel={handleCancel}
            title={title}
            subTitle={subTitle}
          />
          <OrangeBtn>선택퇴소</OrangeBtn>
        </StudentTopRight>
      </StudentTop>
      <StudListComponent
        page={page}
        kidCheck={kidCheck}
        studentList={studentList}
        oncheckedClick={oncheckedClick}
        checkedItems={checkedItems}
      />
    </>
  );
};

export default StudList;
