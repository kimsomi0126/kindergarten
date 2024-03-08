import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate, useParams } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { IMG_URL, SERVER_URL } from "../../api/config";
import {
  deleteIndAlbum,
  deleteIndAlbumComment,
  getIndAlbumDetail,
  putIndAlbumComment,
} from "../../api/indivAlbum/indivalbum_api";
import MyTag from "../../components/indivAlbum/MyTag";
import Loading from "../../components/loading/Loading";
import ModalOneBtn from "../../components/ui/ModalOneBtn";
import ModalTwoBtn from "../../components/ui/ModalTwoBtn";
import useCustomLogin from "../../hooks/useCustomLogin";
import { CommentWrap } from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { IndBot, IndWrap } from "../../styles/individualNotice/ind";
import {
  IndAlbumDetailContent,
  IndBtnWrap,
  IndClass,
  IndDetailTop,
  IndDetailWrap,
} from "../../styles/individualNotice/inddetail";
import { BlueBtn, GreenBtn, OrangeBtn, PinkBtn } from "../../styles/ui/buttons";
import { CommentBox, CommentView, CommentWrite } from "../../styles/ui/comment";
const host = `${SERVER_URL}/ind/album`;

const initData = {
  inotice: 0,
  noticeTitle: "",
  noticeContents: "",
  pics: [],
  comments: [],
  createdAt: "",
  kidNm: "",
  iclass: 0,
};
const ImageComponent = lazy(() =>
  import("../../components/indivAlbum/ImageComponent"),
);

