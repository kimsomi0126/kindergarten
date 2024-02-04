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
import { Link, useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { IMG_URL } from "../../api/config";

const StudListComponent = ({
  page,
  kidCheck,
  studentList,
  oncheckedClick,
  checkedItems,
}) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // 체크박스 전체 선택 시 pk값 수집
  const handleSelectAllChange = e => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="ikid"]',
    );
    const updatedCheckedItems = Array.from(checkboxes)
      .filter((checkbox, index) => index !== 0 && (checkbox.checked = checked))
      .map(checkbox => (checked ? parseInt(checkbox.value) : null))
      .filter(value => value !== null);

    // setCheckedItems(updatedCheckedItems);
    oncheckedClick(updatedCheckedItems);
  };

  // 개별 선택 시 pk값 수집
  const handleChangeCheck = e => {
    const value = parseInt(e.target.value);
    if (!e.target.checked) {
      oncheckedClick(prevItems => prevItems.filter(item => item !== value));
    } else {
      oncheckedClick([...checkedItems, value]);
    }
    // oncheckedClick(checkedItems);
  };

  // 페이지네이션
  const handleChangePage = page => {
    console.log(page);
    navigate(`/admin/student?page=${page}&kidCheck=${kidCheck}`);
  };

  return (
    <>
      <StudentMain>
        <div>
          <input
            type="checkbox"
            id="selectAll"
            name="ikid"
            checked={selectAllChecked}
            onChange={handleSelectAllChange}
          />
          <label htmlFor="selectAll">전체 선택</label>
        </div>
        <StudentListWrap>
          {Array.isArray(studentList.kidPage) &&
            studentList.kidPage.map(item => (
              <StudentListItem key={item.ikid}>
                <input
                  type="checkbox"
                  name="ikid"
                  value={item.ikid}
                  onChange={e => {
                    handleChangeCheck(e);
                  }}
                />
                <Link
                  to={`/admin/student/details?year=${currentYear}&ikid=${item.ikid}`}
                >
                  <StudentListBox>
                    <StudentImg>
                      <img
                        src={`${IMG_URL}/pic/kid/${item.ikid}/${item.profile}`}
                      />
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
                </Link>
              </StudentListItem>
            ))}
        </StudentListWrap>
      </StudentMain>
      <PageNum>
        <Pagination
          defaultCurrent={page}
          total={studentList.totalCnt}
          onChange={handleChangePage}
        />
      </PageNum>
    </>
  );
};

export default StudListComponent;
