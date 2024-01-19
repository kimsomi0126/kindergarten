import { Button, Flex, Input, List, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom"; // useNavigate 추가
import { PageTitle } from "../../styles/basic";
import NoticeDetails from "./NoticeDetails";
import NoticeModify from "./NoticeModify"; // NoticeModify 컴포넌트 import
import { GreenBtn } from "../../styles/ui/buttons";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const data = [
  "상단 공지 제목",
  "상단 공지 제목",
  "상단 공지 제목",
  "하이",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "상단 공지 제목",
  "상단 공지 제목",
  "상단 공지 제목",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "헬로.",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "상단 공지 제목",
  "상단 공지 제목",
  "상단 공지 제목",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "안녕",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "상단 공지 제목",
  "상단 공지 제목",
  "상단 공지 제목",
  "제목입니다.",
  "제목입니다.",
  "반갑습니다",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
  "제목입니다.",
];

const pageSize = 10;

const NoticeList = () => {
  const [current, setCurrent] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const navigate = useNavigate(); // useNavigate 추가

  const onChange = page => {
    setCurrent(page);
    updateCurrentPageData(page);
  };

  const size = "small";

  const updateCurrentPageData = page => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentPageData(data.slice(startIndex, endIndex));
  };

  useEffect(() => {
    updateCurrentPageData(current);
  }, [current]);

  const handleWriteClick = () => {
    navigate("/notice/modify"); // 글쓰기 버튼 클릭 시 NoticeModify 페이지로 이동
  };

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
        <Flex gap="small" alignItems="center">
          <Search
            placeholder="제목을 입력하세요."
            allowClear
            onSearch={onSearch}
            style={{
              width: 330,
              marginRight: 20,
            }}
          />
          <Link to={`/notice/write`}>
            <GreenBtn>글쓰기</GreenBtn>
          </Link>
        </Flex>
      </Flex>

      <List
        size="large"
        itemLayout="vertical"
        dataSource={currentPageData}
        renderItem={(item, index) => (
          <Link to={`/notice/details/${index}`}>
            <List.Item
              style={{
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid #e8e8e8",
                padding: "12px 0",
                background: index < 3 ? "#E7F6ED" : "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Link to={`/notice/details/${index}`}>
                <span
                  style={{
                    marginLeft: 20,
                    color: index < 3 ? "#00876D" : "#000000",
                    fontWeight: index < 3 ? "bold" : "normal",
                  }}
                >
                  {item}
                </span>
              </Link>
              <div style={{ marginRight: 20, color: "gray" }}>
                <img
                  src="/images/common/notice/clock.svg"
                  alt=""
                  style={{ height: 30, marginRight: 10 }}
                />
                2024-01-15
              </div>
            </List.Item>
          </Link>
        )}
        style={{
          width: "100%",
          margin: "0 auto",
          background: "white",
          borderTop: "1px solid #00876D",
          borderBottom: "1px solid #00876D",
        }}
      />

      <Pagination
        current={current}
        onChange={onChange}
        total={data.length}
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
