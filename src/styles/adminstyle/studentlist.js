import styled from "@emotion/styled";
import { colors, fonts, shadow } from "../basic";

export const StudentTop = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const StudentTopRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const StudentMain = styled.div`
  position: relative;
  margin-top: 1rem;
  input {
    margin-right: 0.5rem;
  }
`;

export const StudentListWrap = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 1rem;
`;
export const StudentListItem = styled.li`
  position: relative;
  border-radius: 1rem;
  border-color: #ebebeb;
  width: 32%;
  background: ${colors.white};
  padding: 2rem;
  ${shadow}
  cursor: pointer;
  input {
    z-index: 999;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
`;
export const StudentListBox = styled.div`
  display: flex;
`;
export const StudentImg = styled.div`
  width: 8rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    margin-right: 1rem;
  }
`;
export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  p {
    padding-left: 3rem;
  }
  .sunflower {
    background: url(${process.env.PUBLIC_URL +
      "/images/information/sunflower.svg"})
      no-repeat left 0.25rem/2.3rem;
    font-family: ${fonts.kotraHope};
    font-size: 2rem;
    color: ${colors.orangeDeep};
  }
  .rose {
    background: url(${process.env.PUBLIC_URL + "/images/information/rose.svg"})
      no-repeat left 0.25rem/2.3rem;
    font-family: ${fonts.kotraHope};
    font-size: 2rem;
    color: ${colors.orangeDeep};
  }
  .hibiscus {
    background: url(${process.env.PUBLIC_URL +
      "/images/information/hibiscus.svg"})
      no-repeat left 0.25rem/2.3rem;
    font-family: ${fonts.kotraHope};
    font-size: 2rem;
    color: ${colors.orangeDeep};
  }
  .leaf {
    background: url(${process.env.PUBLIC_URL + "/images/information/logo1.svg"})
      no-repeat left 0.25rem/2.3rem;
    font-family: ${fonts.kotraHope};
    font-size: 2rem;
    color: ${colors.black};
  }
`;
