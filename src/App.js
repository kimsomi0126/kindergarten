import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import NoticeList from "./pages/notice//NoticeList";
import NoticeDetails from "./pages/notice//NoticeDetails";

// 라우터 페이지 로딩 컴포넌트
import Loading from "./components/loading/Loading";
import { Switch } from "antd";

// lazy 는 실시간으로 컴포넌트 불러들이기

//메인 페이지
const LazyMainPage = lazy(() => import("./pages/Main"));

// 로그인, 사용자 페이지
const LazyLogin = lazy(() => import("./pages/user/Login"));
const LazyIdentNum = lazy(() => import("./pages/user/IdentNum"));
const LazyGuardianSignup = lazy(() => import("./pages/user/GuardianSignup"));
const LazyMyPage = lazy(() => import("./pages/user/MyPage"));

//회원가입
const LazyCreateRole = lazy(() => import("./pages/user/CreateRole"));

// 유치원 안내 영역
const LazyInfo = lazy(() => import("./pages/information/Info"));
const LazyInfoClass = lazy(() => import("./pages/information/InfoClass"));
const LazyLocation = lazy(() => import("./pages/information/Location"));

// 교육 영역
const LazyEdu = lazy(() => import("./pages/education/Edu"));
const LazySpecialAct = lazy(() => import("./pages/education/SpecialAct"));

// 활동앨범 영역
const LazyAlbum = lazy(() => import("./pages/album/Album"));

// 유치원 소식(공지사항)영역
const LazyNoticeList = lazy(() => import("./pages/notice/NoticeList"));

//관리자 영역
const LazyGuardianList = lazy(() => import("./pages/adminPage/GuardianList"));
const LazyStudentList = lazy(() => import("./pages/adminPage/StudentList"));
const LazyStudentCreate = lazy(() => import("./pages/adminPage/StudentCreate"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainPage />
            </Suspense>
          }
        />
        {/* 회원가입 - 학부모,교사 선택 페이지 */}
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loading />}>
              <LazyCreateRole />
            </Suspense>
          }
        ></Route>
        {/* 로그인 페이지 */}
        <Route
          index
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLogin />
            </Suspense>
          }
        ></Route>
        {/* 고유번호 입력 페이지 */}
        <Route
          path="identNum"
          element={
            <Suspense fallback={<Loading />}>
              <LazyIdentNum />
            </Suspense>
          }
        />
        {/* 보호자 회원가입 페이지 */}
        <Route
          path="guardianSignup"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGuardianSignup />
            </Suspense>
          }
        />
        {/* 마이페이지 */}
        <Route
          path="myPage"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        />

        {/* 유치원 소개 페이지 */}
        <Route
          path="info/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyInfo />
            </Suspense>
          }
        />
        {/* 유치원 현황 */}
        <Route
          path="info/class"
          element={
            <Suspense fallback={<Loading />}>
              <LazyInfoClass />
            </Suspense>
          }
        />
        {/* 오시는 길 */}
        <Route
          path="info/location"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLocation />
            </Suspense>
          }
        />
        {/* 교육과정 페이지 */}
        <Route
          path="edu"
          element={
            <Suspense fallback={<Loading />}>
              <LazyEdu />
            </Suspense>
          }
        ></Route>
        {/* 방과후 활동 페이지 */}
        <Route
          path="act"
          element={
            <Suspense fallback={<Loading />}>
              <LazySpecialAct />
            </Suspense>
          }
        ></Route>
        {/* 활동앨범 페이지 */}
        <Route
          path="album"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAlbum />
            </Suspense>
          }
        ></Route>
        {/* 유치원소식 페이지 */}
        <Router>
          <Switch>
            <Route
              path="notice"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyNoticeList />
                </Suspense>
              }
            ></Route>
            <Route path="/" exact component={NoticeList} />
            <Route path="/details/:index" component={NoticeDetails} />
          </Switch>
        </Router>

        {/* 관리자 페이지 */}
        <Route
          path="admin/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGuardianList />
            </Suspense>
          }
        ></Route>
        <Route
          path="admin/student/List"
          element={
            <Suspense fallback={<Loading />}>
              <LazyStudentList />
            </Suspense>
          }
        ></Route>
        <Route
          path="admin/student/Create"
          element={
            <Suspense fallback={<Loading />}>
              <LazyStudentCreate />
            </Suspense>
          }
        ></Route>

        <Route path="*" element={<h1>페이지가 없습니다.</h1>}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
