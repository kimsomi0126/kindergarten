import styled from "@emotion/styled";
import { colors, shadow } from "../basic";

export const MypageWrap = styled.div`
  position: relative;
  width: 100%;
`;

// export const IptWrap = styled.div`
//   position: relative;
// `;

export const PageTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TableWrap = styled.div`
  position: relative;
  table {
    border-radius: 1rem;
    overflow: hidden;
    border-spacing: 0px;
    ${shadow}
    background: ${colors.white};
  }
  th {
    padding: 1.5rem 0;
    background: ${colors.greenLight2};
    color: ${colors.greenDeep};
    border-left: 1px solid ${colors.grayLight};
    &:first-child {
      border-left: 0;
    }
  }
  td {
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem 0;
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
    &:first-child {
      border-left: 0;
    }
  }
  tbody tr:last-child td {
    border-bottom: 0;
  }
`;
