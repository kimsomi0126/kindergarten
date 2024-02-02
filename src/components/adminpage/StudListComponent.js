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
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useSearchParams } from "react-router-dom";
import { IMG_URL } from "../../api/config";

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

const StudListComponent = () => {
  const [studentList, setStudentList] = useState(initStudentList);
  const { loginState } = useCustomLogin();
  const currentYear = new Date().getFullYear();
  const ikidList = loginState.kidList;
  const [serchParams, setSearchParams] = useSearchParams();
  const page = serchParams.get("page");
  const kidCheck = serchParams.get("kidCheck");

  useEffect(() => {
    getAdminStudentList({
      successFn,
      failFn,
      errorFn,
      page,
      kidCheck,
    });
  }, [page]);
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
  // 원아 상세 페이지로 이동
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate(`/admin/student/details`);
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
            name="student"
            checked={selectAllChecked}
            onChange={handleSelectAllChange}
          />
          <label htmlFor="selectAll">전체 선택</label>
        </div>
        <StudentListWrap>
          {Array.isArray(studentList.kidPage) &&
            studentList.kidPage.map(item => (
              <StudentListItem
                key={item.ikid}
                onClick={e =>
                  navigate(
                    `/admin/student/details?year=${currentYear}&ikid=${item.ikid}`,
                  )
                }
              >
                <StudentListBox>
                  <input
                    type="checkbox"
                    name="student"
                    onChange={handleStudentCheckboxChange}
                  />
                  <StudentImg>
                    <img src={`${IMG_URL}/pic/kid/profile/${item.profile}`} />
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
          defaultCurrent={page}
          total={studentList.totalCnt}
          onChange={handleChangePage}
        />
      </PageNum>
    </>
  );
};

export default StudListComponent;
