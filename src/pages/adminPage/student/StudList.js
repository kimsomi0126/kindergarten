import React from "react";
import ContentLayout from "../../../layouts/common/ContentLayout";
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
const handlePageChange = (page, pageSize) => {
  // 페이지 변경 시 처리할 로직을 추가할 수 있습니다.
  console.log("Page:", page, "PageSize:", pageSize);
};
const StudList = () => {
  return (
    <ContentLayout>
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
        <input type="checkbox" id="selectAll" />
        <label htmlFor="selectAll">전체 선택</label>
        <StudentListWrap>
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
          <StudentListItem>
            <StudentListBox>
              <input type="checkbox" />
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
        defaultCurrent={1} // 초기 선택된 페이지
        total={50} // 전체 아이템 수
        pageSize={10} // 한 페이지에 보여질 아이템 수
        onChange={handlePageChange} // 페이지 변경 시의 콜백 함수
      />
    </ContentLayout>
  );
};

export default StudList;
