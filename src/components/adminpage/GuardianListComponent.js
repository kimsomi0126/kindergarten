import React, { useEffect, useRef, useState } from "react";
import {
  ChildInfo,
  PageNum,
  UserInfo,
  UserListBox,
  UserListItem,
  UserListWrap,
  UserMain,
} from "../../styles/adminstyle/guardianlist";
import { GrayBtn } from "../../styles/ui/buttons";
import { getAdminParentList } from "../../api/adminPage/admin_api";
import AdminParentEdit from "../../pages/adminPage/AdminParentEdit";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import Item from "antd/es/list/Item";

const initParentList = {
  totalCnt: 0,
  parentPage: [
    {
      iparent: 0,
      parentNm: "",
      uid: "",
      phoneNb: "",
      kids: [
        {
          kidNm: "",
          iclass: 0,
        },
      ],
    },
  ],
};

const GuardianListComponent = ({ checkedItems, oncheckedClick }) => {
  const navigate = useNavigate();
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  // const [checkedItems, setCheckedItems] = useState([]);

  // 학부모 리스트 GET
  const [parentList, setParentList] = useState(initParentList);
  const [serchParams, setSearchParams] = useSearchParams();
  const page = serchParams.get("page");
  const iclass = serchParams.get("iclass");

  useEffect(() => {
    getAdminParentList({ successFn, failFn, errorFn, page, iclass });
  }, [page, checkedItems]);

  const successFn = result => {
    setParentList(result);
  };
  const failFn = result => {
    setParentList(result);
  };
  const errorFn = result => {
    setParentList(result);
  };
  // 페이지네이션
  const handleChangePage = page => {
    console.log(page);
    navigate(`/admin?page=${page}&iclass=${iclass}`);
  };

  // 학부모 정보 수정
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editKey, setEditKey] = useState(0);
  const [iparent, setIparent] = useState(0);

  const onAdminParentEditClick = () => {
    setIsEditOpen(true);
    setEditKey(prevKey => prevKey + 1);
  };

  const handleCancel = () => {
    setIsEditOpen(false);
  };

  // 체크박스 전체 선택 시 pk값 수집
  const handleSelectAllChange = e => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name^="iparent"]',
    );
    const updatedCheckedItems = Array.from(checkboxes)
      .filter((checkbox, index) => index !== 0 && (checkbox.checked = checked))
      .map(checkbox => (checked ? parseInt(checkbox.value) : null))
      .filter(value => value !== null);

    // setCheckedItems(updatedCheckedItems);
    oncheckedClick(updatedCheckedItems);
  };

  // 개별 선택 시 pk값 수집
  const handleChangeCheck = e => {
    const value = parseInt(e.target.value);
    if (!e.target.checked) {
      oncheckedClick(prevItems => prevItems.filter(item => item !== value));
    } else {
      oncheckedClick([...checkedItems, value]);
    }
    // oncheckedClick(checkedItems);
  };

  return (
    <>
      <UserMain>
        <div>
          <input
            type="checkbox"
            id="selectAll"
            name="iparent"
            checked={selectAllChecked}
            onChange={handleSelectAllChange}
          />
          <label htmlFor="selectAll">전체 선택</label>
        </div>
        <UserListWrap>
          {Array.isArray(parentList.parentPage) &&
            parentList.parentPage.map(item => (
              <UserListItem key={item.iparent}>
                <UserListBox>
                  <input
                    type="checkbox"
                    name="iparent"
                    value={item.iparent}
                    onChange={e => {
                      handleChangeCheck(e);
                    }}
                  />
                  <UserInfo>
                    <span>{item.uid}</span>
                    <p>{item.parentNm}</p>
                  </UserInfo>
                  <div style={{ display: "flex", gap: 10 }}>
                    {Array.isArray(item.kids) &&
                      item.kids.map((kidsitem, index) => (
                        <div key={`${item.iparent}_${index}`}>
                          <ChildInfo>
                            <p>
                              {kidsitem.iclass === 1
                                ? "무궁화반"
                                : kidsitem.iclass === 2
                                ? "해바라기반"
                                : kidsitem.iclass === 3
                                ? "장미반"
                                : ""}{" "}
                              {kidsitem.kidNm}
                            </p>
                          </ChildInfo>
                        </div>
                      ))}
                  </div>
                  <em>{item.phoneNb}</em>
                  <GrayBtn
                    onClick={() => {
                      setIparent(item.iparent);
                      setIsEditOpen(true);
                      setEditKey(prevKey => prevKey + 1);
                    }}
                  >
                    정보 수정
                  </GrayBtn>
                </UserListBox>
              </UserListItem>
            ))}
        </UserListWrap>
      </UserMain>
      <PageNum>
        <Pagination
          defaultCurrent={page}
          total={parentList.totalCnt}
          onChange={handleChangePage}
        />
      </PageNum>
      {isEditOpen && (
        <AdminParentEdit
          open={isEditOpen}
          handleCancel={handleCancel}
          key={editKey}
          iparent={iparent}
        />
      )}
    </>
  );
};
export default GuardianListComponent;
