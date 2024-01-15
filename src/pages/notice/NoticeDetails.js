// NoticeDetails.js

import React from "react";

const NoticeDetails = ({ content }) => {
  return (
    <div>
      <h1>게시물 상세 내용</h1>
      <p>{content}</p>
    </div>
  );
};

export default NoticeDetails;
