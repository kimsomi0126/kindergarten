import styled from "@emotion/styled";
import { boxStyle, colors, ellipsis, fonts, mq } from "../basic";

export const IndAlbum = styled.div`
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

export const IndAlbumOver = styled.div`
  position: absolute;
  width: 18.5%;
  aspect-ratio: 1/1;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex; // flexbox 레이아웃 적용
  margin-top: 1rem;
  justify-content: start; // 이미지를 왼쪽 정렬
  gap: 2%; // 이미지 사이의 간격 설정

  .ant-image {
    position: relative;
    width: 19% !important;
    aspect-ratio: 1/1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .ant-image-img {
      width: auto;
      height: 100%;
    }
  }
`;
