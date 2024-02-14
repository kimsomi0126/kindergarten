import { Suspense, lazy } from "react";

import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

//메인 페이지
const MainPage = lazy(() => import("../pages/Main"));

const mainRouter = () => {
  return [
    { path: "", element: <Navigate to="/" /> },
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <MainPage />
        </Suspense>
      ),
    },
  ];
};
export default mainRouter;
