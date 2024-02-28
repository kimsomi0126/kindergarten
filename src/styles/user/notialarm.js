import styled from "@emotion/styled";
import { boxStyle, colors } from "../basic";

export const NotiWrap = styled.div`
  position: relative;
`;

export const NotiIcon = styled.div`
  position: relative;
  width: 3rem;
  margin-right: -0.5rem;
  cursor: pointer;
  img {
    width: 100%;
  }

  :after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0.7rem;
    height: 0.7rem;
    background: ${colors.orangeDeep};
    border-radius: 50%;
    display: ${props => (props.state ? "block" : "none")};
  }
`;
