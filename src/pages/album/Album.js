import React from "react";
import ReadAllAlbum from "../../components/album/ReadAllAlbum";
// 임시 데이터 서버로부터 받아온 데이터로 대체될 예정

export const API_SERVER_HOST = "http://112.222.157.156:5224";
const host = `${API_SERVER_HOST}/api/album/listall`;

const Album = ({ pno }) => {
  return (
    <div>
      <ReadAllAlbum pno={pno} />
    </div>
  );
};
export default Album;
