import React from "react";
import { AlbumData } from "../../components/common/TemporaryData";
import { AlbumWrap, InnerAlbum } from "../../styles/album/album";

const AlbumDetails = pno => {
  return (
    <AlbumWrap paddingTop={100}>
      {/* 메인 콘텐츠 상단 바 컴포넌트 */}
      <InnerAlbum width={47} height={39}>
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
  );
};

export default AlbumDetails;
