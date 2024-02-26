import React, { useEffect, useState } from "react";
import {
  HospitalInfo,
  HospitalItem,
  HospitalList,
  HospitalMap,
  HospitalTitle,
  HospitalWrap,
  MapInfoTr,
  MapTr,
} from "../../styles/education/hospital";
import { FlexBox, TableWrap, TitleWrap } from "../../styles/user/mypage";
import { PageTitle, TitleDesc } from "../../styles/basic";
import Search from "antd/es/input/Search";
import { PageNum } from "../../styles/adminstyle/guardianlist";
import { Pagination } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getHospital } from "../../api/education/hospitalApi";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const initData = [
  {
    sigunNm: "",
    sigunCd: "",
    facltNm: "",
    telNo: "",
    refineLotNoAddr: "",
    refineRoadnmAddr: "",
    refineZipCd: "",
    refineWgs84Logt: 0,
    refineWgs84Lat: 0,
  },
];

const Hospital = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [spotData, setSpotData] = useState(initData);
  const [isShow, setIsShow] = useState(false);
  const [selectedMapIndex, setSelectedMapIndex] = useState(null);
  const [isShowMap, setIsShowMap] = useState(false);
  const page = searchParams.get("page");
  const size = 12;
  const sigunNm = searchParams.get("sigunNm") || "";

  const test = spotData[0];

  // 지역검색
  const handleSearch = value => {
    setSearchParams({ page: 1, sigunNm: value });
  };
  // 페이지네이션
  const handlePageChange = page => {
    setSearchParams({ page, sigunNm });
  };

  // 정보 가져오기
  useEffect(() => {
    getHospital({
      page,
      size,
      sigunNm,
      successFn,
      errorFn,
    });
  }, [page, sigunNm]);

  // 정보 가져오기 결과
  const successFn = res => {
    setSpotData(res);
  };
  const errorFn = res => {
    console.log(res);
  };

  // 리스트 클릭 시 지도 노출
  const handleMapInfoClick = index => {
    if (selectedMapIndex === index && isShowMap) {
      setSelectedMapIndex(null);
      setIsShowMap(false);
    } else {
      setSelectedMapIndex(index);
      setIsShowMap(true);
    }
  };
  console.log(spotData);
  console.log(isShow);
  console.log(selectedMapIndex);

  return (
    <HospitalWrap>
      <TitleWrap>
        <PageTitle>어린이 예방접종 지정의료기관</PageTitle>
      </TitleWrap>
      <TitleDesc>
        <p>
          경기도 내의 지역명을 검색하여, <br />
          질병관리본부에서 제공하는
          <b> 어린이 국가 예방접종지정 의료기관 현황</b>을 알아보세요. <br />
          <small>목록을 클릭하면 지도로 위치를 확인할 수 있습니다.</small>
        </p>
        <Search
          placeholder="지역명을 입력해주세요. 예) 의정부시"
          allowClear
          defaultValue={sigunNm}
          onSearch={value => {
            handleSearch(value);
          }}
          size={"large"}
        />
      </TitleDesc>
      <HospitalList>
        <HospitalTitle>
          <ul>
            <li className="sigunNm mo">도시</li>
            <li className="facltNm">기관이름</li>
            <li className="address">상세주소</li>
            <li className="telNo">전화번호</li>
          </ul>
        </HospitalTitle>
        {Array.isArray(spotData) &&
          spotData.map((item, index) => (
            <HospitalItem key={index}>
              <HospitalInfo onClick={() => handleMapInfoClick(index)}>
                <ul
                  className={
                    selectedMapIndex === index && isShowMap ? "active" : ""
                  }
                >
                  <li className="sigunNm mo">{item.sigunNm}</li>
                  <li className="facltNm">{item.facltNm}</li>
                  <li className="address">{item.refineLotNoAddr}</li>
                  <li className="telNo">
                    <Link to={`tel:${item.telNo}`}>{item.telNo}</Link>
                  </li>
                </ul>
              </HospitalInfo>
              {selectedMapIndex === index && isShowMap && (
                <HospitalMap>
                  <Map
                    center={{
                      lat: test.refineWgs84Lat,
                      lng: test.refineWgs84Logt,
                    }}
                    level={4}
                    className="kakao-map"
                  >
                    <MapMarker
                      position={{
                        lat: test.refineWgs84Lat,
                        lng: test.refineWgs84Logt,
                      }}
                      clickable={true}
                      onClick={() => {
                        window.open(
                          `https://map.kakao.com/link/map/${test.facltNm},${test.refineWgs84Lat},${test.refineWgs84Logt}`,
                        );
                      }}
                    />
                  </Map>
                </HospitalMap>
              )}
            </HospitalItem>
          ))}
      </HospitalList>
      <PageNum>
        <Pagination
          defaultCurrent={page}
          total={50}
          pageSize={size}
          onChange={handlePageChange}
        />
      </PageNum>
    </HospitalWrap>
  );
};

export default Hospital;
