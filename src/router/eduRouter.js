import { Suspense, lazy } from "react";

import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";
// 교육 영역
const Edu = lazy(() => import("../pages/education/Edu"));
const SpecialAct = lazy(() => import("../pages/education/SpecialAct"));

const eduRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={<Loading />}>
          <Edu />
        </Suspense>
      ),
    },
    {
      path: "specialact",
      element: (
        <Suspense fallback={<Loading />}>
          <SpecialAct />
        </Suspense>
      ),
    },
  ];
};
export default eduRouter;
