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
  max-width: ${props => props.maxw + "px"};
  height: 100vh;
  display: flex;
  flex-direction: column;
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

export const NavWrap = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${colors.white};
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative; /* 푸터와 사이드바보다 상위에 위치 */
  z-index: 10;
  border-bottom: 1px solid ${colors.grayLight};
`;

// HeaderBtn 스타일드 컴포넌트 정의
export const HeaderBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px; /* 버튼 사이의 간격 */
  margin-right: 20px; /* 오른쪽 여백 */
  border-radius: 10px;
  box-shadow: ${shadow.boxShadow};
  margin: 20px 0%;
`;

// 각 버튼에 적용할 고유 스타일 정의
export const Buttons = styled.button`
  border-radius: 10px;
  background-color: ${props => colors[props.background]};
  color: ${props => colors[props.color]}; /* props로 받은 글자 색상 적용 */
  border: none;
  font-family: "KOTRAHOPE", "Pretendard", sans-serif;
  font-size: 24px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const WrapMain = styled.div`
  padding-left: 340px;
`;

// content 레이아웃
export const WrapContent = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  min-height: 100vh;
  overflow-x: auto;
  margin: 0 auto;

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

// SideBar
export const SideBarWrap = styled.div`
  position: fixed;
  width: 320px;
  height: 100vh;
  font-size: 20px;
  background: ${colors.white};
  display: flex;
  justify-content: space-;
  align-items: center;
  flex-direction: column;
  z-index: 99;
  padding: 2rem;
  border-right: 1px solid ${colors.grayLight};
  box-shadow: ${shadow.boxShadow};
`;

export const LogoWrap = styled(Link)`
  img {
    max-width: 14rem;
  }
`;
