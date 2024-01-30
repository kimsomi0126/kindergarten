import React, { useEffect } from "react";
import {
  MainAlbum,
  MainAlbumImage,
  MainAlbumList,
  MainAlbumText,
} from "../../styles/main";
import { PageTitle } from "../../styles/basic";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../api/config";
import useCustomLogin from "../../hooks/useCustomLogin";

const MainAlbumComponent = ({ albumDate }) => {
  // 로그인 체크
  const { isLogin, isParentLogin } = useCustomLogin();
  useEffect(() => {
    // 배열 거꾸로 순서변경
    if (Array.isArray(albumDate)) {
      albumDate.reverse();
    }
  }, []);
  return (
    <MainAlbum>
      <PageTitle>
        <Link to="/album">활동앨범</Link>
      </PageTitle>
      <MainAlbumList>
        {albumDate[0].ialbum === 0 ? (
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            게시글이 없습니다.
          </div>
        ) : (
          Array.isArray(albumDate) &&
          albumDate.map(item => {
            return (
              <li key={item.ialbum}>
                <Link to={`/album/details/${item.ialbum}`}>
                  <MainAlbumImage>
                    <img
                      src={`${IMG_URL}/pic/album/${item.ialbum}/${item.albumPic}`}
                    />
                    {!isLogin && !isParentLogin ? <div></div> : null}
                  </MainAlbumImage>
                  <MainAlbumText>
                    <b>{item.albumTitle}</b>
                    <p>{item.albumContents}</p>
                    <span>{item.createdAt}</span>
                  </MainAlbumText>
                </Link>
              </li>
            );
          })
        )}
      </MainAlbumList>
    </MainAlbum>
  );
};

export default MainAlbumComponent;
