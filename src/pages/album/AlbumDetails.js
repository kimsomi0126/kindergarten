import React from "react";
import { useParams } from "react-router";
import DetailsAlbum from "../../components/album/DetailsAlbum";

const AlbumDetails = () => {
  let { pno } = useParams();
  return <DetailsAlbum pno={pno} />;
};

export default AlbumDetails;
