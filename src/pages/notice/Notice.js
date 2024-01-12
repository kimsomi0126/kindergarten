import { Button, Flex, Input, List, Pagination } from "antd";
import React, { useState } from "react";

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

const App = () => {
  const [current, setCurrent] = useState(1);
  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };

  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = data.slice(startIndex, endIndex);
  const size = "small";

  return (
    <div style={{ marginTop: 60 }}>
      <Flex
        gap="small"
        justify="space-between"
        style={{
          width: "100%",
          marginBottom: 35,
          alignItems: "center", // 이미지와 텍스트 수직 중앙 정렬을 위한 스타일
        }}
      >
        <div style={{ fontSize: 36 }}>
          {}
          <img
            src="경로/이미지.jpg"
            alt="유치원 로고"
            style={{ height: 50, marginRight: 10 }} // 이미지 스타일 조절
          />
          유치원 소식
        </div>
        <div>
          <Search
            placeholder="검색어를 입력하세요."
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
            style={{ background: "gray", borderColor: "gray" }}
          >
            글쓰기
          </Button>
        </div>
      </Flex>

      <List
        size="large"
        itemLayout="vertical"
        dataSource={currentPageData}
        renderItem={(item, index) => (
          <List.Item
            style={{
              borderLeft: "none",
              borderRight: "none",
              padding: "12px 0",
              background: index < 3 ? "#E7F6ED" : "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginLeft: 20 }}>{item}</span>
            {/* 텍스트에 marginLeft 적용 */}
          </List.Item>
        )}
        style={{
          width: "100%",
          marginTop: 35,
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

export default App;
