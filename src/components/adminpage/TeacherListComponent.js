import React, { useState } from "react";
import {
  InfoBox,
  ListBoxTop,
  TeacherImgInfo,
  TeacherInfo,
  TeacherListBox,
  TeacherListItem,
  TeacherListWrap,
  TeacherMain,
} from "../../styles/adminstyle/teacherinfolist";
import { GrayBtn } from "../../styles/ui/buttons";

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
            <div>
              <ListBoxTop>
                <TeacherImgInfo>{/* <img src={} /> */}</TeacherImgInfo>
                <TeacherInfo>
                  <p className="hibiscus">해바라기반</p>
                  <p className="leaf">나미리</p>
                </TeacherInfo>
                <GrayBtn>정보 수정</GrayBtn>
              </ListBoxTop>
              <InfoBox>
                <p>이름</p>
                <div>나미리</div>
                <p>아이디</p>
                <div>tc1111</div>
                <p>재직상태</p>
                <div>재직중</div>
              </InfoBox>
            </div>
          </TeacherListItem>
        </TeacherListWrap>
      </TeacherMain>
    </>
  );
};

export default TeacherListComponent;
