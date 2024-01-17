import React, { useState } from "react";
import { Button, Flex, Input, List, Pagination } from "antd";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NoticeDetails from "./NoticeDetails"; // NoticeDetails 컴포넌트 import
import ContentLayout from "../../layouts/common/ContentLayout";
import { PageTitle } from "../../styles/basic";

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

const pageSize = 10; // 페이지당 아이템 개수

const NoticeList = () => {
  const [current, setCurrent] = useState(1);

  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };

  const size = "small";

  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <ContentLayout>
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
          {/* <div style={{ fontSize: 36, color: "#008666" }}>
            <img
              src="/images/common/titleIcon.svg"
              alt=""
              style={{ height: 50, marginRight: 10 }}
            />
            유치원 소식
          </div> */}
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
            <Button
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
            </Button>
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
                  borderBottom: "1px solid #e8e8e8", // 라인 추가
                  padding: "12px 0",
                  background: index < 3 ? "#E7F6ED" : "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    marginLeft: 20,
                    color: index < 3 ? "#00876D" : "#000000",
                    fontWeight: index < 3 ? "bold" : "normal",
                  }}
                >
                  {item}
                </span>
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

        <Routes>
          <Route path="/gallery/:id" element={<NoticeDetails />} />
        </Routes>
      </div>
    </ContentLayout>
  );
};

export default NoticeList;
