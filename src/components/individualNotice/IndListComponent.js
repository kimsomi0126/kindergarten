import React from "react";
import MyClass from "../user/MyClass";
import {
  IndBot,
  IndCon,
  IndListBox,
  IndListWrap,
  IndTop,
} from "../../styles/individualNotice/ind";

const IndListComponent = ({ listData }) => {
  const datePart = listData.createdAt.split(" ")[0];
  return (
    <IndListWrap>
      <IndListBox>
        <IndTop>
          <MyClass state={listData.iclass} /> <h4>{listData.kidNm}</h4>
        </IndTop>
        <IndCon>
          <p>{listData.noticeTitle}</p>
          <span>{listData.noticeContents}</span>
        </IndCon>
        <IndBot>
          <div className="ind-date">{datePart}</div>
          <div className="ind-file">
            {listData.picCheck === 0 ? (
              <img
                src={process.env.PUBLIC_URL + "/images/common/file_icon.svg"}
                alt="file"
              />
            ) : null}
          </div>
        </IndBot>
      </IndListBox>
    </IndListWrap>
  );
};

export default IndListComponent;
