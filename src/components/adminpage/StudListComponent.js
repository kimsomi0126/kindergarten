import React, { useState } from "react";
import {
  StudentImg,
  StudentInfo,
  StudentListBox,
  StudentListItem,
  StudentListWrap,
  StudentMain,
} from "../../styles/adminstyle/studentlist";
import { Pagination } from "antd";
import { PageNum } from "../../styles/adminstyle/guardianlist";

const pageSize = 12;
const handlePageChange = (page, pageSize) => {
  // 페이지 변경 시 처리할 로직을 추가할 수 있습니다.
  console.log("Page:", page, "PageSize:", pageSize);
};
const StudListComponent = () => {
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
      <StudentMain>
        <div>
          <input
            type="checkbox"
            id="selectAll"
            name="student"
            checked={selectAllChecked}
            onChange={handleSelectAllChange}
          />
          <label htmlFor="selectAll">전체 선택</label>
        </div>
        <StudentListWrap>
          {[...Array(pageSize).keys()].map(index => (
            <StudentListItem key={index}>
              <StudentListBox>
                <input
                  type="checkbox"
                  name="student"
                  onChange={handleStudentCheckboxChange}
                />
                <StudentImg>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/information/sunflower.svg"
                    }
                  ></img>
                </StudentImg>
                <StudentInfo>
                  <p className="sunflower">해바라기반</p>
                  <p className="leaf">신짱구</p>
                </StudentInfo>
              </StudentListBox>
            </StudentListItem>
          ))}
        </StudentListWrap>
      </StudentMain>
      <PageNum>
        <Pagination
          // defaultCurrent={1}
          total={50}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </PageNum>
    </>
  );
};

export default StudListComponent;
