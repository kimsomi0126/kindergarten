import styled from "@emotion/styled";
import { colors, shadow } from "../basic";

export const UserTop = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const UserTopRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserMain = styled.div``;

export const UserListWrap = styled.ul`
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
  input {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  span {
    color: ${colors.greenDeep};
    font-size: 2rem;
  }
  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }
`;
export const UserInfo = styled.div`
  display: flex;
`;
