import React from "react";

import "../../styles/information/info.css";
import {
  GreetingText,
  GreetingWrap,
  InfoWrap,
  TeacherDesc,
  TeacherList,
  TeacherWrap,
} from "../../styles/information/info";
import { PageTitle } from "../../styles/basic";
import { ImgBox } from "../../styles/main";

const Info = () => {
  const teacherData = [
    {
      iclass: "1",
      teacher_profile: `${
        process.env.PUBLIC_URL + "/images/information/teacher01.jpg"
      }`,
      teacher_nm: "선생님1",
      teacher_introduce: "소개글입니다.",
    },
    {
      iclass: "2",
      teacher_profile: `${
        process.env.PUBLIC_URL + "/images/information/teacher02.jpg"
      }`,
      teacher_nm: "선생님2",
      teacher_introduce: "소개글입니다.",
    },
    {
      iclass: "3",
      teacher_profile: `${
        process.env.PUBLIC_URL + "/images/information/teacher03.jpg"
      }`,
      teacher_nm: "선생님3",
      teacher_introduce: "소개글입니다.",
    },
  ];
  return (
    <InfoWrap>
      <GreetingWrap>
        <PageTitle>유치원 소개</PageTitle>
        <ImgBox>
          <img
            src={process.env.PUBLIC_URL + "/images/information/info01.jpg"}
            alt=""
          />
        </ImgBox>
        <GreetingText>
          <h3>떡잎유치원 홈페이지에 오신것을 환영합니다.</h3>
          <p>
            소중한 떡잎유치원 가족 여러분께, <br />
            저희 유치원은 어린이들에게 안전하고 풍부한 경험을 제공하여 미래를
            준비하는 데 도움이 되고자 합니다. 아이들의 인격과 창의성을 존중하며,
            교육의 가치를 중시하는 데 큰 자부심을 가지고 있습니다. <br />
            우리는 아이들이 적극적이고 독립적으로 배움의 즐거움을 느낄 수 있도록
            돕고, <br />
            그들의 성장을 돕는데 최선을 다하고 있습니다. <br />
            함께 아이들의 미래를 함께 준비하는 것에 영광을 느끼며, 항상 그들과
            함께 하겠습니다.
          </p>
          <span>떡잎유치원 원장 권지옹</span>
        </GreetingText>
      </GreetingWrap>
      <TeacherWrap>
        <PageTitle>선생님 소개</PageTitle>
        <TeacherList>
          {teacherData.map(item => (
            <li key={item.iclass}>
              <img src={item.teacher_profile} alt={item.teacher_nm} />
              <TeacherDesc className={`class${item.iclass}`}>
                <h4>{item.teacher_nm}</h4>
                <p>{item.teacher_introduce}</p>
              </TeacherDesc>
            </li>
          ))}
        </TeacherList>
      </TeacherWrap>
    </InfoWrap>
  );
};

export default Info;
