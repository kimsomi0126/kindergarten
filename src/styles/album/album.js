/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { colors } from "../basic";
export const AlbumWrap = styled.div`
  padding-top: ${props => props.paddingTop + "px"};

  .search-and-write input {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 331px;
    height: 60px;
  }

  .search-and-write button {
    padding: 8px 16px;
    background-color: #d3ecc8;
    color: #00876d;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 145px;
    height: 60px;
  }
  .gallery {
    display: grid;
    /* 그리드 항목들이 유연하게 배치되도록 설정 */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* 갤러리 항목들 사이의 간격 */
    gap: 20px;
  }
  .search-and-write button:hover {
    background-color: #0056b3;
  }
`;

export const AlbumTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .album-title {
    font-size: 36px;
    display: flex;
    align-items: center;
    font-family: KOTRA HOPE;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${colors.greenDeep};
  }

  .album-title svg {
    margin-right: 10px;
  }
`;
export const SearchAndWrite = styled.div`
  width: 330px;
  height: 60px;
  padding: 0 30px;
  position: relative;
  display: flex;
  input {
    padding: 0 20px;
    width: 100%;
    height: 100%;
    position: relative;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--deep-gray, #999);
  }
  img {
    position: absolute;
    width: 25px;
    right: 10px;
    top: 10px;
  }
`;
export const InnerAlbum = styled.div`
  .gallery {
    display: grid;
    /* 가로에 3개의 이미지를 배치 */
    margin-top: 40px;
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
  }

  .gallery-item {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`;
// export const HeaderLeft = styled.div`
