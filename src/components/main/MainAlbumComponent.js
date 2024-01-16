import React from "react";
import {
  MainAlbum,
  MainAlbumImage,
  MainAlbumList,
  MainAlbumText,
} from "../../styles/main";
import { PageTitle } from "../../styles/basic";
import { Link } from "react-router-dom";

const MainAlbumComponent = () => {
  const albumDate = [
    {
      ialbum: 1,
      album_title:
        "첫번째제목입니다.첫번째제목입니다.첫번째제목입니다.첫번째제목입니다.첫번째제목입니다.첫번째제목입니다.",
      album_content:
        "활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용",
      album_pic: "/images/main/album/main_album01.jpg",
      create_at: "2024-00-00",
    },
    {
      ialbum: 2,
      album_title:
        "두번째제목입니다.두번째제목입니다.두번째제목입니다.두번째제목입니다.두번째제목입니다.두번째제목입니다.",
      album_content:
        "활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용",
      album_pic: "/images/main/album/main_album01.jpg",
      create_at: "2024-00-00",
    },
    {
      ialbum: 3,
      album_title:
        "세번째제목입니다.세번째제목입니다.세번째제목입니다.세번째제목입니다.세번째제목입니다.세번째제목입니다.",
      album_content:
        "활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용활동앨범 내용 활동앨범 내용 활동앨범 내용",
      album_pic: "/images/main/album/main_album01.jpg",
      create_at: "2024-00-00",
    },
  ];
  return (
    <MainAlbum>
      <PageTitle>활동앨범</PageTitle>
      <MainAlbumList>
        {Array.isArray(albumDate) &&
          albumDate.reverse().map(item => {
            return (
              <li key={item.ialbum}>
                <Link to={`/album/details/${item.ialbum}`}>
                  <MainAlbumImage>
                    <img src={process.env.PUBLIC_URL + item.album_pic} />
                  </MainAlbumImage>
                  <MainAlbumText>
                    <b>{item.album_title}</b>
                    <p>{item.album_content}</p>
                    <span>{item.create_at}</span>
                  </MainAlbumText>
                </Link>
              </li>
            );
          })}
      </MainAlbumList>
    </MainAlbum>
  );
};

export default MainAlbumComponent;
