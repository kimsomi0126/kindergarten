import { Modal } from "antd";
import React, { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Link, useNavigate, useSearchParams } from "react-router-dom";

import {
  AlbumTitle,
  AlbumTopBar,
  AlbumWrap,
  ContentWrap,
  DetailsText,
  Footer,
  MainContent,
  TitleWrap,
  SwiperWrap,
} from "../../styles/album/album";
import Comment from "../common/Comment";
import { IMG_URL, SERVER_URL } from "../../api/config";
import { BlueBtn, GreenBtn, PinkBtn } from "../../styles/ui/buttons";
import useCustomLogin from "../../hooks/useCustomLogin";
import {
  getIndParentList,
  getIndTeacherList,
} from "../../api/individualNotice/indivNoticeApi";
const path = `${IMG_URL}/pic/notice`;

const host = `${SERVER_URL}/notice`;
// import required modules
const initAlbumCommnet = [
  {
    albumTitle: "",
    albumContents: "",
    albumPic: [],
    albumComments: [],
    createdAt: "",
  },
];

const IndivDetailsComponent = ({ pno }) => {
  // 모달창 내용
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigate, setIsNavigate] = useState();

  // 현재 출력 년도, kid 값 params에서 체크
  const [serchParams, setSearchParams] = useSearchParams();
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  const page = serchParams.get("page");
  const iclass = serchParams.get("iclass");

  // 로그인 체크
  const { isLogin, isParentLogin } = useCustomLogin();
  const [parentList, setParentList] = useState(null);
  const [albumData, setAlbumData] = useState(initAlbumCommnet); // 앨범 데이터 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false);
  const navigate = useNavigate();

  const [myData, setMyData] = useState(null);

  // 컴포넌트 마운트 시 데이터 불러오기
  console.log("pno", pno);
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
      setIsNavigate(-1);
    }
  }, [year, ikid, iclass, page]);

  // 데이터연동 성공
  const successFn = result => {
    setMyData(result);
  };
  // 데이터연동 실패
  const failFn = result => {
    console.log(result);
  };
  // 데이터연동 실패
  const errorFn = result => {
    setIsOpen(true);
    setTitle("조회 실패");
    setSubTitle(result);
  };

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteOk = () => {
    console.log("delete");
    //   setIsDeleteModalOpen(false); // 삭제 확인 모달 닫기

    //   deleteAlbum({
    //     ialbum: pno,
    //     successFn: res => {
    //       // 삭제 성공 시 처리
    //       console.log("Album deleted:", res);
    //       setIsDeleteSuccessModalOpen(true); // 삭제 성공 모달 열기

    //       // 2초 후에 성공 모달을 닫고 앨범 목록 페이지로 이동
    //       setTimeout(() => {
    //         setIsDeleteSuccessModalOpen(false);
    //         navigate("/album");
    //       }, 2000);
    //     },
    //     failFn: error => {
    //       // 삭제 실패 시 처리
    //       Modal.error({
    //         title: "앨범 삭제 실패",
    //         content: "앨범 삭제에 실패했습니다. 다시 시도해 주세요.",
    //       });
    //     },
    //     errorFn: error => {
    //       console.error("Error deleting album:", error);
    //       Modal.error({
    //         title: "오류 발생",
    //         content:
    //           "서버 오류로 인해 삭제에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    //       });
    //     },
    //   });
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteSuccessOk = () => {
    setIsDeleteSuccessModalOpen(false);
  };

  console.log("albumData", albumData);
  return (
    <AlbumWrap paddingTop={40}>
      <AlbumTopBar padding={1}>
        <AlbumTitle>알림장 - 상세</AlbumTitle>
      </AlbumTopBar>
      <ContentWrap>
        <TitleWrap>
          <h3>{albumData.albumTitle}</h3>
          <p>{albumData.createdAt}</p>
        </TitleWrap>
        <MainContent>
          <DetailsText>
            <p>{albumData.albumContents}</p>
          </DetailsText>
          <Comment />
        </MainContent>
        {/* 삭제 모달 */}
        <Modal
          title="정말 삭제할까요?"
          open={isDeleteModalOpen}
          onOk={handleDeleteOk}
          onCancel={handleDeleteCancel}
          okText="확인"
          cancelText="취소"
        >
          <p>삭제된 내용은 복구할 수 없습니다.</p>
        </Modal>

        {/* 삭제 성공 모달 */}
        <Modal
          title="삭제 완료"
          open={isDeleteSuccessModalOpen}
          onOk={handleDeleteSuccessOk}
          cancelButtonProps={{ style: { display: "none" } }}
          okText="확인"
        >
          <p>삭제가 완료되었습니다.</p>
        </Modal>
        <Footer>
          <Link to="/ind?year=2024&page=1&iclass=0">
            <GreenBtn>목록보기</GreenBtn>
          </Link>
          {isLogin ? (
            <>
              {/* <Link to={`${host}/modify/${pno}`}>
                <BlueBtn>수정</BlueBtn>
              </Link> */}
              <PinkBtn onClick={showDeleteModal}>삭제</PinkBtn>
            </>
          ) : null}
        </Footer>
      </ContentWrap>
    </AlbumWrap>
  );
};

export default IndivDetailsComponent;
