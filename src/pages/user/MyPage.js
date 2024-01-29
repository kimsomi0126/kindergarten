import React, { useEffect, useRef, useState } from "react";
import { ContentInner, PageTitle } from "../../styles/basic";
import { Button, Dropdown, Form, Input, Select } from "antd";
import {
  DetailBadge,
  DetailInfo,
  FlexBox,
  MyContentWrap,
  MypageWrap,
  TitleWrap,
} from "../../styles/user/mypage";
import { BtnWrap, GrayBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import MyProfileComponent from "../../components/user/mypage/MyProfileComponent";
import MyPhysicalComponent from "../../components/user/mypage/MyPhysicalComponent";
import MyBadge from "../../components/user/mypage/MyBadge";
import useCustomLogin from "../../hooks/useCustomLogin";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import { useNavigate, useParams } from "react-router";
import { getMypage, getParentInfo } from "../../api/user/userApi";
import { DownOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import ModalTwoBtn from "../../components/ui/ModalTwoBtn";
import ParentEdit from "./ParentEdit";

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

const MyPage = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();
  // 현재 출력 년도, kid 값
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  // 로그인 회원 정보에서 아이 리스트 추출
  const { loginState, isParentLogin } = useCustomLogin();
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
      label: <a href={`/mypage?year=${yearNum}&ikid=${ikid}`}>{yearNum}</a>,
    });
  }
  // 아이 선택
  const items =
    Array.isArray(ikidList) &&
    ikidList.map(item => {
      return {
        key: item.ikid.toString(),
        label: <a to={`/mypage?year=${year}&ikid=${ikid}`}>{item.kidNm}</a>,
      };
    });

  // 아이 마이페이지 데이터
  const [myData, setMyData] = useState(initState);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [codeOpen, setCodeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editKey, setEditKey] = useState(0);

  // 마이페이지 데이터 가져오기
  useEffect(() => {
    // 학부모 계정이 아닐경우
    if (!isParentLogin) {
      setTitle("학부모 전용페이지");
      setSubTitle("학부모회원만 이용할 수 있는 서비스 입니다.");
      setIsOpen(true);
      return;
    } else if (!year || !ikid) {
      setTitle("잘못된 경로");
      setSubTitle("잘못된 경로입니다. 다시 시도해주세요.");
      setIsOpen(true);
      return;
    } else {
      getMypage({ year, ikid, successFn, failFn, errorFn });
    }
  }, [initState]);

  // 데이터연동 성공
  const successFn = result => {
    // 나와 연결된 아이가 맞는지 확인 후 데이터 가져옴
    if (!kidCheck.includes(parseInt(ikid))) {
      setTitle("잘못된 경로");
      setSubTitle("연결된 아이 정보가 없습니다. \n 다시 확인해주세요.");
      setIsOpen(true);
      return;
    } else {
      setMyData(result);
    }
  };
  // 데이터연동 실패
  const failFn = result => {
    console.log(result);
  };
  // 데이터연동 실패
  const errorFn = result => {
    console.log(result);
  };
  // 모달창 확인버튼
  const handleOk = () => {
    setIsOpen(false);
    // 메인으로 이동
    navigate("/");
  };

  const handleCancel = () => {
    setIsEditOpen(false);
  };

  // 학부모수정버튼 클릭
  const onParentEditClick = () => {
    setIsEditOpen(true);
    setEditKey(prevKey => prevKey + 1);
  };
  const formRef = useRef();
  // 아이추가 클릭
  const onCodeAddClick = () => {
    setCodeOpen(true);
    setTitle("아이 추가");
    setSubTitle("식별코드를 입력해주세요.");
  };
  const onFinish = values => {
    console.log("Form Finished:", values);
  };
  const handleExternalSubmit = () => {
    formRef.current.submit();
  };
  // console.log("로그인정보", loginState);
  // console.log("아이데이터", myData);

  return (
    <ContentInner>
      {/* 안내창 */}
      <ModalOneBtn
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      />
      {/* 식별코드 입력창 */}
      <ModalTwoBtn
        isOpen={codeOpen}
        handleOk={handleExternalSubmit}
        handleCancel={handleCancel}
        title={title}
        subTitle={subTitle}
      >
        <Form
          name="account"
          ref={formRef}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "식별코드를 입력해주세요. (15글자)",
                max: 15,
              },
            ]}
          >
            <Input size="large" placeholder="코드입력" />
          </Form.Item>
        </Form>
      </ModalTwoBtn>
      {/* 학부모정보 수정창 */}
      {isEditOpen && (
        <ParentEdit
          open={isEditOpen}
          handleCancel={handleCancel}
          key={editKey}
        />
      )}

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
            <Dropdown menu={{ items }}>
              <Button>
                {myData.kidNm}
                <DownOutlined />
              </Button>
            </Dropdown>
            <BtnWrap>
              <GrayBtn
                onClick={e => {
                  onCodeAddClick(e);
                }}
              >
                아이추가
              </GrayBtn>
              <GrayBtn
                onClick={() => {
                  navigate("/ind");
                }}
              >
                알림장
              </GrayBtn>
              <GreenBtn onClick={onParentEditClick}>학부모정보수정</GreenBtn>
              <PinkBtn>회원탈퇴</PinkBtn>
            </BtnWrap>
          </FlexBox>
        </TitleWrap>
        {/* 마이페이지 내용 시작 */}
        <MyContentWrap>
          {/* 프로필 */}
          <MyProfileComponent ilevel={parent} ikid={ikid} myData={myData} />
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

export default MyPage;
