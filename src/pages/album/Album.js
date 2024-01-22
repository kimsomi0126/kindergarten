import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlbumData } from "../../components/common/TemporaryData";
import Search from "antd/es/input/Search";

import {
  AlbumTopBar,
  AlbumWrap,
  InnerAlbum,
  SearchBar,
} from "../../styles/album/album";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";
import { UserTopRight } from "../../styles/adminstyle/guardianlist";
import Comment from "../../components/common/Comment";
import { DeleteModal } from "../../components/common/ResultModal";
// 임시 데이터 서버로부터 받아온 데이터로 대체될 예정

const initState = {
  pno: 0,
};
const Album = ({ pno }) => {
  const navigate = useNavigate();
  return (
    //   <Link to={`/album/write/${pno}`} key={pno}>
    //   글쓰기
    // </Link>
    <AlbumWrap paddingTop={100}>
      {/* 메인 콘텐츠 상단 바 컴포넌트 */}
      <AlbumTopBar>
        <div className="album-title">
          <PageTitle>활동앨범</PageTitle>
        </div>
        <SearchBar>
          <UserTopRight>
            <Search
              placeholder="제목을 입력하세요."
              style={{
                width: 300,
              }}
              size={"large"}
              allowClear
              onSearch={value => console.log(value)}
            />
            <GreenBtn onClick={e => navigate("write")}>글쓰기</GreenBtn>
          </UserTopRight>
        </SearchBar>
      </AlbumTopBar>
      <Comment />
      <DeleteModal />
      <InnerAlbum width={54} height={62}>
        <div data={AlbumData} className="gallery">
          {AlbumData.map(item => (
            <Link to="/details:pno" key={item.id} className="gallery-item">
              <img src={`${item.album}`} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </InnerAlbum>

      {/* 갤러리 아이템 컴포넌트 */}
      {/* <MainGallery activities={activities} /> */}
    </AlbumWrap>
  );
};
export default Album;
