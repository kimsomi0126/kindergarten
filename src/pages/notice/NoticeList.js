import React, { useState } from "react";
import { Button, Flex, Input, List, Pagination } from "antd";
import { Link, Outlet } from "react-router-dom"; // 리액트 라우터의 Link 컴포넌트 import
import ContentLayout from "../../layouts/ContentLayout";

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

  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <>
      <Outlet />

      <ContentLayout>
        <div style={{ marginTop: 60 }}>
          {/* ... (이전의 코드) */}

          <List
            size="large"
            itemLayout="vertical"
            dataSource={currentPageData}
            renderItem={(item, index) => (
              <Link
                to={`/details/${index}`} // 상세 페이지로 이동하는 Link
                key={index}
              >
                <List.Item
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    padding: "12px 0",
                    background: index < 3 ? "#E7F6ED" : "white",
                    display: "flex",
                    justifyContent: "space-between", // 내용을 좌우로 나누기 위해 추가
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
                      src="/images/information/logo1.svg"
                      alt="유치원 로고"
                      style={{ height: 30, marginRight: 10 }} // 이미지 스타일 조절
                    />
                    2024-01-15
                  </div>
                </List.Item>
              </Link>
            )}
            style={{
              width: "100%",
              margin: "0 auto", // 가로로 가운데 정렬
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
      </ContentLayout>
    </>
  );
};

export default NoticeList;
