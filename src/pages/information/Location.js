import React from "react";
import {
  LocationWrap,
  MapInfoList,
  MapWrap,
} from "../../styles/information/info";
import { PageTitle } from "../../styles/basic";

const Location = () => {
  return (
    <LocationWrap>
      <PageTitle>오시는길</PageTitle>
      <MapWrap></MapWrap>
      <MapInfoList>
        <li>
          <img src="/images/information/location.svg" alt="" />
          <h4>주소</h4>
          <p>서울특별시 어쩌구 저쩌동 무슨길 12</p>
        </li>
        <li>
          <img src="/images/information/location.svg" alt="" />
          <h4>주소</h4>
          <p>서울특별시 어쩌구 저쩌동 무슨길 12</p>
        </li>
        <li>
          <img src="/images/information/location.svg" alt="" />
          <h4>주소</h4>
          <p>서울특별시 어쩌구 저쩌동 무슨길 12</p>
        </li>
      </MapInfoList>
    </LocationWrap>
  );
};

export default Location;
