import React from "react";
import DetailsAlbum from "../../components/album/DetailsAlbum";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/album/listall`;

const AlbumDetails = id => {
  return <DetailsAlbum />;
};

export default AlbumDetails;
