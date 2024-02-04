import React from "react";
import MyClass from "../user/MyClass";
import {
  IndBot,
  IndCon,
  IndList,
  IndListBox,
  IndListWrap,
  IndTop,
} from "../../styles/individualNotice/ind";
import { Link } from "react-router-dom";

const IndListComponent = ({ listData }) => {
  return (
    <IndListWrap>
      <IndList>
        {Array.isArray(listData) && listData[0].inotice === 0 ? (
          <div
            style={{ textAlign: "center", width: "100%", marginTop: "5rem" }}
          >
            알림장 내용이 없습니다.
          </div>
        ) : (
          Array.isArray(listData) &&
          listData.map(item => (
            <IndListBox key={item.inotice}>
              <Link to={`/ind/details/${item.inotice}`}>
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
                    {item.picCheck === 1 ? (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/common/file_icon.svg"
                        }
                        alt="file"
                      />
                    ) : null}
                  </div>
                </IndBot>
              </Link>
            </IndListBox>
          ))
        )}
      </IndList>
    </IndListWrap>
  );
};

export default IndListComponent;
