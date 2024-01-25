/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { animationGo } from "./ui/animations";

// 기본색상
export const colors = {
  // 초록색
  greenDeep: "#00876D",
  greenLight: "#D3ECC8",
  greenLight2: "#E7F6ED",

  // 오렌지색
  orangeDeep: "#FD7900",
  orangeLight: "#FFEEC6",
  // 분홍색
  pinkDeep: "#D64478",
  pinkLight: "#FDC1C5",
  // 파랑색
  blueDeep: "#24A2FF",
  blueLight: "#A2D8FF",
  // 보라색
  purpleDeep: "#A36BFF",
  purpleLight: "#E7D8FF",

  // 회색, 검정색
  grayDeep: "#999999",
  grayLight: "#EBEBEB",
  black: "#000",
  white: "#fff",
};

export const fonts = {
  kotraHope: `"KOTRAHOPE", "Pretendard", sans-serif;`,
  pretendard: `"Pretendard", sans-serif;`,
};

// 그림자효과
export const shadow = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
};

// 박스
export const boxStyle = {
  background: "#fff",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
};

// 말줄임
export const ellipsis = {
  line1: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  line2: {
    overflow: "hidden",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  },
  line3: {
    overflow: "hidden",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
  },
};

// 전체 레이아웃
export const Wrap = styled.div`
  max-width: ${props => {
    props.maxw + "px";
  }};
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input,
  textarea {
    border: 1px solid ${colors.secondary};
    border-radius: 1rem;
    font-size: 1.2rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

// navbar 레이아웃
export const NavWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2%;
  background-color: ${colors.white};
  display: flex;
  height: 7.5rem;
  justify-content: right;
  align-items: center;
  gap: 2rem;
  z-index: 10;
  border-bottom: 1px solid ${colors.grayLight};
  p {
    font-size: 1.8rem;
    font-family: ${fonts.kotraHope};
    color: ${colors.greenDeep};
  }
`;

// 상단 navbar 버튼
export const HeaderBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

// 메인 content 레이아웃
export const WrapMain = styled.div`
  position: relative;
  padding: 3rem 2% 0;
  height: calc(100vh - 7.5rem);
  overflow-y: auto;
  background: url(${process.env.PUBLIC_URL + "/images/common/background.png"})
    repeat top;
`;

// content 레이아웃
export const WrapContent = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  z-index: 12;

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

export const ContentInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

// 사이드바
export const SideBarWrap = styled.div`
  background: #fff;
  z-index: 99;
  ${shadow}
`;

// 로고
export const LogoWrap = styled.div`
  width: 100%;
  text-align: center;
  margin: 3rem 0;
  img {
    max-height: 3.5rem;
  }
`;

// 하단 footer
export const FooterWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: 10rem;
  overflow: hidden;
  background: url(${process.env.PUBLIC_URL +
    "/images/common/footer/footer_bg.png"})
    no-repeat center 150%/100%;
  text-align: center;
  z-index: 10;

  a {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const FooterBus = styled.div`
  position: absolute;
  bottom: -22%;
  left: 0;
  width: 16.6rem;
  height: 16.6rem;
  background: url(${process.env.PUBLIC_URL +
    "/images/common/footer/footer_bus.svg"})
    no-repeat center/70%;

  animation: ${animationGo} 10s infinite ease-in-out;
`;

// 서브페이지 타이틀
export const PageTitle = styled.h3`
  padding-left: 2.8rem;
  background: url(${process.env.PUBLIC_URL + "/images/information/logo1.svg"})
    no-repeat left 0.25rem/2.3rem;
  color: ${colors.greenDeep};
`;
