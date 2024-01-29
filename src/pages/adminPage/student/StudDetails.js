import React, { useState } from "react";
import { ContentInner, PageTitle } from "../../../styles/basic";
import {
  DetailBadge,
  DetailInfo,
  FlexBox,
  MyContentWrap,
  MypageWrap,
  TitleWrap,
} from "../../../styles/user/mypage";
import { Form, Select } from "antd";
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
import { Link, useNavigate } from "react-router-dom";

const StudDetails = () => {
  const navigate = useNavigate();
  const handleClickList = () => {
    navigate(`/admin/student/list`);
  };
  const handleClickCreate = () => {
    navigate(`/admin/student/Create`);
  };
  const ilevel = "admin";
  const [myData, setMyData] = useState("default");
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
    console.log(componentSize);
  };
  return (
    <ContentInner>
      <MypageWrap>
        {/* 마이페이지 상단 버튼 */}
        <TitleWrap>
          <PageTitle>마이페이지</PageTitle>
          <FlexBox>
            <Form onValuesChange={onFormLayoutChange} layout="inline">
              <Form.Item>
                <Select defaultValue="2024">
                  <Select.Option value="2024">2024년</Select.Option>
                  <Select.Option value="2023">2023년</Select.Option>
                  <Select.Option value="2022">2022년</Select.Option>
                  <Select.Option value="2021">2021년</Select.Option>
                  <Select.Option value="2020">2020년</Select.Option>
                  <Select.Option value="2019">2019년</Select.Option>
                </Select>
              </Form.Item>
            </Form>
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
          <MyProfileComponent ilevel={ilevel} myData={myData} />
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
            <MyPhysicalComponent />
            {/* 상세정보 - 칭찬뱃지 */}
            <DetailBadge>
              <MyBadge keywordValue={1} text="활발한 어린이 입니다." />
              <MyBadge keywordValue={2} text="예의바른 어린이 입니다." />
              <MyBadge keywordValue={3} text="창의적인 어린이 입니다." />
              <MyBadge keywordValue={null} text={""} />
            </DetailBadge>
          </DetailInfo>
        </MyContentWrap>
      </MypageWrap>
    </ContentInner>
  );
};

export default StudDetails;
