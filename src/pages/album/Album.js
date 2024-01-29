import React from "react";
import { useParams } from "react-router-dom";
import DetailsAlbum from "../../components/album/DetailsAlbum";
import ReadAllAlbum from "../../components/album/ReadAllAlbum";
import AlbumDetails from "./AlbumDetails";
export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/album/listall`;

const Album = () => {
  return (
    <div>
      <ReadAllAlbum />
    </div>
  );
};
export default Album;
