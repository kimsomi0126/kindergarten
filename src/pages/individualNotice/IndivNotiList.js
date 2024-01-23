import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import {
  PageNum,
  UserTop,
  UserTopRight,
} from "../../styles/adminstyle/guardianlist";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";
import GuardianListComponent from "../../components/adminpage/GuardianListComponent";

const handleChange = value => {
  console.log(value);
};
const handlePageChange = (page, pageSize) => {
  // 페이지 변경 시 처리할 로직을 추가할 수 있습니다.
  console.log("Page:", page, "PageSize:", pageSize);
};

const IndivNotiList = () => {
  return (
    <>
      <UserTop>
        <PageTitle>알림장</PageTitle>
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
              width: 400,
            }}
            allowClear
          />
        </UserTopRight>
      </UserTop>
      <GuardianListComponent />
      <PageNum>
        <Pagination
          defaultCurrent={1} // 초기 선택된 페이지
          total={50} // 전체 아이템 수
          pageSize={10} // 한 페이지에 보여질 아이템 수
          onChange={handlePageChange} // 페이지 변경 시의 콜백 함수
        />
      </PageNum>
    </>
  );
};

export default IndivNotiList;
