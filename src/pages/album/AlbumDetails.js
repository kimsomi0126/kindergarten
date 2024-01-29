import React from "react";
import { useParams } from "react-router";
import DetailsAlbum from "../../components/album/DetailsAlbum";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/album/listall`;

const AlbumDetails = () => {
  let { pno } = useParams();
  return <DetailsAlbum pno={pno} />;
};

export default AlbumDetails;
