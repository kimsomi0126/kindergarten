import styled from "@emotion/styled";
import { Select } from "antd";
import Search from "antd/es/input/Search";
import "../styles/guardianlist.css";

export const HeaderWrap = styled.div``;

export const HeaderLeft = styled.div`
  font-size: 36px;
  color: #008666;
`;

export const HeaderRight = styled.div`
  right: 0;
`;

export const StyledSelect = styled(Select)`
  width: 120px;
`;

export const StyledSearch = styled(Search)`
  width: 300px;
`;

export const GuardianListWrap = styled.div``;

export const ListItem = styled.div`
  width: 470px;
  height: 136px;
  flex-shrink: 0;
  fill: var(--main-color, #fff);
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));
`;

export const ListId = styled.div`
  color: var(--deep-green, var(--color-deepGreen, #00876d));

  /* text/medium_500 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ListName = styled.div`
  color: #000;

  /* text/medium_500 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
