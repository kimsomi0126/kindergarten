import { Flex, Input, List, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"; // useNavigate 추가
import { getList } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";
import useCustomLogin from "../../hooks/useCustomLogin";
import { AlbumTopBar, SearchBar } from "../../styles/album/album";
import { PageNum, UserTopRight } from "../../styles/adminstyle/guardianlist";
import {
  ListWrap,
  NoticeDate,
  NoticeIcon,
  NoticeItem,
  NoticeTitle,
  NoticeWrap,
} from "../../styles/notice/notice";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const pageSize = 10;

const NoticeList = () => {
  const navigate = useNavigate();
  // 고정 공지글과 일반 공지글을 분리하여 저장
  const [fixedNotices, setFixedNotices] = useState([]);
  const [normalNotices, setNormalNotices] = useState([]);
  const [current, setCurrent] = useState(1);
  const [listData, setListData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  // 선생님 로그인 체크
  const { isLogin } = useCustomLogin();

  // 페이지 변경 처리
  const onChange = page => {
    setCurrent(page);
    fetchPageData(page); // 새 페이지 데이터를 가져옵니다.
  };

  const size = "small";

  // 페이지 데이터 가져오기
  const fetchPageData = page => {
    getList({
      page,
      successFn: result => {
        setListData(result.list); // 현재 페이지의 리스트 데이터 설정
        setTotalCount(result.noticeCnt); // 전체 공지사항 개수 설정
        // 고정 공지글과 일반 공지글 분리
        const fixed = result.list.filter(item => item.fullNoticeFix === 1);
        const normal = result.list.filter(item => item.fullNoticeFix !== 1);
        setFixedNotices(fixed);
        setNormalNotices(normal);
      },
      failFn: result => {
        console.error("List fetch failed:", result);
      },
      errorFn: result => {
        console.error("Error fetching list:", result);
      },
    });
  };

  // 컴포넌트가 마운트될 때 첫 페이지 데이터를 가져옵니다.
  useEffect(() => {
    fetchPageData(current);
  }, [current]);

  return (
    <NoticeWrap>
      {/* 메인 콘텐츠 상단 바 컴포넌트 */}
      <AlbumTopBar>
        <PageTitle>유치원 소식</PageTitle>
        <SearchBar>
          <UserTopRight>
            <Search
              placeholder="제목을 입력하세요."
              size={"large"}
              allowClear
              // onSearch={value => console.log(value)}
            />
            {isLogin ? (
              <GreenBtn onClick={e => navigate("write")}>글쓰기</GreenBtn>
            ) : null}
          </UserTopRight>
        </SearchBar>
      </AlbumTopBar>

      <ListWrap
        size="large"
        itemLayout="vertical"
        dataSource={listData}
        renderItem={(item, index) => (
          <List.Item>
            <NoticeItem
              to={`/notice/details/${item.ifullNotice}`}
              key={item.ifullNotice}
              className={item.fullNoticeFix === 1 ? "notice" : ""}
            >
              <NoticeIcon>
                {item.fullNoticeFix === 1 ? (
                  <img
                    src="/images/common/notice/loudSpeaker.svg"
                    alt="고정글"
                  />
                ) : (
                  <span>{item.ifullNotice}</span>
                )}
              </NoticeIcon>
              <NoticeTitle>{item.fullTitle}</NoticeTitle>
              <NoticeDate>
                <img src="/images/common/notice/clock.svg" alt="시계아이콘" />
                {item.createdAt.substring(0, 10)}
              </NoticeDate>
            </NoticeItem>
          </List.Item>
        )}
      />
      <PageNum>
        <Pagination
          current={current}
          onChange={onChange}
          total={totalCount}
          pageSize={pageSize}
        />
      </PageNum>
    </NoticeWrap>
  );
};

export default NoticeList;
