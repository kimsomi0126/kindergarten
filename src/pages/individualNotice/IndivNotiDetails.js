import React from "react";
import { useParams } from "react-router";
import IndivDetailsComponent from "../../components/individualNotice/IndivDetailsComponent";

const IndivNotiDetails = () => {
  let { pno } = useParams();
  // 로그인 상태에서 iteacher 값을 확인합니다.
  return <IndivDetailsComponent pno={pno} />;
};

export default IndivNotiDetails;
