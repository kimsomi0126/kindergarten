/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { colors, fonts, shadow } from "../basic";
export const AlbumWrap = styled.div`
  overflow: hidden;
  font-family: "KOTRAHOPE";
  padding-top: ${props => props.paddingTop + "px"};

  width: ${props => props.width + "%"};
  margin: 0 auto;
  height: ${props => props.height + "%"};
  input {
    padding: 8px;
    border: 1px solid ${colors.grayLight};
    border-radius: 10px;
  }
  input::placeholder {
    color: ${colors.grayDeep};
  }
`;

export const AlbumTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  padding: 1.8rem;
`;
export const SearchBar = styled.div`
  img {
    position: absolute;
    width: 5%;
    right: 30%;
    height: 100%;
  }
`;
export const InnerAlbum = styled.div`
  width: 100%;
  height: 100vh;

  .gallery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }

  .gallery-item {
    width: ${props => props.width + "rem"};
    height: ${props => props.height + "rem"};
    border: 1px solid #ddd;
    text-align: center;
    margin-bottom: 7rem;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    margin-bottom: 0.625rem;
  }
`;
// export const HeaderLeft = styled.div`

export const AlbumList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개의 이미지를 가로로 나란히 표시
  gap: 0.4rem;
  margin: 0px auto;
  position: relative;

  .image-grid {
    gap: 1.6rem;
    margin: 1.6rem;
    text-align: center;
  }
  .image-grid > p {
    font-size: 1.8rem;
    margin: 1rem 0;
    font-family: ${fonts.pretendard};
    color: ${colors.black};
  }
  .image-item {
    display: flex;
    flex-wrap: wrap;
  }

  .image-item img {
    border-radius: 5%;
    width: 100%;
    text-align: center;
    height: auto;
  }

  .loading {
    height: 10rem;
    margin: 3rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export const SwiperWrap = styled.div`
  body {
    background-color: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  .swiper-pagination {
    text-align: center;
    padding: 0 2rem 0.5rem;
  }
  .swiper {
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    width: 100%;
  }
`;

export const ContentWrap = styled.div`
  margin-top: 2rem;
  background: #fff;

  border-top: 0.2rem solid ${colors.greenDeep};
  .rce-container-input {
    padding: 0 2rem;
    background-color: #fafafa;
  }
`;

export const AlbumTitle = styled.h3`
  padding-left: 2.8rem;
  padding-bottom: 3rem;
  background: url(${process.env.PUBLIC_URL + "/images/information/logo1.svg"})
    no-repeat left 0.25rem/2.3rem;
  color: ${colors.greenDeep};
`;

export const TitleWrap = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  border-bottom: 1px solid ${colors.grayBar};
  padding: 3.5rem;
  h3 {
    display: inline-block;
    font-size: 2.7rem;
    font-weight: 400;
    flex: 1;
    text-align: center;
  }
  p {
    font-family: Pretendard;
    font-size: 1.5rem;
    text-align: right;
    color: ${colors.grayDeep};
  }
`;

export const MainContent = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 0.2rem solid ${colors.greenDeep};
`;

export const DetailsText = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;

  p {
    line-height: 1.8;
    margin: 2rem 0;
    text-align: center;
  }
`;

export const Footer = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 9rem;

  button {
    margin-left: 1rem;
  }
`;

export const CommentWrap = styled.div`
  background-color: #fafafa;
  padding-bottom: 2rem;
`;
