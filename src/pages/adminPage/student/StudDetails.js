import React, { useEffect, useState } from "react";
import { ContentInner, PageTitle } from "../../../styles/basic";
import {
  DetailBadge,
  DetailInfo,
  FlexBox,
  MyContentWrap,
  MypageWrap,
  TitleWrap,
} from "../../../styles/user/mypage";
import { Button, Dropdown, Form, Select } from "antd";
import {
  BtnWrap,
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PurpleBtn,
} from "../../../styles/ui/buttons";
import MyProfileComponent from "../../../components/user/mypage/MyProfileComponent";
import MyAccountComponent from "../../../components/user/mypage/MyAccountComponent";
import MyPhysicalComponent from "../../../components/user/mypage/MyPhysicalComponent";
import MyBadge from "../../../components/user/mypage/MyBadge";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import useCustomLogin from "../../../hooks/useCustomLogin";
import { getMyPageInfo } from "../../../api/adminPage/admin_api";

const initState = {
  kidNm: "",
  iclass: 0,
  gender: 0,
  profile: "546fe34c-bf55-46c1-9f0a-2e715edf8c61.jpg",
  birth: "",
  address: "",
  growths: [
    {
      height: 0,
      weight: 0,
      bodyDate: "",
      growth: 0,
      growthDate: "",
      growthMemo: "",
    },
  ],
  parents: [
    {
      iparent: 0,
      uid: "",
      parentNm: "",
      phoneNb: "",
      irelation: 0,
    },
  ],
  memo: ".",
  emerNm: "",
  emerNb: "",
};

const StudDetails = () => {
  // 아이 정보 가져오기
  const navigate = useNavigate();
  const [myData, setMyData] = useState(initState);
  const [serchParams, setSearchParams] = useSearchParams();
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  const { loginState, isLogin } = useCustomLogin();
  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const yearArr = [];
  for (let yearNum = startYear; yearNum <= currentYear; yearNum++) {
    yearArr.push({
      key: yearNum.toString(),
      label: <a href={`/mypage?year=${yearNum}&ikid=${ikid}`}>{yearNum}</a>,
    });
  }

  const handleClickList = () => {
    navigate(`/admin/student/list`);
  };
  const handleClickCreate = () => {
    navigate(`/admin/student/Create`);
  };

  const ilevel = "admin";
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
    console.log(componentSize);
  };
  useEffect(() => {
    getMyPageInfo({ year, ikid, successFn, failFn, errorFn }, [initState]);
  });
  const successFn = result => {
    setMyData(result);
  };
  // 데이터연동 실패
  const failFn = result => {
    console.log(result);
  };
  // 데이터연동 실패
  const errorFn = result => {
    console.log(result);
  };
  return (
    <ContentInner>
      <MypageWrap>
        {/* 마이페이지 상단 버튼 */}
        <TitleWrap>
          <PageTitle>마이페이지</PageTitle>
          <FlexBox>
            <Dropdown menu={{ items: yearArr }}>
              <Button>
                {year}
                <DownOutlined />
              </Button>
            </Dropdown>
            <BtnWrap>
              <GrayBtn>알림장작성</GrayBtn>
              <PurpleBtn onClick={handleClickCreate}>원생정보수정</PurpleBtn>
              <GreenBtn onClick={handleClickList}>목록보기</GreenBtn>
            </BtnWrap>
          </FlexBox>
        </TitleWrap>
        {/* 마이페이지 내용 시작 */}
        <MyContentWrap>
          {/* 프로필 */}
          <MyProfileComponent ilevel={ilevel} ikid={ikid} myData={myData} />
          {/* 연결계정 */}
          {ilevel === "admin" ? <MyAccountComponent /> : null}
          {/* 상세정보 */}
          <DetailInfo>
            <TitleWrap>
              <PageTitle>상세정보</PageTitle>
              {ilevel === "admin" ? (
                <Link to="/admin/student/detailsform">
                  <OrangeBtn>상세정보 입력</OrangeBtn>
                </Link>
              ) : null}
            </TitleWrap>
            {/* 상세정보 - 신체정보 */}
            <MyPhysicalComponent myData={myData} />
            {/* 상세정보 - 칭찬뱃지 */}
            <DetailBadge>
              <MyBadge
                keywordValue={
                  myData.growths[0] ? myData.growths[0].growth : null
                }
                text={myData.growths[0] ? myData.growths[0].growthMemo : ""}
              />
              <MyBadge
                keywordValue={
                  myData.growths[1] ? myData.growths[1].growth : null
                }
                text={myData.growths[1] ? myData.growths[1].growthMemo : ""}
              />
              <MyBadge
                keywordValue={
                  myData.growths[2] ? myData.growths[2].growth : null
                }
                text={myData.growths[2] ? myData.growths[2].growthMemo : ""}
              />
              <MyBadge
                keywordValue={
                  myData.growths[3] ? myData.growths[3].growth : null
                }
                text={myData.growths[3] ? myData.growths[3].growthMemo : ""}
              />
            </DetailBadge>
          </DetailInfo>
        </MyContentWrap>
      </MypageWrap>
    </ContentInner>
  );
};

export default StudDetails;
