import axios from "axios";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/parent`;

// 부모님 로그인
export const postLogin = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "x-www-urlencoded" } };

    const formData = new FormData();
    // formData.append("이름", "값")
    formData.append("uid", loginParam.id);
    formData.append("upw", loginParam.pw);

    const res = await axios.post(`${path}/signin`, formData, header);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.");
  }
};
// 부모님 회원가입 - 식별코드체크
export const getCheckCode = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
// 부모닙 회원가입 - 아이디 중복체크
export const getCheckId = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
// 부모님 회원가입 - 회원가입 정보
export const postParentSigup = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.post();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
