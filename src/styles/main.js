import styled from "@emotion/styled";
import { colors, shadow } from "./basic";

export const MainContainer = styled.div`
  background: #ccc;
`;
export const MainAlbum = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 2rem;
  max-width: 40rem;
  background: url(${process.env.PUBLIC_URL +
    "/images/main/album/main_album_bg.jpg"})
    repeat top;
  height: 100%;
  h3 {
    border-bottom: 1px solid ${colors.greenDeep};
    padding-bottom: 1rem;
  }
`;

export const MainAlbumList = styled.ul`
  position: relative;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;

  li {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 2rem;
    ${shadow}
  }
`;
export const MainAlbumImage = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 16/9;
  border-radius: 1rem;
  img {
    width: 100%;
  }
`;

export const MainAlbumText = styled.div`
  margin-top: 1.5rem;
  b {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
    color: ${colors.grayDeep};
    font-weight: 300;
    margin-bottom: 1rem;
  }
  span {
    color: ${colors.grayDeep};
    font-weight: 300;
  }
`;
