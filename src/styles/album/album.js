/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { colors, shadow } from "../basic";
export const AlbumWrap = styled.div`
  overflow: hidden;
  font-family: "KOTRAHOPE";
  padding-top: ${props => props.paddingTop + "px"};

  width: 100%;
  margin: 0 auto;
  height: 100%;
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
  height: 60px;

  .album-title {
    display: flex;
    align-items: center;
    line-height: normal;
    color: ${colors.greenDeep};
  }
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
    margin-top: 40px;
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
    margin-bottom: 10px;
  }
`;
// export const HeaderLeft = styled.div`

export const AlbumList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개의 이미지를 가로로 나란히 표시
  gap: 0.4rem;
  margin: 0px auto;
  position: relative;
  z-index: -999;

  .image-grid {
    gap: 16px;
    margin: 16px;
    text-align: center;
  }
  .image-grid > p {
    font-size: 20px;
    margin: 20px 0;
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
    height: 100px;
    margin: 30px;
    text-align: center;
    font-size: 20px;
  }
`;
