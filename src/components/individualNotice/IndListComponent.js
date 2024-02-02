import React from "react";
import MyClass from "../user/MyClass";
import {
  IndBot,
  IndCon,
  IndListBox,
  IndListWrap,
  IndTop,
} from "../../styles/individualNotice/ind";
import { Link } from "react-router-dom";

const IndListComponent = ({ listData }) => {
  console.log(listData);
  return (
    <IndListWrap>
      {Array.isArray(listData) &&
        listData.map(item => (
          <IndListBox key={item.inotice}>
            <Link to="">
              <IndTop>
                <MyClass state={item.iclass} /> <h4>{item.kidNm}</h4>
              </IndTop>
              <IndCon>
                <p>{item.noticeTitle}</p>
                <span>{item.noticeContents}</span>
              </IndCon>
              <IndBot>
                <div className="ind-date">{item.createdAt.split(" ")[0]}</div>
                <div className="ind-file">
                  {item.picCheck === 0 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/common/file_icon.svg"
                      }
                      alt="file"
                    />
                  ) : null}
                </div>
              </IndBot>
            </Link>
          </IndListBox>
        ))}
    </IndListWrap>
  );
};

export default IndListComponent;
