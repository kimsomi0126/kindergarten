import React from "react";
import { DetailPhysical, TableWrap } from "../../../styles/user/mypage";

const MyPhysicalComponent = ({ myData }) => {
  const res = myData;
  return (
    <DetailPhysical>
      <TableWrap className="th_left">
        <table>
          <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <tbody>
            <tr>
              <th>
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/user/physical_icon01.svg`
                  }
                  alt="측정날짜아이콘"
                />
                측정날짜
              </th>
              <td>2024-03-01</td>
              <td>2024-03-01</td>
              <td>2024-03-01</td>
              <td>
                <span>날짜</span>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/user/physical_icon02.svg`
                  }
                  alt="신장 아이콘"
                />
                신장
              </th>
              <td>100cm</td>
              <td>100cm</td>
              <td>100cm</td>
              <td>
                <span>신장</span>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/user/physical_icon03.svg`
                  }
                  alt="몸무게 아이콘"
                />
                몸무게
              </th>
              <td>20kg</td>
              <td>20kg</td>
              <td>20kg</td>
              <td>
                <span>몸무게</span>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </DetailPhysical>
  );
};

export default MyPhysicalComponent;
