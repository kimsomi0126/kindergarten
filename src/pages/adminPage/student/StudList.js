import React, { useState } from "react";
import { Form, Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import {
  StudentTop,
  StudentTopRight,
} from "../../../styles/adminstyle/studentlist";
import { PageTitle } from "../../../styles/basic";
import { BlueBtn, OrangeBtn, PurpleBtn } from "../../../styles/ui/buttons";
import StudListComponent from "../../../components/adminpage/StudListComponent";
import ModalTwoBtn from "../../../components/ui/ModalTwoBtn";

const handleChange = value => {
  console.log(value);
};

const StudList = ({ isOpen, handleOk, handleCancel }) => {
  // 모달창 적용
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StudentTop>
        <PageTitle>원생 관리</PageTitle>
        <StudentTopRight>
          <Select
            labelInValue
            defaultValue={{
              value: "",
              label: "반 선택",
            }}
            style={{
              width: 100,
            }}
            onChange={handleChange}
            options={[
              {
                value: "1",
                label: "무궁화반",
              },
              {
                value: "2",
                label: "해바라기반",
              },
              {
                value: "3",
                label: "장미반",
              },
              {
                value: "-1",
                label: "졸업",
              },
              {
                value: "-2",
                label: "퇴소",
              },
            ]}
          />
          <Search
            placeholder="검색어를 입력하세요."
            style={{
              width: 200,
            }}
            allowClear
          />
          <BlueBtn onClick={handleClick}>선택 반 변경</BlueBtn>
          {isModalOpen && (
            <ModalTwoBtn
              isOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={onCancel}
              title="반 일괄수정"
              subTitle="반 이름을 선택해주세요."
            >
              <Form>
                <Form.Item>
                  <Select placeholder="반 선택" onChange={e => handleChange(e)}>
                    <Select.Option value="1">무궁화반</Select.Option>
                    <Select.Option value="2">해바라기반</Select.Option>
                    <Select.Option value="3">장미반</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </ModalTwoBtn>
          )}

          <PurpleBtn>선택졸업</PurpleBtn>
          <OrangeBtn>선택퇴소</OrangeBtn>
        </StudentTopRight>
      </StudentTop>
      <StudListComponent />
    </>
  );
};

export default StudList;
