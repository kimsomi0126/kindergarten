import { Button, Dropdown, Pagination, Select } from "antd";
import React, { useEffect, useState } from "react";
import { PageNum } from "../../styles/adminstyle/guardianlist";
import { PageTitle } from "../../styles/basic";
import GuardianListComponent from "../../components/adminpage/GuardianListComponent";
import { IndWrap } from "../../styles/individualNotice/ind";
import { FlexBox, TitleWrap } from "../../styles/user/mypage";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { DownOutlined } from "@ant-design/icons";
import IndListComponent from "../../components/individualNotice/IndListComponent";
import { getIndList } from "../../api/individualNotice/indivNoticeApi";

const IndivNotiList = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();
  const [indList, setIndList] = useState();

  // 현재 출력 년도, kid 값 체크
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  const page = serchParams.get("page");

  // 로그인 회원 정보에서 아이 리스트 추출
  const { loginState, isParentLogin, doLogout } = useCustomLogin();
  const ikidList = loginState.kidList;

  // ikid 값만 추출하여 파라미터값과 비교
  const kidCheck = Array.isArray(ikidList) && ikidList.map(item => item.ikid);

  // 년도 선택
  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const yearArr = [];
  for (let yearNum = startYear; yearNum <= currentYear; yearNum++) {
    yearArr.push({
      key: yearNum.toString(),
      label: <Link to={`/mypage?year=${yearNum}&ikid=${ikid}`}>{yearNum}</Link>,
    });
  }

  // 아이 선택
  const items =
    Array.isArray(ikidList) &&
    ikidList.map(item => {
      return {
        key: item.ikid.toString(),
        label: (
          <Link to={`/mypage?year=${year}&ikid=${item.ikid}`}>
            {item.kidNm}
          </Link>
        ),
      };
    });

  const handleChange = value => {
    console.log(value);
  };
  const handlePageChange = (page, pageSize) => {
    console.log("Page:", page, "PageSize:", pageSize);
  };
  useEffect(() => {
    getIndList({ page, year, ikid, errorFn, successFn });
  }, []);

  const successFn = res => {
    console.log(res);
    setIndList(res);
  };
  const errorFn = res => {
    console.log(res);
  };
  return (
    <IndWrap>
      <TitleWrap>
        <PageTitle>알림장</PageTitle>
        <FlexBox>
          <Dropdown menu={{ items: yearArr }}>
            <Button>
              {year}
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown menu={{ items }}>
            <Button>
              {" "}
              이름
              <DownOutlined />
            </Button>
          </Dropdown>
        </FlexBox>
      </TitleWrap>
      <IndListComponent listData={indList} />
      <PageNum>
        <Pagination
          defaultCurrent={1} // 초기 선택된 페이지
          total={10} // 전체 아이템 수
          pageSize={12} // 한 페이지에 보여질 아이템 수
          onChange={handlePageChange} // 페이지 변경 시의 콜백 함수
        />
      </PageNum>
    </IndWrap>
  );
};

export default IndivNotiList;
