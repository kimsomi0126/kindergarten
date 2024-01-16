import React from "react";
import MainLayout from "../layouts/MainLayout";
import { PageTitle } from "../styles/basic";
import {
  MainAlbum,
  MainAlbumImage,
  MainAlbumList,
  MainAlbumText,
  MainContainer,
} from "../styles/main";

const Main = () => {
  return (
    <MainLayout>
      <MainContainer></MainContainer>
      <MainAlbum>
        <PageTitle>활동앨범</PageTitle>
        <MainAlbumList>
          <li>
            <MainAlbumImage>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/main/album/main_album01.jpg"
                }
              />
            </MainAlbumImage>
            <MainAlbumText>
              <b>Lorem ipsum dolor sit amet consectetur...</b>
              <p>
                Lorem ipsum dolor sit amet consectetur. eget eget in tristique
                nisl lectus ac nunc. Odio luctus ut ante lectus egestas. Morbi
                ut m...
              </p>
              <span>2024.01.01</span>
            </MainAlbumText>
          </li>
          <li>
            <MainAlbumImage>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/main/album/main_album02.jpg"
                }
              />
            </MainAlbumImage>
            <MainAlbumText>
              <b>Lorem ipsum dolor sit amet consectetur...</b>
              <p>
                Lorem ipsum dolor sit amet consectetur. eget eget in tristique
                nisl lectus ac nunc. Odio luctus ut ante lectus egestas. Morbi
                ut m...
              </p>
              <span>2024.01.01</span>
            </MainAlbumText>
          </li>
          <li>
            <MainAlbumImage>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/main/album/main_album03.jpg"
                }
              />
            </MainAlbumImage>
            <MainAlbumText>
              <b>Lorem ipsum dolor sit amet consectetur...</b>
              <p>
                Lorem ipsum dolor sit amet consectetur. eget eget in tristique
                nisl lectus ac nunc. Odio luctus ut ante lectus egestas. Morbi
                ut m...
              </p>
              <span>2024.01.01</span>
            </MainAlbumText>
          </li>
        </MainAlbumList>
      </MainAlbum>
    </MainLayout>
  );
};

export default Main;
