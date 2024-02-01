import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import {
  PageNum,
  UserTop,
  UserTopRight,
} from "../../styles/adminstyle/guardianlist";
import { PageTitle } from "../../styles/basic";
import { GreenBtn } from "../../styles/ui/buttons";
import GuardianListComponent from "../../components/adminpage/GuardianListComponent";
import ModalTwoBtn from "../../components/ui/ModalTwoBtn";

const handleClassChange = value => {
  console.log(value);
};

const GuardianList = handleOk => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const onDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const [checkedItems, setCheckedItems] = useState([]);
  const oncheckedClick = item => {
    setCheckedItems(item);
  };
  console.log(checkedItems);

  return (
    <>
      <UserTop>
        <PageTitle>학부모 관리</PageTitle>
        <UserTopRight>
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
          <GreenBtn onClick={handleDeleteClick}>선택회원삭제</GreenBtn>
          {isDeleteModalOpen && (
            <ModalTwoBtn
              isOpen={isDeleteModalOpen}
              handleOk={handleOk}
              handleCancel={onDeleteCancel}
              title="정말 삭제할까요?"
              subTitle="삭제된 내용은 복구할 수 없습니다."
            ></ModalTwoBtn>
          )}
        </UserTopRight>
      </UserTop>
      <GuardianListComponent
        oncheckedClick={oncheckedClick}
        checkedItems={checkedItems}
      />
    </>
  );
};

export default GuardianList;
