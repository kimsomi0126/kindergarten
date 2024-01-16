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
import { Switch } from "antd";

// lazy 는 실시간으로 컴포넌트 불러들이기

//메인 페이지
const LazyMainPage = lazy(() => import("./pages/Main"));

// 로그인, 회원가입, 사용자 페이지
const LazyUserPage = lazy(() => import("./pages/user/UserPage"));
const LazyLogin = lazy(() => import("./pages/user/Login"));
const LazyIdentNum = lazy(() => import("./pages/user/IdentNum"));
const LazyGuardianSignup = lazy(() => import("./pages/user/GuardianSignup"));
const LazyMyPage = lazy(() => import("./pages/user/MyPage"));

//회원가입
//const LazyCreateRole = lazy(() => import("./pages/user/CreateRole"));

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
const LazyNoticeDetails = lazy(() => import("./pages/notice/NoticeDetails"));
const LazyNoticeModify = lazy(() => import("./pages/notice/NoticeModify"));
const LazyNoticeWrite = lazy(() => import("./pages/notice/NoticeWrite"));

//관리자 영역
const LazyAdmin = lazy(() => import("./pages/adminPage/AdminPage"));
const LazyGuardianList = lazy(() => import("./pages/adminPage/GuardianList"));
const LazyStudentList = lazy(() => import("./pages/adminPage/StudentList"));
const LazyStudentCreate = lazy(() => import("./pages/adminPage/StudentCreate"));

//알림장 영역
const LazyIndividualNoticeForm = lazy(() =>
  import("./pages/individualNotice/IndividualNoticeForm"),
);

const LazyIndividualNoticeHistory = lazy(() =>
  import("./pages/individualNotice/IndividualNoticeHistory"),
);

const LazyIndividualNoticeList = lazy(() =>
  import("./pages/individualNotice/IndividualNoticeList"),
);

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
        {/* 회원가입 */}
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loading />}>
              <LazyUserPage />
            </Suspense>
          }
        >
          {/* 리다이렉트 */}
          <Route index element={<Navigate to="identNum" />}></Route>

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
        </Route>
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

        {/* 마이페이지 */}
        <Route
          path="mypage"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        />
        {/* 유치원 소개 페이지 */}
        <Route
          path="info"
          element={
            <Suspense fallback={<Loading />}>
              <LazyInfo />
            </Suspense>
          }
        >
          {/* 유치원 현황 */}
          <Route
            path="class"
            element={
              <Suspense fallback={<Loading />}>
                <LazyInfoClass />
              </Suspense>
            }
          />
          {/* 오시는 길 */}
          <Route
            path="location"
            element={
              <Suspense fallback={<Loading />}>
                <LazyLocation />
              </Suspense>
            }
          />
        </Route>
        {/* 교육과정 페이지 */}
        <Route
          path="edu"
          element={
            <Suspense fallback={<Loading />}>
              <LazyEdu />
            </Suspense>
          }
        >
          {/* 방과후 활동 페이지 */}
          <Route
            path="specialact"
            element={
              <Suspense fallback={<Loading />}>
                <LazySpecialAct />
              </Suspense>
            }
          />
        </Route>
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
        <Route
          path="notice"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <LazyNoticeList />
            </Suspense>
          }
        >
          <Route
            path="list"
            component={
              <Suspense fallback={<Loading />}>
                <LazyNoticeList />
              </Suspense>
            }
          />
          <Route
            path="details"
            component={
              <Suspense fallback={<Loading />}>
                <LazyNoticeDetails />
              </Suspense>
            }
          />
          <Route
            path="write"
            component={
              <Suspense fallback={<Loading />}>
                <LazyNoticeWrite />
              </Suspense>
            }
          />
          <Route
            path="modify"
            component={
              <Suspense fallback={<Loading />}>
                <LazyNoticeModify />
              </Suspense>
            }
          />
        </Route>

        {/* 관리자 페이지 */}
        <Route
          path="admin"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAdmin />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <LazyGuardianList />
              </Suspense>
            }
          />
          <Route
            path="student/list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyStudentList />
              </Suspense>
            }
          />
          <Route
            path="student/create"
            element={
              <Suspense fallback={<Loading />}>
                <LazyStudentCreate />
              </Suspense>
            }
          />
        </Route>
        {/* 알림장 페이지 */}
        <Route
          path="ind"
          element={
            <Suspense fallback={<Loading />}>
              <LazyIndividualNoticeList />
            </Suspense>
          }
        >
          <Route
            path="history"
            element={
              <Suspense fallback={<Loading />}>
                <LazyIndividualNoticeHistory />
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense fallback={<Loading />}>
                <LazyIndividualNoticeForm />
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
