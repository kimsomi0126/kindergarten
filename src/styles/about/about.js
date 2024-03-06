import styled from "@emotion/styled";
import { boxStyle, colors, mq } from "../basic";
import { TitleWrap } from "../user/mypage";

export const AboutWrap = styled.div`
  padding: 3rem;
  width: 90%;
  max-width: 130rem;
  margin: 0 auto;
  ${boxStyle}
  background:#fafafa;
  border: 1px solid #f1f1f1;
  .notion-btn:hover {
    color: ${colors.orangeDeep};
  }
`;

export const TeamWrap = styled.div`
  position: relative;
  border-top: 1px solid ${colors.greenDeep};
  margin-bottom: 3rem;
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1%;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const TeamItem = styled.div`
  position: relative;
  padding: 2rem;
  width: 24%;
  ${boxStyle}
  margin-bottom: 1rem;

  a {
    display: block;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    background: ${colors.grayDeep};
    border-radius: 0.5rem;
    color: #fff;
    transition: 0.2s;
    &:hover {
      background: #777;
    }
  }

  ${mq.tablet} {
    width: 49%;
  }
  ${mq.mobileBig} {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.grayBar};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  img {
    border-radius: 50%;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  span {
    color: ${colors.grayDeep};
    font-size: 1.4rem;
  }
`;
