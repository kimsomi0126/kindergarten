import React from "react";
import { GrayBtn } from "../../../styles/ui/buttons";
import { AccountInfo, TableWrap, TitleWrap } from "../../../styles/user/mypage";
import { PageTitle } from "../../../styles/basic";
import { deleteAccount } from "../../../api/adminPage/admin_api";

const MyAccountComponent = ({ myData, iparent, ikid }) => {
  const my = myData;
  const handleClickDelete = () => {
    deleteAccount({
      successDeleteFn,
      failDeleteFn,
      errorDeleteFn,
      iparent,
      ikid,
    });
  };
  const successDeleteFn = result => {
    console.log(result);
  };
  const failDeleteFn = result => {
    console.log(result);
  };
  const errorDeleteFn = result => {
    console.log(result);
  };

  return (
    <AccountInfo>
      <TitleWrap>
        <PageTitle>연결계정</PageTitle>
      </TitleWrap>
      <TableWrap className="TableWrap">
        <table>
          <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th>아이디 </th>
              <th>이름</th>
              <th>연락처</th>
              <th>관계</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {my.parents.map((parent, index) => (
              <tr key={index}>
                <td>{parent ? parent.uid : ""}</td>
                <td>{parent ? parent.parentNm : ""}</td>
                <td>{parent ? parent.phoneNb : ""}</td>
                <td>
                  {parent
                    ? (() => {
                        const irelation = parent.irelation;
                        switch (irelation) {
                          case 1:
                            return "부";
                          case 2:
                            return "모";
                          case 3:
                            return "조부";
                          case 4:
                            return "조모";
                          case 5:
                            return "형제/자매";
                          default:
                            return "그 외";
                        }
                      })()
                    : ""}
                </td>
                <td>
                  <GrayBtn onClick={handleClickDelete}>연결삭제</GrayBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </AccountInfo>
  );
};

export default MyAccountComponent;
