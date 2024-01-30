import { Flex, Input, List, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // useNavigate 추가
import { getList } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const pageSize = 10;

const NoticeList = () => {
  const [current, setCurrent] = useState(1);
  const [listData, setListData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

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

  const successFn = result => {
    console.log("성공", result);
    setListData(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  console.log("확인", listData);

  return (
    <div style={{ marginTop: 60 }}>
      <Flex
        gap="small"
        justify="space-between"
        style={{
          width: "100%",
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <PageTitle>유치원소식</PageTitle>
        <Flex gap="small" alignitems="center">
          <Search
            placeholder="제목을 입력하세요."
            allowClear
            onSearch={onSearch}
            style={{
              width: 330,
              marginRight: 20,
            }}
          />
          <Link to="/notice/write/">
            <GreenBtn
              type="primary"
              size={size}
              style={{
                background: "#D3ECC8",
                borderColor: "#D3ECC8",
                padding: "15px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1rem",
                color: "#00876D",
              }}
            >
              글쓰기
            </GreenBtn>
          </Link>
        </Flex>
      </Flex>

      <List
        size="large"
        itemLayout="vertical"
        style={{
          width: "100%",
          margin: "0 auto",
          background: "white",
          borderTop: "1px solid #00876D",
          borderBottom: "1px solid #00876D",
        }}
        dataSource={listData}
        renderItem={(item, index) => (
          <Link
            to={`/notice/details/${item.ifullNotice}`}
            key={item.ifullNotice}
          >
            <List.Item
              style={{
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid #e8e8e8",
                padding: "12px 0",
                background: item.fullNoticeFix === 1 ? "#E7F6ED" : "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Link to={`/notice/details/${item.ifullNotice}`}>
                <span
                  style={{
                    marginLeft: 20,
                    color: item.fullNoticeFix === 1 ? "#00876D" : "#000000",
                    fontWeight: item.fullNoticeFix === 1 ? "bold" : "normal",
                  }}
                >
                  {item.fullTitle}
                </span>
              </Link>
              <div style={{ marginRight: 20, color: "gray" }}>
                <img
                  src="/images/common/notice/clock.svg"
                  alt=""
                  style={{ height: 30, marginRight: 10 }}
                />
                {item.createdAt}
              </div>
            </List.Item>
          </Link>
        )}
      ></List>

      <Pagination
        current={current}
        onChange={onChange}
        total={totalCount}
        pageSize={pageSize}
        style={{
          marginTop: 35,
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default NoticeList;
