import React from "react";
import ContentLayout from "../../../layouts/common/ContentLayout";
import { PageTitle } from "../../../styles/basic";
import { DatePicker, Form, Input, Select } from "antd";

const StudentCreate = () => {
  return (
    <ContentLayout>
      <PageTitle>원생등록</PageTitle>
      <div>
        <p>기본정보</p>
        <div>
          <Form.Item>
            <Input
              placeholder="이름"
              style={{
                width: 200,
              }}
            />
          </Form.Item>
          <Form.Item>
            <DatePicker placeholder="생년월일" />
          </Form.Item>
          <Form.Item>
            <Select
              labelInValue
              defaultValue={{
                value: "",
                label: "성별 선택",
              }}
              style={{
                width: 100,
              }}
            >
              <Select.Option value="1">남자</Select.Option>
              <Select.Option value="0">여자</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <div>
        <p>재원정보</p>
        <Form.Item>
          <DatePicker placeholder="입학날짜" />
        </Form.Item>
      </div>
    </ContentLayout>
  );
};

export default StudentCreate;
