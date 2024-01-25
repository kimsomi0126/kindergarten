import React, { useEffect, useState } from "react";
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
import MyPhysicalComponent from "../../components/user/mypage/MyPhysicalComponent";
import MyBadge from "../../components/user/mypage/MyBadge";
import useCustomLogin from "../../hooks/useCustomLogin";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import { useNavigate } from "react-router";
import { getMypage } from "../../api/user/userApi";

const initState = {
  kidNm: "",
  iclass: 0,
  gender: 0,
  profile: "",
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
const MyPage = () => {
  const navigate = useNavigate();
  const { loginState, isParentLogin } = useCustomLogin();
  const [ikid, setIkid] = useState(3);
  const [myData, setMyData] = useState(initState);
  const [year, setYear] = useState("2024");
  const handleVelueChange = e => {
    setYear(e);
  };

  const handleOk = () => {
    navigate("/");
  };
  useEffect(() => {
    getMypage({ year, ikid, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setMyData(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  console.log(myData);
  return (
    <ContentInner>
      {!isParentLogin ? (
        <ModalOneBtn
          isOpen={true}
          handleOk={handleOk}
          title="학부모회원 전용페이지"
          subTitle="학부모회원만 이용할 수 있는 서비스 입니다."
        />
      ) : null}

      <MypageWrap>
        {/* 마이페이지 상단 버튼 */}
        <TitleWrap>
          <PageTitle>마이페이지</PageTitle>
          <FlexBox>
            <Form
              onValuesChange={e => {
                handleVelueChange(e);
              }}
              layout="inline"
              initialValues={{
                year: "2024",
              }}
            >
              <Form.Item name="year">
                <Select>
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
          <MyProfileComponent ilevel={parent} myData={myData} />
          {/* 연결계정 */}
          {/* 상세정보 */}
          <DetailInfo>
            <TitleWrap>
              <PageTitle>상세정보</PageTitle>
            </TitleWrap>
            {/* 상세정보 - 신체정보 */}
            <MyPhysicalComponent myData={myData} />
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
