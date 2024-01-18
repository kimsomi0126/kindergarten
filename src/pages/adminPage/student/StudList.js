import React, { useState } from "react";
import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import {
  StudentImg,
  StudentInfo,
  StudentListBox,
  StudentListItem,
  StudentListWrap,
  StudentMain,
  StudentTop,
  StudentTopRight,
} from "../../../styles/adminstyle/studentlist";
import { PageTitle } from "../../../styles/basic";
import { BlueBtn, OrangeBtn, PurpleBtn } from "../../../styles/ui/buttons";

const handleChange = value => {
  console.log(value);
};
const handlePageChange = (page, pageSize) => {};

const StudList = () => {
  // 체크박스 전체 선택
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleSelectAllChange = e => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="student"]',
    );

    checkboxes.forEach(checkbox => {
      checkbox.checked = checked;
    });
  };

  const handleStudentCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="student"]',
    );

    const allChecked = Array.from(checkboxes).every(
      checkbox => checkbox.checked,
    );

    setSelectAllChecked(allChecked);
  };
  return (
    <>
      <StudentTop>
        <PageTitle>원생 관리</PageTitle>
        <StudentTopRight>
          <Select
            labelInValue
            defaultValue={{
              value: "",
              label: "반 선택",
            }}
            style={{
              width: 100,
            }}
            onChange={handleChange}
            options={[
              {
                value: "1",
                label: "무궁화반",
              },
              {
                value: "2",
                label: "해바라기반",
              },
              {
                value: "3",
                label: "장미반",
              },
              {
                value: "-1",
                label: "졸업",
              },
              {
                value: "-2",
                label: "퇴소",
              },
            ]}
          />
          <Search
            placeholder="검색어를 입력하세요."
            style={{
              width: 200,
            }}
            allowClear
          />
          <BlueBtn>선택 반 변경</BlueBtn>
          <PurpleBtn>선택졸업</PurpleBtn>
          <OrangeBtn>선택취소</OrangeBtn>
        </StudentTopRight>
      </StudentTop>
      <StudentMain>
        <input
          type="checkbox"
          id="selectAll"
          name="student"
          checked={selectAllChecked}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="selectAll">전체 선택</label>
        <StudentListWrap>
          <StudentListItem>
            <StudentListBox>
              <input
                type="checkbox"
                name="student"
                onChange={handleStudentCheckboxChange}
              />
              <StudentImg>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/information/sunflower.svg"
                  }
                ></img>
              </StudentImg>
              <StudentInfo>
                <p className="sunflower">해바라기반</p>
                <p className="leaf">신짱구</p>
              </StudentInfo>
            </StudentListBox>
          </StudentListItem>
          <StudentListItem>
            <StudentListBox>
              <input
                type="checkbox"
                name="student"
                onChange={handleStudentCheckboxChange}
              />
              <StudentImg>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/information/sunflower.svg"
                  }
                ></img>
              </StudentImg>
              <StudentInfo>
                <p className="hibiscus">해바라기반</p>
                <p className="rose">신짱구</p>
              </StudentInfo>
            </StudentListBox>
          </StudentListItem>
          <StudentListItem>
            <StudentListBox>
              <input
                type="checkbox"
                name="student"
                onChange={handleStudentCheckboxChange}
              />
              <StudentImg>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/information/sunflower.svg"
                  }
                ></img>
              </StudentImg>
              <StudentInfo>
                <p className="sunflower">해바라기반</p>
                <p className="rose">신짱구</p>
              </StudentInfo>
            </StudentListBox>
          </StudentListItem>
        </StudentListWrap>
      </StudentMain>
      <Pagination
        defaultCurrent={1}
        total={12} // 전체 아이템 수
        pageSize={3} // 한 페이지당 3개의 아이템
        onChange={handlePageChange}
      />
    </>
  );
};

export default StudList;