const IndivAlbumDetails = () => {
  const navigate = useNavigate();
  // tno 체크
  const { tno } = useParams();
  // 현재 출력 년도, kid 값 params에서 체크
  const [serchParams, setSearchParams] = useSearchParams();
  const year = serchParams.get("year");
  const ikid = serchParams.get("ikid");
  const page = serchParams.get("page");
  const iclass = serchParams.get("iclass");
  // 로그인 정보
  const { isLogin, isParentLogin, isAdminLogin, loginState, isName } =
    useCustomLogin();
  // console.log("loginState", loginState);
  // 연동데이터
  const [data, setData] = useState(initData);
  // 댓글관련 state
  const [commentState, setCommentState] = useState(false);
  const [commentNum, setCommentNum] = useState(null);
  const iwriter = loginState.iteacher || loginState.iparent;
  const ilevel = loginState.role === "PARENT" ? 1 : loginState.ilevel;
  const [isDelComment, setIsDelComment] = useState(false); // 댓글삭제 모달

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
  // 모달창 취소
  const handleCancel = () => {
    setDelOpen(false);
  };

  useEffect(() => {
    if (!isParentLogin && !isLogin && !isAdminLogin) {
      // 로그인 안했을때
      setIsOpen(true);
      setTitle("회원 전용 페이지");
      setSubTitle("로그인 회원만 접근 가능합니다.");
      setIsNavigate("/login");
    } else {
      getIndAlbumDetail({ tno, successFn, errorFn });
    }
  }, [tno, isParentLogin, isLogin, isAdminLogin, commentState]);

  // useEffect(() => {
  //   getIndAlbumDetail({ tno, successFn, errorFn });
  // }, [commentState]);

  // Get 연동 결과
  const successFn = res => {
    setData({ ...res });
    setCommentState(!commentState);
    setCommentNum(null);
    // console.log("성공 데이타", res);
  };
  const errorFn = res => {
    setIsOpen(true);
    setTitle("데이터 오류");
    setSubTitle(res);
  };
  // 회원별 목록보기
  const handleClickList = () => {
    if (isLogin) {
      navigate(`/ind/album?year=${year}&page=${page}&iclass=${iclass}`);
    } else {
      navigate(`/ind/album?year=${year}&page=${page}&ikid=${ikid}`);
    }
  };

  // 글 삭제
  const [delOpen, setDelOpen] = useState(false);
  const handleClickDelete = () => {
    setDelOpen(true);
    setTitle("정말 삭제할까요?");
    setSubTitle(
      "삭제된 추억앨범은 복구할 수 없습니다. \n 정말 삭제하시겠습니까?",
    );
  };
  const handleDelOk = () => {
    deleteIndAlbum({ tno, successDelFn, errorDelFn });
  };
  const successDelFn = res => {
    setDelOpen(false);
    setIsOpen(true);
    setTitle("삭제 완료");
    setSubTitle("삭제 완료되었습니다.");
    isLogin
      ? setIsNavigate(`/ind/album?year=${year}&page=${page}&iclass=${iclass}`)
      : setIsNavigate(`/ind/album?year=${year}&page=${page}&ikid=${ikid}`);
  };
  const errorDelFn = error => {
    // 삭제 실패 처리
    setDelOpen(false); // 삭제 확인 모달을 닫습니다.
    setIsOpen(true); // 에러 알림 모달을 엽니다.
    setTitle("삭제 실패"); // 에러 모달의 제목을 설정합니다.
    setSubTitle("삭제에 실패했습니다. \n 잠시 후 다시 시도해 주세요."); // 에러 모달의 부제목을 설정합니다.
  };

  // 댓글등록
  const [form] = Form.useForm();
  const handleWriteComment = value => {
    let obj = {
      imemory: tno,
      memoryComment: value.albumComment,
    };
    if (isParentLogin) {
      obj = {
        inotice: tno,
        memoryComment: value.albumComment,
      };
    }

    // console.log(obj, "댓글등록");
    putIndAlbumComment({
      obj,
      successFn,
      errorFn,
    });
    form.resetFields();
  };

  // 댓글삭제
  const handleDeleteComment = () => {
    if (isLogin) {
      deleteIndAlbumComment({
        imemoryComment: commentNum,
        iteacher: loginState.iteacher,
        successFn,
        errorFn,
      });
    } else {
      deleteIndAlbumComment({
        imemoryComment: commentNum,
        iparent: loginState.iparent,
        successFn,
        errorFn,
      });
    }
    setIsDelComment(false);
  };

  const successCommentFn = res => {
    setCommentState(!commentState);
    setCommentNum(null);
    // console.log(res);
  };

  const errorCommentFn = res => {
    // console.log(res);
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

      {/* 글삭제 */}
      <ModalTwoBtn
        isOpen={delOpen}
        handleOk={handleDelOk}
        handleCancel={handleCancel}
        title={title}
        subTitle={subTitle}
      />
      <PageTitle>추억앨범</PageTitle>
      <IndDetailWrap>
        <IndDetailTop>
          <IndClass>
            {data.kids && data.kids.length > 0 && <MyTag state={data.kids} />}
          </IndClass>
          <h3>{data.memoryTitle}</h3>
          <IndBot>
            <div className="ind-date">
              {data.createdAt
                ? data.createdAt.split(" ")[0].split("T").join(" ")
                : ""}
            </div>
          </IndBot>
        </IndDetailTop>
        <IndAlbumDetailContent>
          <pre>{data.memoryContents}</pre>
        </IndAlbumDetailContent>

        {/* <IndDetailFile> */}
        <ResponsiveMasonry
          style={{ padding: "3rem" }}
          columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="10px">
            {Array.isArray(data.memoryPic) &&
              data.memoryPic.map((item, index) => (
                <Suspense fallback={<Loading />} key={index}>
                  <Link
                    to={`${IMG_URL}/pic/memory/${data.imemory}/${item}`}
                    key={index}
                    target="_blank"
                    className="item"
                  >
                    <ImageComponent
                      key={index}
                      style={{ width: "100%", display: "block" }}
                      src={`${IMG_URL}/pic/memory/${data.imemory}/${item}`}
                    />
                  </Link>
                </Suspense>
              ))}
          </Masonry>
        </ResponsiveMasonry>
        <CommentWrap>
          <CommentView>
            {Array.isArray(data.memoryComments) &&
              data.memoryComments.map((item, index) => (
                <CommentBox
                  key={item.imemoryComment}
                  className={data.memoryComments[0] ? "right" : null}
                >
                  <pre className="text">{item.memoryComment}</pre>
                  <ul>
                    <li className="name">
                      {item.teacherNm ? item.teacherNm : item.parentNm}
                    </li>
                    <li className="date">{item.createdAt}</li>
                  </ul>
                  {ilevel === loginState.ilevel &&
                  item.writerIuser == iwriter ? (
                    <span
                      className="delete"
                      onClick={() => {
                        setCommentNum(item.imemoryComment);
                        setIsDelComment(true);
                      }}
                    >
                      댓글삭제
                    </span>
                  ) : null}
                </CommentBox>
              ))}
          </CommentView>
          <CommentWrite>
            <Form form={form} onFinish={handleWriteComment}>
              <Form.Item name="albumComment">
                <TextArea required placeholder="댓글내용을 입력해주세요." />
              </Form.Item>
              <OrangeBtn>등록</OrangeBtn>
            </Form>
          </CommentWrite>
        </CommentWrap>
      </IndDetailWrap>

      <IndBtnWrap>
        {/* 댓글삭제 */}
        <ModalTwoBtn
          isOpen={isDelComment}
          handleOk={() => handleDeleteComment()}
          handleCancel={() => setIsDelComment(false)}
          title={"댓글 삭제"}
          subTitle={
            "삭제된 댓글은 복구할 수 없습니다. \n정말 삭제하시겠습니까?"
          }
        />
        <GreenBtn onClick={handleClickList}>목록보기</GreenBtn>
        {isLogin || isAdminLogin ? (
          <>
            <BlueBtn
              onClick={() => {
                navigate(
                  `${host}/modify/${tno}?year=${year}&page=${page}&iclass=${iclass}`,
                );
              }}
            >
              수정
            </BlueBtn>
            <PinkBtn onClick={handleClickDelete}>삭제</PinkBtn>
          </>
        ) : null}
      </IndBtnWrap>
    </IndWrap>
  );
};

export default IndivAlbumDetails;
