import React, { useEffect, useState } from "react";
import ReadAllAlbum from "../../components/album/ReadAllAlbum";
import {
  getIndParentList,
  getIndTeacherList,
} from "../../api/individualNotice/indivNoticeApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useNavigate, useSearchParams } from "react-router-dom";
export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/album/listall`;
import ModalOneBtn from "../../components/ui/ModalOneBtn";

const Album = () => {
  const navigate = useNavigate();
  const { isLogin, isParentLogin } = useCustomLogin();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    if (!isLogin && !isParentLogin) {
      // 로그인하지 않았을 경우
      setIsOpen(true);
      setTitle("회원 전용 페이지");
      setSubTitle("로그인 회원만 접근 가능합니다.");
    }
  }, [isLogin, isParentLogin]);

  const handleOk = () => {
    setIsOpen(false);
    if (!isLogin && !isParentLogin) {
      navigate("/login"); // 로그인 페이지로 이동
    }
  };

  return (
    <>
      <ModalOneBtn
        isOpen={isOpen}
        handleOk={handleOk}
        title={title}
        subTitle={subTitle}
      />
      <ReadAllAlbum />;
    </>
  );
};

export default Album;

// const initData = [
//   {
//     inotice: 0,
//     noticeTitle: "",
//     noticeContents: "",
//     kidNm: "",
//     iclass: 0,
//     picCheck: 0,
//     createdAt: "",
//   },
// ];

// const [serchParams, setSearchParams] = useSearchParams();
// // 현재 출력 년도, kid 값 params에서 체크
// const year = serchParams.get("year");
// const ikid = serchParams.get("ikid");
// const page = serchParams.get("page");
// const iclass = serchParams.get("iclass");
// const [indList, setIndList] = useState(initData);
// const [count, setCount] = useState(0);

// // 로그인 회원 정보에서 아이 리스트 추출
// const { loginState, isLogin, isParentLogin } = useCustomLogin();
// const ikidList = loginState.kidList;

// // ikid 값만 추출하여 파라미터값과 비교
// const kidCheck = Array.isArray(ikidList) && ikidList.map(item => item.ikid);

// // 모달창 내용
// const [title, setTitle] = useState("");
// const [subTitle, setSubTitle] = useState("");
// const [isOpen, setIsOpen] = useState(false);
// const [isNavigate, setIsNavigate] = useState();

// // 데이터 화면출력, 로그인체크
// useEffect(() => {
//   if (!isParentLogin) {
//     setTitle("연결 오류");
//     setSubTitle("연결된 원생 정보가 없습니다.");
//     setIsNavigate(-1);
//     setIsOpen(true);
//     return;
//   } else if (isParentLogin) {
//     getIndParentList({ page, year, ikid, errorFn, successFn });
//   } else if (isLogin) {
//     // 선생님 로그인
//     getIndTeacherList({ page, year, iclass, errorFn, successFn });
//   } else {
//     // 로그인 안했을때
//     setIsOpen(true);
//     setTitle("회원 전용 페이지");
//     setSubTitle("로그인 회원만 접근 가능합니다.");
//     setIsNavigate(-1);
//   }
// }, [year, ikid, iclass, page]);
// // 데이터연동 결과
// const successFn = res => {
//   setIndList(res.list);
//   setCount(res.noticeCnt);
// };
// const errorFn = res => {
//   console.log(res);

//   setIsOpen(true);
//   setTitle("데이터 없음");
//   setSubTitle(res);
//   setIsNavigate(-1);
// };
