import React, { useEffect, useState } from "react";
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
import { getAdminStudentList } from "../../api/adminPage/admin_api";

const initStudentList = [
  {
    ikid: 0,
    iclass: 0,
    kidNm: "",
    profile: "",
  },
];
const pageSize = 12;
const handlePageChange = (page, pageSize) => {
  // 페이지 변경 시 처리할 로직을 추가할 수 있습니다.
  console.log("Page:", page, "PageSize:", pageSize);
};
const StudListComponent = () => {
  const [studentList, setStudentList] = useState(initStudentList);
  const page = 1;
  const kidCheck = 1;

  useEffect(() => {
    getAdminStudentList({ successFn, failFn, errorFn, page, kidCheck });
  }, []);
  const successFn = result => {
    setStudentList(result);
  };
  const failFn = result => {
    setStudentList(result);
  };
  const errorFn = result => {
    setStudentList(result);
  };

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
          {studentList.map(item => (
            <StudentListItem key={item.ikid}>
              <StudentListBox>
                <input
                  type="checkbox"
                  name="student"
                  onChange={handleStudentCheckboxChange}
                />
                <StudentImg>
                  <img src={item.profile} />
                </StudentImg>
                <StudentInfo>
                  <p
                    className={
                      item.iclass === 1
                        ? "hibiscus"
                        : item.iclass === 2
                        ? "sunflower"
                        : item.iclass === 3
                        ? "rose"
                        : ""
                    }
                  >
                    {item.iclass === 1
                      ? "무궁화반"
                      : item.iclass === 2
                      ? "해바라기반"
                      : item.iclass === 3
                      ? "장미반"
                      : ""}
                  </p>
                  <p className="leaf">{item.kidNm}</p>
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
