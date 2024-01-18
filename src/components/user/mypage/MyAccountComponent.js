import React from "react";
import { GrayBtn } from "../../../styles/ui/buttons";
import { AccountInfo, TableWrap, TitleWrap } from "../../../styles/user/mypage";
import { PageTitle } from "../../../styles/basic";

const MyAccountComponent = () => {
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
            <tr>
              <td>bong11</td>
              <td>봉미선</td>
              <td>01000000000</td>
              <td>부</td>
              <td>
                <GrayBtn>연결삭제</GrayBtn>
              </td>
            </tr>
            <tr>
              <td>bong11</td>
              <td>봉미선</td>
              <td>01000000000</td>
              <td>부</td>
              <td>
                <GrayBtn>연결삭제</GrayBtn>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </AccountInfo>
  );
};

export default MyAccountComponent;
