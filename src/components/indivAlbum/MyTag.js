import styled from "@emotion/styled";
import React from "react";
import { colors, fonts } from "../../styles/basic";
import { ConfigProvider, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const MyTag = ({ state }) => {
  const list = Array.isArray(state) ? state.map(item => item.kidNm) : [];
  const ClassTitle = styled.div`
    display: flex;
    img {
      padding-right: 0.5rem;
    }
    h4 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 1.4rem;

      font-weight: normal;
    }
    a {
      color: #888;
    }
    .ant-dropdown-trigger-open {
      color: red;
    }
  `;
  const items = [
    {
      key: "1",
      label: list.join(", "),
    },
  ];

  return (
    // 반pk = 1 : 무궁화반,  2 : 해바라기반, 3 : 장미반
    // 재원 상태 구분 = 0 : 재원중, -1 : 졸업, -2 : 퇴소
    <>
      <ClassTitle>
        <img
          src={`${process.env.PUBLIC_URL}/images/user/userTag.svg`}
          alt="Icon"
        ></img>
        <h4>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={e => e.preventDefault()}>
              <Space>
                {list.length >= 2
                  ? `${list[0]} 외 ${list.length - 1}명`
                  : list.join(", ")}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </h4>
      </ClassTitle>
    </>
  );
};

export default MyTag;
