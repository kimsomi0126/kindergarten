import React from "react";
import ContentLayout from "../../layouts/ContentLayout";
import { Select } from "antd";
import Search from "antd/es/input/Search";

const handleChange = value => {
  console.log(value);
};
const StudentList = () => {
  return (
    <ContentLayout>
      <div className="StudentTop">
        <div className="StudentTopLeft">원생 관리</div>
        <div className="StudentTopRight">
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
        </div>
        <button>선택 반 변경</button>
        <button>선택졸업</button>
        <button>선택취소</button>
      </div>
      <div className="StudentMain">
        <ul className="StudentListWrap">
          <li className="StudentListItem">
            <div className="StudentImg">
              <img></img>
            </div>
            <div className="StudentInfo">
              <img></img>
              <p>해바라기반</p>
              <img></img>
              <span>신짱구</span>
            </div>
          </li>
        </ul>
      </div>
    </ContentLayout>
  );
};

export default StudentList;
