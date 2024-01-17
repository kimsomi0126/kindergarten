import styled from "@emotion/styled";
import { colors, shadow } from "../basic";

export const UserTop = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const UserTopRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const UserMain = styled.div``;

export const UserListWrap = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;
export const UserListItem = styled.li`
  position: relative;
  border-radius: 1rem;
  border-color: #ebebeb;
  width: 32%;
  background: ${colors.white};
  padding: 2rem;
  ${shadow}
`;
export const UserListBox = styled.div`
  margin: auto;
  input {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }
  em {
    font-size: 1.5rem;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  span {
    color: ${colors.greenDeep};
    font-size: 1.5rem;
  }
  p {
    color: ${colors.black};
    font-size: 1.5rem;
  }
`;
export const ChildInfo = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  p {
    color: ${colors.grayDeep};
    font-size: 1.5rem;
  }
`;

export const PageNum = styled.div`
  position: fixed;
  bottom: 8rem;
  left: 40%;
`;
