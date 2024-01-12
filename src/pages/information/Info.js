import React, { lazy } from "react";
import ContentLayout from "../../layouts/ContentLayout";

// 원생 소개
// const LazyInfoClass = lazy(() => import("./pages/information/InfoClass"));
// 오시는길
// const LazyLocation = lazy(() => import("./pages/information/Location"));

const Info = () => {
  return (
    <ContentLayout>
      <h1>유치원소개 페이지</h1>;
    </ContentLayout>
  );
};

export default Info;
