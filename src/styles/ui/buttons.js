import styled from "@emotion/styled";
import { colors, shadow } from "../basic";

// 버튼 마우스오버 효과
export const buttonHover = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
};

// 색상 별 버튼 style
export const GreenBtn = styled.button`
  background: ${colors.greenLight};
  color: ${colors.greenDeep};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;
export const OrangeBtn = styled.button`
  background: ${colors.orangeLight};
  color: ${colors.orangeDeep};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;
export const PinkBtn = styled.button`
  background: ${colors.pinkLight};
  color: ${colors.pinkDeep};
  :hover {
    ${buttonHover}
  }
`;

export const BlueBtn = styled.button`
  background: ${colors.blueLight};
  color: ${colors.blueDeep};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

export const PurpleBtn = styled.button`
  background: ${colors.purpleLight};
  color: ${colors.purpleDeep};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;
export const GrayBtn = styled.button`
  background: ${colors.grayLight};
  color: ${colors.grayDeep};
  transition: 0.2s;
  :hover {
    ${shadow}
  }
`;
export const BlackBtn = styled.button`
  background: ${colors.grayDeep};
  color: ${colors.white};
  transition: 0.1s;
  :hover {
    ${buttonHover}
  }
`;

// 메인 배너 버튼
export const MainPinkBtn = styled.button`
  background: #ffadc7;
  color: #fe77a2;
  transition: 0.1s;
  :hover {
    ${buttonHover}
  }
`;

export const MainBrownBtn = styled.button`
  background: #ffcc58;
  color: #db8400;
  transition: 0.1s;
  :hover {
    ${buttonHover}
  }
`;

// 메뉴 접기 버튼
export const AllBtn = styled.button`
  position: absolute;
  right: -2.5rem;
  top: 2.5rem;
  padding: 1rem 0.5rem;
  font-size: 1.6rem;
  border-radius: 0 0.5rem 0.5rem 0;
  min-width: auto;
  width: 2.5rem;
  height: 7rem;
  background: ${colors.greenLight};
  color: ${colors.greenDeep};
  z-index: 11;
  word-break: break-all;
  line-height: 1;
`;
