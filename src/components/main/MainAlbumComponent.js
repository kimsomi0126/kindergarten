import React from "react";
import {
  MainAlbum,
  MainAlbumImage,
  MainAlbumList,
  MainAlbumText,
} from "../../styles/main";
import { PageTitle } from "../../styles/basic";
import { Link } from "react-router-dom";
import { AlbumDate } from "../common/TemporaryData";

const MainAlbumComponent = () => {
  return (
    <MainAlbum>
      <PageTitle>활동앨범</PageTitle>
      <MainAlbumList>
        {Array.isArray(AlbumDate) &&
          AlbumDate.reverse().map(item => {
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
