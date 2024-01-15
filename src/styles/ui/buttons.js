import styled from "@emotion/styled";
import { colors } from "../basic";

// 색상 별 버튼 style
export const GreenBtn = styled.button`
  background: ${colors.greenLight};
  color: ${colors.greenDeep};
`;
export const OrangeBtn = styled.button`
  background: ${colors.orangeLight};
  color: ${colors.orangeDeep};
`;
export const PinkBtn = styled.button`
  background: ${colors.pinkLight};
  color: ${colors.pinkDeep};
`;
export const BlueBtn = styled.button`
  background: ${colors.blueDeep};
  color: ${colors.blueLight};
`;
export const PurpleBtn = styled.button`
  background: ${colors.purpleLight};
  color: ${colors.purpleDeep};
`;
export const GrayBtn = styled.button`
  background: ${colors.grayLight};
  color: ${colors.grayDeep};
`;
export const BlackBtn = styled.button`
  background: ${colors.grayDeep};
  color: ${colors.white};
`;

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
