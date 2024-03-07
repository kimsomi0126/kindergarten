import React from "react";
import { ContentInner, PageTitle } from "../../styles/basic";
import {
  AboutWrap,
  ItemInfo,
  TeamItem,
  TeamWrap,
} from "../../styles/about/about";
import { TitleWrap } from "../../styles/user/mypage";
import { OrangeBtn } from "../../styles/ui/buttons";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const imgUrl = process.env.PUBLIC_URL + "/images/about";
  return (
    <ContentInner>
      <AboutWrap>
        {/* 프론트엔드 */}
        <TitleWrap>
          <PageTitle>Front-End</PageTitle>
          <OrangeBtn
            as="a"
            href="https://alert-stomach-4e6.notion.site/2-3-f77ee2e63bbc41ee8667735ac3a8b81f"
            target="_blank"
            className="notion-btn"
          >
            Team Notion
          </OrangeBtn>
        </TitleWrap>
        <TeamWrap>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/front_pf01.jpg`} alt="" />
              <div>
                <p>이상재</p>
                <span>프론트엔드 2차 팀장</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/devcodemaestro" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/front_pf02.jpg`} alt="" />
              <div>
                <p>김도현</p>
                <span>프론트엔드 3차 팀장</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/dsa9925" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/front_pf03.jpg`} alt="" />
              <div>
                <p>도선경</p>
                <span>프론트엔드 팀원</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/do-sg" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/front_pf04.jpg`} alt="" />
              <div>
                <p>김소미</p>
                <span>프론트엔드 팀원</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/kimsomi0126" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
        </TeamWrap>
        {/* 백엔드 */}
        <TitleWrap>
          <PageTitle>Back-End</PageTitle>
          <OrangeBtn
            as="a"
            href="https://hospitable-cactus-9d1.notion.site/019c4e14fd754cf4bca2b1fcef422770"
            target="_blank"
            className="notion-btn"
          >
            Team Notion
          </OrangeBtn>
        </TitleWrap>
        <TeamWrap>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/back_pf01.jpg`} alt="" />
              <div>
                <p>김경현</p>
                <span>백엔드 2차 팀장</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/hyunnnni" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/back_pf02.jpg`} alt="" />
              <div>
                <p>양애영</p>
                <span>백엔드 3차 팀장</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/yangaeyoung" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/back_pf03.jpg`} alt="" />
              <div>
                <p>곽경록</p>
                <span>백엔드 팀원</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/GYEONGROK11" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
          <TeamItem>
            <ItemInfo>
              <img src={`${imgUrl}/back_pf04.jpg`} alt="" />
              <div>
                <p>노혜선</p>
                <span>백엔드 팀원</span>
              </div>
            </ItemInfo>
            <Link to="https://github.com/NohHyeseon" target="_blank">
              GitHub 바로가기
            </Link>
          </TeamItem>
        </TeamWrap>
      </AboutWrap>
    </ContentInner>
  );
};

export default About;
