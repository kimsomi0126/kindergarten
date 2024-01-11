/* eslint-disable no-undef */
import styled from "@emotion/styled";

// 기본색상
export const colors = {
  main: "#ffffff",
  secondary: "#ebebeb",
  point: "#273F7C",
  tab: "#f7f7f7",
  error: "#ff6345",
  placeholder: "#cccccc",
  gray: "#555555",
  black: "#000",
};

// 그림자효과
export const shadow = {
  light: { boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" },
  bold: {
    boxShadow:
      "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  },
};

// 전체 레이아웃
export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  /* height: 100vh; */
  min-height: 100vh;
  overflow-x: auto;
  margin: 0 auto;
  padding: 6rem 1.5% 16rem;
  background: url(${process.env.PUBLIC_URL + "/images/common/background.svg"})
    repeat center;

  input,
  textarea {
    border: 1px solid ${colors.secondary};
    border-radius: 0;
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
  /* height: 100vh; */
  min-height: 100vh;
  overflow-x: auto;
  margin: 0 auto;

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

// 왼쪽 NavBar
export const WrapNav = styled.div`
  height: 84.5625rem;
  width: 20rem;
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 20px;
`;
