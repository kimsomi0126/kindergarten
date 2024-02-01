import React from "react";
import ReadAllAlbum from "../../components/album/ReadAllAlbum";
export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/album/listall`;

const Album = () => {
  return <ReadAllAlbum />;
};
export default Album;
