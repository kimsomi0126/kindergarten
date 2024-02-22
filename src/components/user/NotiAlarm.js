import React from "react";
import {
  NotiBox,
  NotiIcon,
  NotiList,
  NotiWrap,
} from "../../styles/user/notialarm";

const NotiAlarm = ({ state }) => {
  return (
    <NotiWrap>
      <NotiIcon state={state}>
        <img src={process.env.PUBLIC_URL + "/images/common/bell_icon.svg"} />
      </NotiIcon>
    </NotiWrap>
  );
};

export default NotiAlarm;
