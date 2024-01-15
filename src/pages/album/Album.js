import React, { useState, useEffect, useRef } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import {
  AlbumTopBar,
  AlbumWrap,
  InnerAlbum,
  SearchBar,
} from "../../styles/album/album";
import { GreenBtn } from "../../styles/ui/buttons";
const Album = () => {
  // 임시 데이터 서버로부터 받아온 데이터로 대체될 예정
  const data = [
    {
      id: 1,
      title: "소풍",
      album:
        "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
    },
    {
      id: 2,
      title: "여름 바닷가",
      album:
        "https://i.namu.wiki/i/Q_Q4d5nmnOgzbX0Rg1Dor3XBhcDG-x5rj3LhTKmIbtYwPO3AEfQrg5IdXJTMc-m8hkK09ijsikOJPqJUPS7f2-vLlr2nbqOarhII3cA9a1z7V9HtQuqpDVpTwKs4HP75-vvXt2EDmLCX04QCTaoYZQ.webp",
    },
    {
      id: 3,
      title: "마피아놀이",
      album:
        "https://i.namu.wiki/i/lMKUIESCg4uT6jMDPgJ7FfBYHEi5ipf8MnOM-hl320QgnlCzS-kQbAcNEYZMT-l-7GARM8KtJ6YudF0Bu4nuhA.webp",
    },
    {
      id: 4,
      title: "교육활동",
      album:
        "https://i.namu.wiki/i/i8klRtZKqbhsM0zEvqgTFMNqt9rHhPVcsFy7ToIVDHe4P0evvkQcWMsUvUJDlPzHQqfmXZ_5XPB9_hqN5utbaP9Wl3XAebBOdujjEPjiDyTvZ-wlM-LxMzXgwx8IBNkytQDeWaTEl-V8AQnVuf3A2A.webp",
    },
    {
      id: 5,
      title: "내가 모델이라면",
      album:
        "https://i.namu.wiki/i/DyL0anOzKzEH93O5vd8GJ5DDFTNZjRECRvuohO9l2XpbHKEZlOD7Lyr9eon_-SwFPAZ5nAV4RB0xBBLaizs-6zevBfJmF9HoqPjNDGqvgdoheqyYEJzVrslMbgVVdR837nxuhCWIjLU6QTM3paXHsw.webp",
    },
    {
      id: 6,
      title: "라쿠카라차",
      album:
        "https://i.namu.wiki/i/x31ZhQR6s-fIMI8Hm_TKalJIBuffBF87-efGjYzuerdU5r0GOjorD2qQjDtfhCdqUE9iVtN5l4EsWa6PfCfO1pP40O8mlQVDC4BgeoalFUYefIiqPJgw5SsPsZA8qSXpT-u8KcRjkvndDw15stfhgg.webp",
    },
  ];

  // // 무한 스크롤을 위한 로직 예정.
  const [activities, setActivities] = useState([]); // 임시로 상태를 설정

  useEffect(() => {
    // 여기에서 서버로부터 데이터를 불러오는 로직을 추가
    // setActivities(서버로부터 받아온 데이터);
  }, []);

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
        <InnerAlbum>
          <div data={data} className="gallery">
            {data.map(item => (
              <div key={item.id} className="gallery-item">
                <img
                  width={30}
                  height={25}
                  src={`${item.album}`}
                  alt={item.title}
                />
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
