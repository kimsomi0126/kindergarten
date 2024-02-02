import styled from "@emotion/styled";
import { boxStyle, colors, ellipsis } from "../basic";

export const IndWrap = styled.div`
  position: relative;
`;

export const IndListWrap = styled.div`
  min-height: 60vh;
`;

export const IndList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;

export const IndListBox = styled.div`
  width: 32%;
  margin-bottom: 1rem;
  ${boxStyle}
  a {
    display: block;
    padding: 1.5rem 2rem;
  }
`;

export const IndTop = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #555;
`;
export const IndCon = styled.div`
  margin: 1.5rem 0;
  min-height: 3rem;
  p {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
    color: ${colors.grayDeep};
    ${ellipsis.line2}
    word-break: break-all;
  }
`;
export const IndBot = styled.div`
  display: flex;
  justify-content: space-between;
  .ind-date {
    color: ${colors.grayDeep};
    padding-left: 2.5rem;
    background: url(${process.env.PUBLIC_URL +
      "/images/common/notice/clock.svg"})
      no-repeat top left/ 1.8rem;
  }
`;
