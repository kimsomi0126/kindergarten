import React, { useState } from "react";
import { ContentInner, PageTitle } from "../../styles/basic";
import { Form, Select } from "antd";
import {
  DetailBadge,
  DetailInfo,
  FlexBox,
  MyContentWrap,
  MypageWrap,
  TitleWrap,
} from "../../styles/user/mypage";
import {
  BtnWrap,
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PinkBtn,
} from "../../styles/ui/buttons";
import MyProfileComponent from "../../components/user/mypage/MyProfileComponent";
import MyAccountComponent from "../../components/user/mypage/MyAccountComponent";
import MyPhysicalComponent from "../../components/user/mypage/MyPhysicalComponent";
import MyBadge from "../../components/user/mypage/MyBadge";

const MyPage = () => {
  const ilevel = "parent";
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
              <Form.Item>
                <Select label="Select" defaultValue="1">
                  <Select.Option value="1">신짱구</Select.Option>
                  <Select.Option value="2">신짱아</Select.Option>
                </Select>
              </Form.Item>
            </Form>
            <BtnWrap>
              <GrayBtn>아이추가</GrayBtn>
              <GrayBtn>알림장</GrayBtn>
              <GreenBtn>학부모정보수정</GreenBtn>
              <PinkBtn>회원탈퇴</PinkBtn>
            </BtnWrap>
          </FlexBox>
        </TitleWrap>
        {/* 마이페이지 내용 시작 */}
        <MyContentWrap>
          {/* 프로필 */}
          <MyProfileComponent ilevel={ilevel} />
          {/* 연결계정 */}
          {ilevel === "admin" ? <MyAccountComponent /> : null}
          {/* 상세정보 */}
          <DetailInfo>
            <TitleWrap>
              <PageTitle>상세정보</PageTitle>
              {ilevel === "admin" ? <OrangeBtn>상세정보 입력</OrangeBtn> : null}
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

export default MyPage;
