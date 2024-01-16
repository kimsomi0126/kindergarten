import React from "react";

import InfoLayout from "../../layouts/InfoLayout";
import "../../styles/information/info.css";

const Info = () => {
  return (
    <InfoLayout>
      <div className="info_wrap">
        <div className="info_header">
          <h4 className="info_title">
            <img
              src="./images/information/logo1.svg"
              alt=""
              className="info_logo"
            />
            유치원 소개
          </h4>
          <img
            src="./images/information/logo2.svg"
            alt=""
            className="info_img"
          />
          <h3 className="info_good">
            떡잎 유치원 홈페이지에 오신 것을 환영합니다.
          </h3>
          <span className="info_childen">
            소중한 떡잎 유치원 가족 여러분께,
            <br />
            저희 유치원은 어린이들에게 안전하고 풍부한 경험을 제공하여 미래를
            준비하는 데 도움이 되고자 합니다.
            <br />
            아이들의 인격과 창의성을 존중하며,교육의 가치를 중시하는 데 큰
            자부심을 가지고 있습니다.
            <br />
            우리는 아이들이 적극적이고 독립적으로 배움의 즐거움을 느낄 수 있도록
            돕고,
            <br />
            그들의 성장을 돕는데 최선을 다하고 있습니다.
            <br />
            함께 아이들의 미래를 함께 준비하는 것에 영광을 느끼며,항상 그들과
            함께 하겠습니다.
            <br />
            떡잎유치원 원장 권지옹
          </span>
        </div>
        <div className="info_main">
          <ul className="info_list">
            <li>
              <img src="./images/information/logo1.svg" alt="" />
              <h4>선생님 소개 </h4>
            </li>
            <li>
              <img src="./images/information/logo3.svg" alt="" />
              <p>나미리 선생님</p>
            </li>
            <li>
              <img src="./images/information/logo4.svg" alt="" />
              <p>차은주 선생님</p>
            </li>
            <li>
              <img src="./images/information/logo5.svg" alt="" />
              <p>채성아 선생님</p>
            </li>
          </ul>
        </div>
      </div>
    </InfoLayout>
  );
};

export default Info;
