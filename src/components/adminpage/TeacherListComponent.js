import React, { useState } from "react";
import {
  InfoBox,
  ListBox,
  ListBoxTop,
  TeacherImgInfo,
  TeacherInfo,
  TeacherListBox,
  TeacherListItem,
  TeacherListWrap,
  TeacherMain,
} from "../../styles/adminstyle/teacherinfolist";
import { GrayBtn } from "../../styles/ui/buttons";
import { PageNum } from "../../styles/adminstyle/guardianlist";
import { Pagination } from "antd";

const TeacherListComponent = () => {
  return (
    <>
      <TeacherMain>
        <div>
          <input type="checkbox" id="selectAll" name="iteacher" />
          <label htmlFor="selectAll">전체 선택</label>
        </div>
        <TeacherListWrap>
          <TeacherListItem>
            <input type="checkbox" name="iteacher" />
            <ListBox>
              <ListBoxTop>
                <TeacherImgInfo>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/information/teacher01.jpg"
                    }
                  />
                </TeacherImgInfo>
                <TeacherInfo>
                  <p className="hibiscus">해바라기반</p>
                  <p className="leaf">나미리</p>
                </TeacherInfo>
                <GrayBtn>정보 수정</GrayBtn>
              </ListBoxTop>
              <InfoBox>
                <dl>
                  <dt>이름</dt>
                  <dd>나미리</dd>
                </dl>
                <dl>
                  <dt>아이디</dt>
                  <dd>tc1111</dd>
                </dl>
                <dl>
                  <dt>재직상태</dt>
                  <dd>재직중</dd>
                </dl>
                <dl>
                  <dt>이메일</dt>
                  <dd>tc1111@naver.com</dd>
                </dl>
                <p>인사말</p>
                <span>어쩌구저쩌구 해바라기반 담당 선생님입니다.</span>
              </InfoBox>
            </ListBox>
          </TeacherListItem>
        </TeacherListWrap>
      </TeacherMain>
      <PageNum>
        <Pagination pageSize={12} />
      </PageNum>
    </>
  );
};

export default TeacherListComponent;
