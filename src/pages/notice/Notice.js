import React, { lazy } from "react";
import ContentLayout from "../../layouts/ContentLayout";

// 공지 수정
// const LazyNoticeModify = lazy(() => import("./pages/notice/NoticeModify"));

// 공지 글쓰기
// const LazyNoticeWrite = lazy(() => import("./pages/notice/NoticeWrite"));

const Notice = () => {
  return (
    <ContentLayout>
      <h1>유치원 공지 페이지</h1>;
    </ContentLayout>
  );
};

export default Notice;
