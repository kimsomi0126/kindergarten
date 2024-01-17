import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";

// 라우터 페이지 로딩 컴포넌트
import Loading from "./components/loading/Loading";
import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/common/ContentLayout";

// lazy 는 실시간으로 컴포넌트 불러들이기

//메인 페이지
const MainPage = lazy(() => import("./pages/Main"));

// 로그인, 사용자 페이지
const Login = lazy(() => import("./pages/user/Login"));
// 인증번호 입력
const IdentNum = lazy(() => import("./pages/user/IdentNum"));
//회원 상세가입
const SignupForm = lazy(() => import("./pages/user/SignupForm"));
const MyPage = lazy(() => import("./pages/user/MyPage"));
//회원탈퇴
const Withdraw = lazy(() => import("./pages/user/Withdraw"));

// 유치원 안내 영역
const Info = lazy(() => import("./pages/information/Info"));
const InfoClass = lazy(() => import("./pages/information/InfoClass"));
const Location = lazy(() => import("./pages/information/Location"));

// 교육 영역
const Edu = lazy(() => import("./pages/education/Edu"));
const SpecialAct = lazy(() => import("./pages/education/SpecialAct"));

// 활동앨범 영역
const Album = lazy(() => import("./pages/album/Album"));
const AlbumDetails = lazy(() => import("./pages/album/AlbumDetails"));
const AlbumModify = lazy(() => import("./pages/album/AlbumModify"));
const AlbumWrite = lazy(() => import("./pages/album/AlbumWrite"));

// 유치원 소식(공지사항)영역
const NoticeDetails = lazy(() => import("./pages/notice/NoticeDetails"));
const NoticeList = lazy(() => import("./pages/notice/NoticeList"));
const NoticeModify = lazy(() => import("./pages/notice/NoticeModify"));
const NoticeWrite = lazy(() => import("./pages/notice/NoticeWrite"));

//관리자 영역
const GuardianList = lazy(() => import("./pages/adminPage/GuardianList"));
const AdminPage = lazy(() => import("./pages/adminPage/AdminPage"));
const StudCreate = lazy(() => import("./pages/adminPage/student/StudCreate"));
const StudDetailsForm = lazy(() =>
  import("./pages/adminPage/student/StudDetailsForm"),
);
const StudDetails = lazy(() => import("./pages/adminPage/student/StudDetails"));
const StudList = lazy(() => import("./pages/adminPage/student/StudList"));

//알림장 영역
const IndivNotiModify = lazy(() =>
  import("./pages/individualNotice/IndivNotiModify"),
);

const IndivNotiHistory = lazy(() =>
  import("./pages/individualNotice/IndivNotiHistory"),
);

