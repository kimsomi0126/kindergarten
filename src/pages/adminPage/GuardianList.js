import { Select } from "antd";
import Search from "antd/es/input/Search";
import React, { lazy } from "react";
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrap,
  ListId,
  ListItem,
  ListName,
  StyledSearch,
  StyledSelect,
} from "../../styles/guardianlist";
import ContentLayout from "../../layouts/ContentLayout";

// 원아관리 상세
// const LazyStudentDetails = lazy(() =>
//   import("./pages/adminPage/StudentDetails"),
// );

// 원아관리 상세정보 입력
// const LazyStudentDetailsForm = lazy(() =>
//   import("./pages/adminPage/StudentDetailsForm"),
// );

// 원아 관리 리스트
// const LazyStudentList = lazy(() => import("./pages/adminPage/StudentList"));
// const LazyStudentNewDetails = lazy(() =>
//   import("./pages/adminPage/StudentNewDetails"),
// );
const handleChange = value => {
  console.log(value);
};
const onSearch = (value, info) => console.log(info?.source, value);
const GuardianList = () => {
  return (
    <ContentLayout>
      <HeaderWrap>
        <HeaderLeft>학부모 관리</HeaderLeft>
        <HeaderRight>
          <StyledSelect
            labelInValue
            defaultValue={{
              value: "반 선택",
              label: "반 선택",
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
          <StyledSearch placeholder="이름을 입력하세요." onSearch={onSearch} />

          <button>선택회원삭제</button>
        </HeaderRight>
      </HeaderWrap>

      <div className="GuardianListWrap">
        <ListItem>
          <input type="checkbox" />
          <ListId>bong11</ListId>
          <ListName>봉미선</ListName>
          <div className="ListChild">해바라기반 신짱구</div>
          <em className="ListPhoneNumber">010.0000.0000</em>
          <button>정보수정</button>
        </ListItem>
      </div>
    </ContentLayout>
  );
};

export default GuardianList;
