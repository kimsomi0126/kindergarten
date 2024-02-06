import { Pagination, Select } from "antd";
import React, { useEffect, useState } from "react";
import { PageNum } from "../../styles/adminstyle/guardianlist";
import { PageTitle } from "../../styles/basic";
import { IndWrap } from "../../styles/individualNotice/ind";
import { FlexBox, TitleWrap } from "../../styles/user/mypage";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import IndListComponent from "../../components/individualNotice/IndListComponent";
import {
  getIndParentList,
  getIndTeacherList,
} from "../../api/individualNotice/indivNoticeApi";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import IndParentBtnComponent from "../../components/individualNotice/IndParentBtnComponent";
import IndTeacherBtnComponent from "../../components/individualNotice/IndTeacherBtnComponent";

const initData = [
  {
    inotice: 0,
    noticeTitle: "",
    noticeContents: "",
    kidNm: "",
    iclass: 0,
    picCheck: 0,
    createdAt: "",
  },
];

const IndivNotiList = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();
  const [indList, setIndList] = useState(initData);
  const [count, setCount] = useState(0);

  // 현재 출력 년도, kid 값 params에서 체크
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  const page = serchParams.get("page");
  const iclass = serchParams.get("iclass");

  // 로그인 회원 정보에서 아이 리스트 추출
  const { loginState, isLogin, isParentLogin } = useCustomLogin();
  const ikidList = loginState.kidList;

  // ikid 값만 추출하여 파라미터값과 비교
  const kidCheck = Array.isArray(ikidList) && ikidList.map(item => item.ikid);

  // 페이지네이션
  const handleChange = value => {
    // console.log(value);
  };
  const handlePageChange = (page, pageSize) => {
    if (isLogin) {
      navigate(`/ind?year=${year}&page=${page}&iclass=${iclass}`);
    } else {
      navigate(`/ind?year=${year}&page=${page}&ikid=${ikid}`);
    }
  };

  // 모달창 내용
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigate, setIsNavigate] = useState();

  // 모달창 확인버튼
  const handleOk = () => {
    setIsOpen(false);
    // 링크이동
    if (isNavigate) {
      navigate(isNavigate);
    }
  };

  // 데이터 화면출력, 로그인체크
  useEffect(() => {
    if (isParentLogin) {
      // 학부모 로그인
      if (ikid === "0") {
        // 연결된 아이가 없을경우
        setTitle("연결 오류");
        setSubTitle("연결된 원생 정보가 없습니다.");
        setIsNavigate(-1);
        setIsOpen(true);
        return;
      }
      getIndParentList({ page, year, ikid, errorFn, successFn });
    } else if (isLogin) {
      // 선생님 로그인
      getIndTeacherList({ page, year, iclass, errorFn, successFn });
    } else {
      // 로그인 안했을때
      setIsOpen(true);
      setTitle("회원 전용 페이지");
      setSubTitle("로그인 회원만 접근 가능합니다.");
      setIsNavigate("/login");
    }
  }, [year, ikid, iclass, page]);

  // 데이터연동 결과
  const successFn = res => {
    setIndList(res.list);
    setCount(res.noticeCnt);
  };
  const errorFn = res => {
    // console.log(res);

    setIsOpen(true);
    setTitle("데이터 없음");
    setSubTitle(res);
    setIsNavigate(-1);
  };

  return (
    <IndWrap>
      {/* 안내창 */}
      <ModalOneBtn
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      />
      <TitleWrap>
        <PageTitle>알림장</PageTitle>
        <FlexBox>
          {/* 권한별 서치버튼 */}
          {isLogin ? (
            <IndTeacherBtnComponent
              iclass={iclass}
              indList={indList}
              year={year}
              page={page}
            />
          ) : (
            <IndParentBtnComponent
              ikidList={ikidList}
              indList={indList}
              ikid={ikid}
              year={year}
              page={page}
            />
          )}
        </FlexBox>
      </TitleWrap>
      <IndListComponent
        listData={indList}
        year={year}
        ikid={ikid}
        iclass={iclass}
        page={page}
      />
      <PageNum>
        <Pagination
          defaultCurrent={1}
          total={count}
          pageSize={12}
          onChange={handlePageChange}
        />
      </PageNum>
    </IndWrap>
  );
};

export default IndivNotiList;
