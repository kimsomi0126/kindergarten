/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

// 그림자효과
export const shadow = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
};

// 전체 레이아웃
export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  overflow-x: auto;
  margin: 0 auto;
  background: url(${process.env.PUBLIC_URL + "/images/common/background.svg"})
    repeat center;

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

export const HeaderBtn = styled.div`
  position: fixed;
  font-size: 24px;
  top: 20px;
  right: 20px;
`;

// export const HeaderBtnInner = styled.button`
//   width: 9.0625rem
//   height: 3.125rem
//   position: relative;
//   display: flex;
//   padding: 10px;
//   align-items: center;
//   justify-content: space-between;
// `;

// content 레이아웃
export const WrapContent = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  min-height: 100vh;
  overflow-x: auto;
  margin: 0 auto;
  padding-left: 20rem;

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

// 왼쪽 NavBar
export const WrapNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: ${colors.white};
  z-index: 99;
  padding: 2rem;
  ${shadow}
`;

export const LogoWrap = styled(Link)`
  img {
    max-width: 15rem;
  }
`;