const IndivNotiList = lazy(() =>
  import("./pages/individualNotice/IndivNotiList"),
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <MainPage />
            </Suspense>
          }
        />
        {/* </Route> */}
        {/* user pages를 위한 라우터 설정 */}
        {/* 회원가입 */}
        <Route
          path="signup "
          element={
            <Suspense fallback={<Loading />}>
              <SignupForm />
            </Suspense>
          }
        />
        {/* 고유번호 입력 페이지 */}
        <Route
          path="identNum"
          element={
            <Suspense fallback={<Loading />}>
              <IdentNum />
            </Suspense>
          }
        />
        {/* 로그인 페이지 */}
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        {/* 보호자 회원가입 페이지 */}
        <Route
          path="signupform"
          element={
            <Suspense fallback={<Loading />}>
              <SignupForm />
            </Suspense>
          }
        />
        {/* 마이페이지 */}
        <Route
          path="myPage"
          element={
            <Suspense fallback={<Loading />}>
              <MyPage />
            </Suspense>
          }
        />
        {/* 회원탈툅 */}
        <Route
          path="withdraw"
          element={
            <Suspense fallback={<Loading />}>
              <Withdraw />
            </Suspense>
          }
        />
        {/* 마이페이지 */}
        <Route
          path="mypage"
          element={
            <Suspense fallback={<Loading />}>
              <MyPage />
            </Suspense>
          }
        />
        {/* 유치원 소개 페이지 */}
        {/* 유치원 선생님 소개페이지 */}
        <Route
          path="info/intro"
          element={
            <Suspense fallback={<Loading />}>
              <Info />
            </Suspense>
          }
        />
        {/* 유치원 원아 현황 */}
        <Route
          path="info/class"
          element={
            <Suspense fallback={<Loading />}>
              <InfoClass />
            </Suspense>
          }
        />
        {/* 오시는 길 */}
        <Route
          path="info/location"
          element={
            <Suspense fallback={<Loading />}>
              <Location />
            </Suspense>
          }
        />
        {/* 교육과정 페이지 */}
        {/* 커리큘럼 */}
        <Route
          path="edu/curriculum"
          element={
            <Suspense fallback={<Loading />}>
              <Edu />
            </Suspense>
          }
        />
        {/* 방과후 활동 페이지 */}
        <Route
          path="edu/specialact"
          element={
            <Suspense fallback={<Loading />}>
              <SpecialAct />
            </Suspense>
          }
        />
        {/* 활동앨범 페이지 */}
        {/* 활동앨범 리스트 */}
        <Route
          path="album"
          element={
            <Suspense fallback={<Loading />}>
              <Album />
            </Suspense>
          }
        />
        {/* 활동앨범 상세 */}
        <Route
          path="album/details"
          element={
            <Suspense fallback={<Loading />}>
              <AlbumDetails />
            </Suspense>
          }
        />
        {/* 활동앨범 등록 */}
        <Route
          path="album/write"
          element={
            <Suspense fallback={<Loading />}>
              <AlbumWrite />
            </Suspense>
          }
        />
        {/* 활동앨범 수정 */}
        <Route
          path="album/modify"
          element={
            <Suspense fallback={<Loading />}>
              <AlbumModify />
            </Suspense>
          }
        />
        {/* 유치원소식 페이지 */}
        <Route
          path="notice"
          element={
            <Suspense fallback={<Loading />}>
              <NoticeList />
            </Suspense>
          }
        />
        <Route
          path="notice/details/:id"
          element={
            <Suspense fallback={<Loading />}>
              <NoticeDetails />
            </Suspense>
          }
        />
        <Route
          path="notice/write"
          component={
            <Suspense fallback={<Loading />}>
              <NoticeWrite />
            </Suspense>
          }
        />
        <Route
          path="notice/modify"
          component={
            <Suspense fallback={<Loading />}>
              <NoticeModify />
            </Suspense>
          }
        />
        {/* 관리자 페이지 */}
        <Route
          path="admin/guardian/list"
          element={
            <Suspense fallback={<Loading />}>
              <GuardianList />
            </Suspense>
          }
        />
        <Route
          path="admin/student/detailsform"
          element={
            <Suspense fallback={<Loading />}>
              <StudDetailsForm />
            </Suspense>
          }
        />
        <Route
          path="admin/student/create"
          element={
            <Suspense fallback={<Loading />}>
              <StudCreate />
            </Suspense>
          }
        />
        <Route
          path="admin/student/list"
          element={
            <Suspense fallback={<Loading />}>
              <StudList />
            </Suspense>
          }
        />
        <Route
          path="admin/student/details"
          element={
            <Suspense fallback={<Loading />}>
              <StudDetails />
            </Suspense>
          }
        />
        {/* 알림장 페이지 */}
        <Route
          path="/ind"
          element={
            <Suspense fallback={<Loading />}>
              <IndivNotiList />
            </Suspense>
          }
        />
        <Route
          path="history"
          element={
            <Suspense fallback={<Loading />}>
              <IndivNotiHistory />
            </Suspense>
          }
        />
        <Route
          path="form"
          element={
            <Suspense fallback={<Loading />}>
              <IndivNotiModify />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>페이지가 없습니다.</h1>}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
