import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import {
  PageNum,
  UserTop,
  UserTopRight,
} from "../../styles/adminstyle/guardianlist";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";
import GuardianListComponent from "../../components/adminpage/GuardianListComponent";

const handleClassChange = value => {
  console.log(value);
};

const GuardianList = () => {
  return (
    <>
      <UserTop>
        <PageTitle>학부모 관리</PageTitle>
        <UserTopRight>
          <Select
            labelInValue
            defaultValue={{
              value: "",
              label: "반 선택",
            }}
            style={{
              width: 100,
            }}
            onChange={handleClassChange}
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
          <GreenBtn>선택회원삭제</GreenBtn>
        </UserTopRight>
      </UserTop>
      <GuardianListComponent />
      <PageNum>
        <Pagination defaultCurrent={1} total={50} />
      </PageNum>
    </>
  );
};

export default GuardianList;
