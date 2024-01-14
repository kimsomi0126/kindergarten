import React, { lazy } from "react";
import ContentLayout from "../../layouts/ContentLayout";

// 앨범 상세내용 보기
// const LazyAlbumDetail = lazy(() => import("./pages/album/AlbumDetail"));

// 수정
// const LazyAlbumModify = lazy(() => import("./pages/album/AlbumModify"));

// 글쓰기 페이지
// const LazyAlbumWrite = lazy(() => import("./pages/album/AlbumWrite"));

const Album = () => {
  return (
    <ContentLayout>
      <h1>활동 사진 페이지</h1>
    </ContentLayout>
  );
};

export default Album;
