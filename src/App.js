import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import "./styles/normalize.css";

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

//관리자 영역
const GuardianList = lazy(() => import("./pages/adminPage/GuardianList"));
const StudentCreate = lazy(() =>
  import("./pages/adminPage/student/StudCreate"),
);
const StudentDetailsForm = lazy(() =>
  import("./pages/adminPage/student/StudDetailsForm"),
);
const StudentDetails = lazy(() =>
  import("./pages/adminPage/student/StudDetails"),
);
const StudentList = lazy(() => import("./pages/adminPage/student/StudList"));

//알림장 영역
const IndivNotiForm = lazy(() =>
  import("./pages/individualNotice/IndivNotiForm"),
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
        {/* 메인 페이지를 위한 라우터 설정 */}
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <MainLayout />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <MainPage />
              </Suspense>
            }
          />
        </Route>

        {/* user pages를 위한 라우터 설정 */}
        {/* 회원가입 - 학부모,교사 선택 페이지 */}
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <ContentLayout />
            </Suspense>
          }
        >
          {/* 로그인 페이지 */}
          <Route
            path="login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          {/* 고유번호 입력 페이지 */}
          <Route
            path="/identNum"
            element={
              <Suspense fallback={<Loading />}>
                <IdentNum />
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
        </Route>

        {/* 회원탈툅 */}
        <Route
          path="withdraw"
          element={
            <Suspense fallback={<Loading />}>
              <Withdraw />
            </Suspense>
          }
        />

        {/* 유치원 소개 페이지 */}
        <Route
          path="info/"
          element={
            <Suspense fallback={<Loading />}>
              <Info />
            </Suspense>
          }
        >
          {/* 유치원 현황 */}
          <Route
            path="class"
            element={
              <Suspense fallback={<Loading />}>
                <InfoClass />
              </Suspense>
            }
          />
          {/* 오시는 길 */}
          <Route
            path="location"
            element={
              <Suspense fallback={<Loading />}>
                <Location />
              </Suspense>
            }
          />
        </Route>
        {/* 교육과정 페이지 */}
        <Route
          path="edu"
          element={
            <Suspense fallback={<Loading />}>
              <Edu />
            </Suspense>
          }
        >
          {/* 방과후 활동 페이지 */}
          <Route
            path="specialact"
            element={
              <Suspense fallback={<Loading />}>
                <SpecialAct />
              </Suspense>
            }
          />
        </Route>
        {/* 활동앨범 페이지 */}
        <Route
          path="album"
          element={
            <Suspense fallback={<Loading />}>
              <Album />
            </Suspense>
          }
        >
          <Route
            path="details"
            element={
              <Suspense fallback={<Loading />}>
                <AlbumDetails />
              </Suspense>
            }
          />
          <Route
            path="modify"
            element={
              <Suspense fallback={<Loading />}>
                <AlbumModify />
              </Suspense>
            }
          />
          <Route
            path="write"
            element={
              <Suspense fallback={<Loading />}>
                <AlbumWrite />
              </Suspense>
            }
          />
        </Route>
        {/* 유치원소식 페이지 */}

          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <LazyNoticeList />
              </Suspense>
            }
          />
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <NoticeList />
              </Suspense>
            }
          />
          <Route
            path="details/:id"
            element={
              <Suspense fallback={<Loading />}>
                <NoticeDetails />
              </Suspense>
            }
          />
          <Route
            path="write"
            component={
              <Suspense fallback={<Loading />}>
                <NoticeWrite />
              </Suspense>
            }
          />
          <Route
            path="modify"
            component={
              <Suspense fallback={<Loading />}>
                <NoticeModify />
              </Suspense>
            }
          />
        </Route>

        {/* 관리자 페이지 */}
        <Route
          path="admin"
          element={
            <Suspense fallback={<Loading />}>
              <GuardianList />
            </Suspense>
          }
        >
          <Route
            path="student/detailsform"
            element={
              <Suspense fallback={<Loading />}>
                <StudentDetailsForm />
              </Suspense>
            }
          />
          <Route
            path="student/create"
            element={
              <Suspense fallback={<Loading />}>
                <StudentCreate />
              </Suspense>
            }
          />
          <Route
            path="student/list"
            element={
              <Suspense fallback={<Loading />}>
                <StudentList />
              </Suspense>
            }
          />
          <Route
            path="student/details"
            element={
              <Suspense fallback={<Loading />}>
                <StudentDetails />
              </Suspense>
            }
          />
        </Route>

        {/* 알림장 페이지 */}
        <Route
          path="ind"
          element={
            <Suspense fallback={<Loading />}>
              <IndivNotiList />
            </Suspense>
          }
        >
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
                <IndivNotiForm />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<h1>페이지가 없습니다.</h1>}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
