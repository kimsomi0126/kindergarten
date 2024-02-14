import { Suspense, lazy } from "react";

import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

//알림장 영역
const IndivNotiList = lazy(() =>
  import("../pages/individualNotice/IndivNotiList"),
);
const IndivNotidetails = lazy(() =>
  import("../pages/individualNotice/IndivNotiDetails"),
);
const IndivNotiModify = lazy(() =>
  import("../pages/individualNotice/IndivNotiModify"),
);
const IndivNotiWrite = lazy(() =>
  import("../pages/individualNotice/IndivNotiWrite"),
);

const indRouter = () => {
  return [
    { path: "", element: <Navigate to="ind" /> },
    {
      path: "ind",
      element: (
        <Suspense fallback={<Loading />}>
          <IndivNotiList />
        </Suspense>
      ),
    },
    {
      path: "write",
      element: (
        <Suspense fallback={<Loading />}>
          <IndivNotiWrite />
        </Suspense>
      ),
    },
    {
      path: "details/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <IndivNotidetails />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <IndivNotiModify />
        </Suspense>
      ),
    },
  ];
};
export default indRouter;
