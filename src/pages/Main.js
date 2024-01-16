import React, { useEffect } from "react";
import MainPageLayout from "../layouts/MainPageLayout";
import {
  ImgBox,
  MainBannerWrap,
  MainContainer,
  MainFlexWrap,
  MainInner,
  MainLocation,
  MainNoticeList,
  MainNoticeTitle,
  MainNoticeWrap,
  MainPopSlide,
  MainVisual,
  SlideBtn,
} from "../styles/main";
import MainAlbumComponent from "../components/main/MainAlbumComponent";
import { MainVisualComponent } from "../components/main/MainVisualComponent";
import { MainNoticeComponent } from "../components/main/MainNoticeComponent";
import MainBannerComponent from "../components/main/MainBannerComponent";
import MainPopComponent from "../components/main/MainPopComponent";

const Main = () => {
  useEffect(() => {}, []);
  return (
    <MainPageLayout>
      <MainInner>
        <MainContainer>
          {/* 비주얼 */}
          <MainVisualComponent />
          {/* 유치원소식 */}
          <MainNoticeComponent />
          {/* 배너 */}
          <MainBannerComponent />
          <MainFlexWrap>
            {/* 팝업존 */}
            <MainPopComponent />
            {/* 오시는길 */}
            <MainLocation></MainLocation>
          </MainFlexWrap>
        </MainContainer>
        {/* 활동앨범 */}
        <MainAlbumComponent />
      </MainInner>
    </MainPageLayout>
  );
};

export default Main;
