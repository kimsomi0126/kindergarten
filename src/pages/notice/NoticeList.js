import { Flex, Input, List, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // useNavigate 추가
import { getList } from "../../api/notice/notice_api";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const initData = [
  {
    fullTitle: "",
    writer: "",
    fullNoticeFix: 0,
    createdAt: "",
    ifullNotice: 0,
  },
];

const pageSize = 10;

const NoticeList = () => {
  const [current, setCurrent] = useState(1);
  const [listData, setListData] = useState(initData);

  const onChange = page => {
    setCurrent(page);
    updateCurrentPageData(page);
  };

  const size = "small";

  const updateCurrentPageData = page => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // setCurrentPageData(data.slice(startIndex, endIndex));
  };

  useEffect(() => {
    updateCurrentPageData(current);
    const page = 1;
    getList({ page, successFn, failFn, errorFn });
  }, [current]);

  const successFn = result => {
    console.log(result);
    setListData([...result]);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  console.log(listData);

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
        // total={data.length}
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
