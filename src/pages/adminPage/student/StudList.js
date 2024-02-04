import React, { useEffect, useRef, useState } from "react";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
  const [changeState, setChangeState] = useState(0);
  const { loginState } = useCustomLogin();
  const [serchParams, setSearchParams] = useSearchParams();

  const page = serchParams.get("page");
  const kidCheck = serchParams.get("kidCheck");
  const { isLogin } = useCustomLogin();
  const navigate = useNavigate();
  // 원생 리스트 GET
  useEffect(() => {
    if (!isLogin) {
      setTitle("관리자 전용 페이지");
      setSubTitle("관리자만 접근 가능합니다.");
      setIsOpen(true);
      setIsNavigate(`/login`);
      return;
    } else {
      getAdminStudentList({
        successFn,
        errorFn,
        page,
        kidCheck,
      });
    }
  }, [page, kidCheck, checkedItems]);

  const successFn = result => {
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
          <Link to={`/admin/student?page=1&kidCheck=${item.kidCheck}`}>
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

  // 선택 졸업 & 선택 퇴소 모달
  const [delOpen, setDelOpen] = useState(false);
  const [ClassOpen, setClassOpen] = useState(false);
  const [ChangeOpen, setChangeOpen] = useState(false);

  const handleClassClick = () => {
    if (checkedItems.length === 0) {
      console.log("변경할 대상이 없습니다");
      setIsOpen(true);
      setTitle("변경할 대상이 없습니다.");
    } else {
      setClassOpen(true);
      setTitle("반 일괄 수정");
      setSubTitle("반 이름을 선택해주세요.");
    }
  };
  const handleChangeClick = () => {
    if (checkedItems.length === 0) {
      console.log("변경할 대상이 없습니다");
      setIsOpen(true);
      setTitle("변경할 대상이 없습니다.");
    } else {
      console.log("재원상태 변경");
      setChangeOpen(true);
      setTitle("재원 상태 수정");
      setSubTitle("재원 상태를 선택해주세요.");
    }
  };
  const handleDelOk = () => {
    formRef.current.submit();
    // const obj = {
    //   ikids: [...checkedItems],
    //   kidCheck: changeState,
    // };
    // console.log("오비제이", obj);
    // patchClass({
    //   successpatchFn,
    //   errorpatchFn,
    //   obj,
    // });
  };
  const successpatchFn = res => {
    setIsOpen(true);
    setTitle("변경 완료");
    setSubTitle("성공적으로 변경되었습니다.");
    setDelOpen(false);
    setClassOpen(false);
    setChangeOpen(false);
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
    setClassOpen(false);
    setChangeOpen(false);
  };
  // const handleChangeCancel = () => {
  //   setDelOpen(false);
  //   SetClassOpen(false);
  // };
  const handleOk = () => {
    setIsOpen(false);
    // 링크이동
    if (isNavigate) {
      navigate(isNavigate);
    }
  };

  const formRef = useRef();
  const handleExternalSubmit = () => {
    formRef.current.submit();
  };

  const onValuesChange = values => {
    const res = parseInt(values.class);
    setChangeState(res);
  };
  const onFinish = values => {
    const obj = {
      ikids: [...checkedItems],
      kidCheck: changeState,
    };
    console.log("오비제이", obj);
    patchClass({
      successpatchFn,
      errorpatchFn,
      obj,
    });
  };
  console.log(changeState);
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
          <BlueBtn
            onClick={() => {
              handleClassClick();
            }}
          >
            선택 반 변경
          </BlueBtn>
          <PurpleBtn
            onClick={() => {
              handleChangeClick();
            }}
          >
            재원 상태 변경
          </PurpleBtn>
          {/* <PurpleBtn
            onClick={() => {
              setChangeState(-1);
              handleChangeClick();
            }}
          >
            선택졸업
          </PurpleBtn>
          <OrangeBtn
            onClick={() => {
              setChangeState(-2);
              handleChangeClick();
            }}
          >
            선택퇴소
          </OrangeBtn> */}
        </StudentTopRight>
      </StudentTop>
      <StudListComponent
        page={page}
        kidCheck={kidCheck}
        studentList={studentList}
        oncheckedClick={oncheckedClick}
        checkedItems={checkedItems}
      />
      {/* 안내창 */}
      <ModalOneBtn
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      />
      {/* 재원 상태 변경창 */}
      {/* <ModalTwoBtn
        isOpen={delOpen}
        handleOk={handleDelOk}
        handleCancel={handleCancel}
        title={title}
        subTitle={subTitle}
      /> */}
      {/* 반 상태 변경창 */}
      <ModalTwoBtn
        isOpen={ClassOpen}
        handleOk={handleExternalSubmit}
        handleCancel={handleCancel}
        title={title}
        subTitle={subTitle}
      >
        <Form
          ref={formRef}
          name="account"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="class">
            <Select placeholder="반 선택">
              <Select.Option value="1">무궁화반</Select.Option>
              <Select.Option value="2">해바라기반</Select.Option>
              <Select.Option value="3">장미반</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </ModalTwoBtn>
      {/* 재원 상태 변경창 */}
      <ModalTwoBtn
        isOpen={ChangeOpen}
        handleOk={handleDelOk}
        handleCancel={handleCancel}
        title={title}
        subTitle={subTitle}
      >
        <Form
          ref={formRef}
          name="account"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="class">
            <Select placeholder="재원 상태 선택">
              <Select.Option value="0">재원</Select.Option>
              <Select.Option value="-1">졸업</Select.Option>
              <Select.Option value="-2">퇴소</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </ModalTwoBtn>
    </>
  );
};

export default StudList;
