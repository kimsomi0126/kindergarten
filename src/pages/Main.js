import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
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
import { Outlet } from "react-router";
import { getMainNotice } from "../api/mainApi";

const Main = () => {
  const successFn = () => {};
  const failFn = () => {};
  const errorFn = () => {};
  useEffect(() => {
    getMainNotice({ successFn, failFn, errorFn });
  }, []);
  return (
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
          <MainLocation>
            <Outlet />
          </MainLocation>
        </MainFlexWrap>
      </MainContainer>
      {/* 활동앨범 */}
      <MainAlbumComponent />
    </MainInner>
  );
};

export default Main;
