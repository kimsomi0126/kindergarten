import styled from "@emotion/styled";
import { boxStyle, colors, ellipsis } from "../basic";

export const IndWrap = styled.div`
  position: relative;
  min-height: 80vh;
`;

export const IndListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
`;
export const IndListBox = styled.div`
  width: 32%;
  padding: 2rem;
  ${boxStyle}
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
