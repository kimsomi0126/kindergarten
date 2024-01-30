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

const StudList = ({ handleOk }) => {
  // 반 별 셀렉트
  const [selectedClass, setSelectedClass] = useState("");
  const handleClassChange = item => {
    console.log(item.iclass);
    setSelectedClass(item.iclass);
  };
  // 반 변경 모달창
  const [UpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const handleUpgradeClick = () => {
    setUpgradeModalOpen(true);
  };
  const onUpgradeCancel = () => {
    setUpgradeModalOpen(false);
  };
  // 졸업 모달창
  const [GraduateModalOpen, SetGraduateModalOpen] = useState(false);
  const handleGraduateClick = () => {
    SetGraduateModalOpen(true);
  };
  const onGraduateCancel = () => {
    SetGraduateModalOpen(false);
  };
  // 퇴소 모달창
  const [OutModalOpen, SetOutModalOpen] = useState(false);
  const handleOutClick = () => {
    SetOutModalOpen(true);
  };
  const onOutCancel = () => {
    SetOutModalOpen(false);
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
            onChange={handleClassChange}
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
          <BlueBtn onClick={handleUpgradeClick}>선택 반 변경</BlueBtn>
          {UpgradeModalOpen && (
            <ModalTwoBtn
              isOpen={UpgradeModalOpen}
              handleOk={handleOk}
              handleCancel={onUpgradeCancel}
              title="반 일괄수정"
              subTitle="반 이름을 선택해주세요."
            >
              <Form>
                <Form.Item>
                  <Select
                    placeholder="반 선택"
                    onChange={e => handleClassChange(e)}
                  >
                    <Select.Option value="1">무궁화반</Select.Option>
                    <Select.Option value="2">해바라기반</Select.Option>
                    <Select.Option value="3">장미반</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </ModalTwoBtn>
          )}

          <PurpleBtn onClick={handleGraduateClick}>선택졸업</PurpleBtn>
          {GraduateModalOpen && (
            <ModalTwoBtn
              isOpen={GraduateModalOpen}
              handleOk={handleOk}
              handleCancel={onGraduateCancel}
              title="정말 변경할까요?"
              subTitle="확인하면 원생의 재원 상태가 변경됩니다."
            ></ModalTwoBtn>
          )}
          <OrangeBtn onClick={handleOutClick}>선택퇴소</OrangeBtn>
          {OutModalOpen && (
            <ModalTwoBtn
              isOpen={OutModalOpen}
              handleOk={handleOk}
              handleCancel={onOutCancel}
              title="정말 변경할까요?"
              subTitle="확인하면 원생의 재원 상태가 변경됩니다."
            ></ModalTwoBtn>
          )}
        </StudentTopRight>
      </StudentTop>
      <StudListComponent selectedClass={selectedClass} />
    </>
  );
};

export default StudList;
