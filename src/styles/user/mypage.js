import styled from "@emotion/styled";
import { boxStyle, colors, fonts, shadow } from "../basic";

export const MypageWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30rem;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

// table 스타일
export const TableWrap = styled.div`
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
    > span {
      color: ${colors.grayDeep};
    }
  }
  tbody tr:last-of-type th,
  tbody tr:last-of-type td {
    border-bottom: 0;
  }
`;

// 페이지 타이틀 영역
export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// 마이페이지 내용
export const MyContentWrap = styled.div`
  position: relative;
`;

// 원생 프로필
export const ProfileWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 6rem;
  margin-bottom: 3rem;
  background: ${colors.white};
  ${shadow}
  border-radius: 1rem;
  overflow: hidden;
`;

export const ProfileImg = styled.div`
  width: 25%;
  margin-right: 5%;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
    max-width: 20rem;
    border-radius: 50%;
  }
`;
export const ProfileInfo = styled.div`
  position: relative;
  width: 70%;
  dl {
    display: flex;
    font-size: 1.6rem;
    font-weight: 300;
    dt {
      color: ${colors.grayDeep};
      margin-right: 3rem;
    }
  }
`;
export const MyClassWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  border-color: ${props =>
    props.state === 1
      ? "#ff73a1"
      : props.state === 2
      ? colors.orangeDeep
      : props.state === 3
      ? "#f5062c"
      : props.state === -1
      ? colors.grayDeep
      : props.state === -2
      ? colors.black
      : colors.grayLight};
`;
export const IdentCodeWrap = styled.div`
  display: flex;
  align-items: center;
  dl {
    margin-right: 2rem;
  }
`;
export const MyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  dl {
    margin-right: 10rem;
    margin-top: 2rem;
  }
`;
export const AdminMemo = styled.dl`
  padding: 2rem 3rem;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  ${boxStyle}
  dt {
    color: ${colors.grayDeep};
    margin-bottom: 1rem;
  }
`;

// 연결계정
export const AccountInfo = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

// 상세정보
export const DetailInfo = styled.div``;

// 상세정보 - 신체정보
export const DetailPhysical = styled.div``;

// 상세정보 - 칭찬뱃지
export const DetailBadge = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`;
export const BadgeItem = styled.div`
  width: 24%;
  text-align: center;
  padding: 3rem;
  font-size: 1.5rem;
  ${boxStyle}
  img {
    max-width: 100%;
  }
  h3 {
    margin: 1rem 0;
  }
`;
