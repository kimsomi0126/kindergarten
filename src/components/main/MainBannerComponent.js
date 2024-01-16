import React from "react";
import { MainBanner, MainBannerWrap } from "../../styles/main";
import { Link } from "react-router-dom";
import { BlueBtn, MainBrownBtn, MainPinkBtn } from "../../styles/ui/buttons";

const MainBannerComponent = () => {
  return (
    <MainBannerWrap>
      <MainBanner className="bnr1">
        <Link to="/info">
          <h3>유치원소개</h3>
          <MainBrownBtn>바로가기</MainBrownBtn>
        </Link>
      </MainBanner>
      <MainBanner className="bnr2">
        <Link to="/edu">
          <h3>교육과정</h3>
          <MainPinkBtn>바로가기</MainPinkBtn>
        </Link>
      </MainBanner>
      <MainBanner className="bnr3">
        <Link to="/edu/specialact">
          <h3>방과후수업</h3>
          <BlueBtn>바로가기</BlueBtn>
        </Link>
      </MainBanner>
    </MainBannerWrap>
  );
};

export default MainBannerComponent;
