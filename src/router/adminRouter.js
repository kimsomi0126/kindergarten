import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

//관리자 영역
const GuardianList = lazy(() => import("../pages/adminPage/GuardianList"));
const StudCreate = lazy(() => import("../pages/adminPage/student/StudCreate"));
const StudModify = lazy(() => import("../pages/adminPage/student/StudModify"));
const StudDetailsForm = lazy(() =>
  import("../pages/adminPage/student/StudDetailsForm"),
);
const StudDetails = lazy(() =>
  import("../pages/adminPage/student/StudDetails"),
);
const StudList = lazy(() => import("../pages/adminPage/student/StudList"));

const adminRouter = () => {
  return [
    { path: "", element: <Navigate to="admin" /> },
    {
      path: "admin",
      element: (
        <Suspense fallback={<Loading />}>
          <GuardianList />
        </Suspense>
      ),
    },
    {
      path: "student",
      element: (
        <Suspense fallback={<Loading />}>
          <StudList />
        </Suspense>
      ),
    },
    {
      path: "student/detailsform",
      element: (
        <Suspense fallback={<Loading />}>
          <StudDetailsForm />
        </Suspense>
      ),
    },
    {
      path: "student/details",
      element: (
        <Suspense fallback={<Loading />}>
          <StudDetails />
        </Suspense>
      ),
    },
    {
      path: "student/create",
      element: (
        <Suspense fallback={<Loading />}>
          <StudCreate />
        </Suspense>
      ),
    },
    {
      path: "student/modify",
      element: (
        <Suspense fallback={<Loading />}>
          <StudModify />
        </Suspense>
      ),
    },
  ];
};
export default adminRouter;
