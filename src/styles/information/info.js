import styled from "@emotion/styled";
import { colors, shadow } from "../basic";

// 유치원소개
export const InfoWrap = styled.div`
  position: absolute;
  left: -2%;
  top: 0;
  width: 104%;

  h3 {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

// 원장님인사말
export const GreetingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  margin: 0 auto 8rem;
`;
export const GreetingText = styled.div`
  width: 55%;
  padding-left: 5%;
  font-size: 1.6rem;
  h3 {
    font-size: 3rem;
  }
  p {
    line-height: 1.8;
    margin: 5rem 0;
  }
  span {
    font-weight: 500;
  }
`;

// 선생님소개
export const TeacherWrap = styled.div`
  padding: 8rem 5% 15rem;
  background: rgba(162, 216, 255, 0.1);
`;
export const TeacherList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;

  li {
    width: 32%;
    background: #fff;
    ${shadow}
  }
  img {
    width: 100%;
  }
`;

export const TeacherDesc = styled.div`
  padding: 2rem 0;

  h4 {
    margin-bottom: 1rem;
  }

  &.class1 h4 {
    color: ${colors.greenDeep};
  }
  &.class2 h4 {
    color: ${colors.orangeDeep};
  }
  &.class3 h4 {
    color: ${colors.pinkDeep};
  }
`;

// 원생소개
export const InfoClassWrap = styled.div`
  padding-bottom: 15rem;
  .pagination {
    text-align: right;
  }
  .swiper {
    margin-top: 3rem;
  }
`;

export const ClassWrap = styled.div`
  margin-bottom: 5rem;

  &.class1 h4 {
    color: ${colors.greenDeep};
  }
  &.class2 h4 {
    color: ${colors.orangeDeep};
  }
  &.class3 h4 {
    color: ${colors.pinkDeep};
  }
`;
export const KidsInfo = styled.div`
  text-align: center;
  background: ${colors.white};
  border: 1px solid ${colors.grayLight};
  h4 {
    padding: 2rem 0;
  }
`;

// 오시는길
export const LocationWrap = styled.div`
  position: relative;
`;
export const MapWrap = styled.div`
  position: relative;
`;
export const MapInfoList = styled.div`
  position: relative;
`;
