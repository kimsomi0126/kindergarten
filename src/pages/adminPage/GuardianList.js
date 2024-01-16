import React, { lazy } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import {
  UserInfo,
  UserListBox,
  UserListItem,
  UserListWrap,
  UserMain,
  UserTop,
  UserTopRight,
} from "../../styles/adminstyle/guardianlist";
import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import { Outlet } from "react-router";
import { PageTitle } from "../../styles/basic";
import { GrayBtn, GreenBtn } from "../../styles/ui/buttons";

const handleChange = value => {
  console.log(value);
};
const handlePageChange = (page, pageSize) => {
  // 페이지 변경 시 처리할 로직을 추가할 수 있습니다.
  console.log("Page:", page, "PageSize:", pageSize);
};
const GuardianList = () => {
  return (
    <>
      <ContentLayout>
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
            <GreenBtn>선택회원삭제</GreenBtn>
          </UserTopRight>
        </UserTop>

        <UserMain>
          <UserListWrap>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <GrayBtn>정보 수정</GrayBtn>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
            <UserListItem>
              <UserListBox>
                <input type="checkbox" />
                <span>bong11</span>
                <UserInfo>
                  <p>봉미선 </p>
                  <p>해바라기반 신짱구</p>
                </UserInfo>
                <em>010.0000.0000</em>
                <button>정보 수정</button>
              </UserListBox>
            </UserListItem>
          </UserListWrap>
        </UserMain>
        <Pagination
          defaultCurrent={1} // 초기 선택된 페이지
          total={50} // 전체 아이템 수
          pageSize={10} // 한 페이지에 보여질 아이템 수
          onChange={handlePageChange} // 페이지 변경 시의 콜백 함수
        />
      </ContentLayout>
    </>
  );
};

export default GuardianList;
