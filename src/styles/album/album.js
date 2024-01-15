/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { colors, shadow } from "../basic";
export const AlbumWrap = styled.div`
  font-family: "KOTRAHOPE";
  padding-top: ${props => props.paddingTop + "px"};

  width: 100%;
  margin: 0 auto;

  input {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid ${colors.grayLight};
    border-radius: 10px;

    width: 25rem;
    height: 60px;
  }
  input::placeholder {
    color: ${colors.grayDeep};
    font-weight: 400;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
  }
`;

export const AlbumTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .album-title {
    display: flex;
    align-items: center;
    line-height: normal;
    color: ${colors.greenDeep};
  }

  .album-title img {
    margin-right: 10px;
  }
`;
export const SearchBar = styled.div`
  height: 5rem;
  position: relative;
  display: flex;
  text-align: center;
  width: 340px;
  input {
    padding: 0 20px;
    widht: 100%;
    height: 100%;
    position: relative;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--deep-gray, #999);
    justify-content: right;
    overflow: auto;
  }
  img {
    position: absolute;
    width: 5%;
    right: 30%;
    height: 100%;
  }
`;
export const InnerAlbum = styled.div`
  .gallery {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .gallery-item {
    border: 1px solid #ddd;
    width: 28rem;
    height: 25rem;

    /* width: ${props => props.width + "rem"};
    height: ${props => props.height + "rem"}; */
    text-align: center;
  }

  .gallery-item img {
    width: 448px;
    height: 392px;
    margin-bottom: 10px;
  }
`;
// export const HeaderLeft = styled.div`
