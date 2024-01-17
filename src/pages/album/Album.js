import React, { useEffect, useRef, useState } from "react";
import { AlbumData } from "../../components/common/TemporaryData";
import ContentLayout from "../../layouts/common/ContentLayout";
import {
  AlbumTopBar,
  AlbumWrap,
  InnerAlbum,
  SearchBar,
} from "../../styles/album/album";
import { GreenBtn } from "../../styles/ui/buttons";
// 임시 데이터 서버로부터 받아온 데이터로 대체될 예정

const Album = () => {
  return (
    <ContentLayout>
      <AlbumWrap paddingTop={100}>
        {/* 메인 콘텐츠 상단 바 컴포넌트 */}
        <AlbumTopBar>
          <div className="album-title">
            <img
              src={process.env.PUBLIC_URL + "/images/common/titleIcon.svg"}
            ></img>
            <h3>활동앨범</h3>
          </div>
          <SearchBar>
            <input type="text" placeholder="제목을 입력하세요." />
            <img
              src={process.env.PUBLIC_URL + "/images/common/readingGlasses.svg"}
            ></img>
            <GreenBtn>글쓰기</GreenBtn>
          </SearchBar>
        </AlbumTopBar>
        <InnerAlbum width={54} height={40}>
          <div data={AlbumData} className="gallery">
            {AlbumData.map(item => (
              <div key={item.id} className="gallery-item">
                <img src={`${item.album}`} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </InnerAlbum>

        {/* 갤러리 아이템 컴포넌트 */}
        {/* <MainGallery activities={activities} /> */}
      </AlbumWrap>
    </ContentLayout>
  );
};
export default Album;
