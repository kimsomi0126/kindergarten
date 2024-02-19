import React from "react";
import { useParams } from "react-router";
import DetailsAlbum from "../../components/album/DetailsAlbum";
import useCustomLogin from "../../hooks/useCustomLogin";

const AlbumDetails = () => {
  let { pno } = useParams();
  const { isLogin, loginState } = useCustomLogin(); // 로그인 상태를 가져옵니다.

  // 로그인 상태에서 iteacher 값을 확인합니다.
  return <DetailsAlbum pno={pno} isLogin={isLogin} loginState={loginState} />;
};
export default AlbumDetails;
