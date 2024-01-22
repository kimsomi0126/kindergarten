import styled from "@emotion/styled";
import { colors, fonts, shadow } from "../basic";

export const StudDetailWrap = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const DetailFormTable = styled.div`
  position: relative;
  table {
    border-radius: 1rem;
    overflow: hidden;
    border-spacing: 0px;
    ${shadow}
    background: ${colors.white};
  }
  tbody th {
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
  }
  th {
    padding: 1.5rem;
    background: ${colors.greenLight2};
    color: ${colors.greenDeep};
    border-left: 1px solid ${colors.grayLight};
    font-family: ${fonts.kotraHope};
    font-size: 1.8rem;
    &:first-of-type {
      border-left: 0;
    }
    img {
      width: 3.5rem;
      margin-right: 1rem;
    }
  }
  &.th_left th {
    text-align: left;
  }
  td {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
    &:first-of-type {
      border-left: 0;
    }
    span {
      color: ${colors.grayDeep};
    }
  }
  tbody tr:last-of-type th,
  tbody tr:last-of-type td {
    border-bottom: 0;
  }
`;

export const DetailPhysicalTable = styled.div`
  position: relative;
  table {
    border-radius: 1rem;
    overflow: hidden;
    border-spacing: 0px;
    ${shadow}
    background: ${colors.white};
  }
  tbody th {
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
  }
  th {
    padding: 1.5rem;
    background: ${colors.greenLight2};
    color: ${colors.greenDeep};
    border-left: 1px solid ${colors.grayLight};
    font-family: ${fonts.kotraHope};
    font-size: 1.8rem;
    &:first-of-type {
      border-left: 0;
    }
    img {
      width: 3.5rem;
      margin-right: 1rem;
    }
  }
  &.th_left th {
    text-align: left;
  }
  td {
    text-align: center;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
    &:first-of-type {
      border-left: 0;
    }
    span {
      color: ${colors.grayDeep};
    }
    .ant-form-item-explain-error {
      font-size: 1.2rem;
    }
  }
  tbody tr:last-of-type th,
  tbody tr:last-of-type td {
    border-bottom: 0;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
`;
export const KeywordTable = styled.div`
  position: relative;
  table {
    border-radius: 1rem;
    overflow: hidden;
    border-spacing: 0px;
    ${shadow}
    background: ${colors.white};
  }
  tbody th {
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
  }
  th {
    padding: 1.5rem;
    background: ${colors.greenLight2};
    color: ${colors.greenDeep};
    border-left: 1px solid ${colors.grayLight};
    font-family: ${fonts.kotraHope};
    font-size: 1.8rem;
    &:first-of-type {
      border-left: 0;
    }
    img {
      width: 3.5rem;
      margin-right: 1rem;
    }
  }
  &.th_left th {
    text-align: left;
  }
  td {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    border: 1px solid ${colors.grayLight};
    border-width: 0 0 1px 1px;
    &:first-of-type {
      border-left: 0;
    }
    span {
      color: ${colors.grayDeep};
    }
  }
  tbody tr:last-of-type th,
  tbody tr:last-of-type td {
    border-bottom: 0;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
`;

export const StudDetailsFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
