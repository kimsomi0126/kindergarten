import styled from "@emotion/styled";
import { boxStyle, colors, shadow } from "../basic";

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
  > div {
    width: 40%;
  }
`;
export const GreetingText = styled.div`
  width: 60% !important;
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
  /* flex-wrap: wrap; */
  justify-content: space-between;
  text-align: center;
  gap: 2rem;

  li {
    width: 24%;
    background: #fff;
    ${shadow}
  }
  img {
    width: 100%;
  }
`;

export const TeacherDesc = styled.div`
  padding: 2rem 3rem;

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
  margin: 1px;
  margin-bottom: 1rem;
  h4 {
    padding: 2rem 0;
  }
  .kid_img {
    aspect-ratio: 1/1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    min-height: 100%;
  }
`;

// 오시는길
export const LocationWrap = styled.div`
  position: relative;
  padding-bottom: 15rem;
`;
export const MapWrap = styled.div`
  margin-top: 3rem;
  position: relative;
  #map {
    width: 100%;
    height: 40rem;
    ${boxStyle}
  }
  a {
    display: block;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    z-index: 9;
    background: #fff;
  }
`;
export const MapInfoList = styled.div`
  position: relative;
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 24%;
    ${boxStyle}
    padding:3rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
  }

  h4 {
    color: ${colors.greenDeep};
    margin: 2rem 0 1rem;
  }
`;
