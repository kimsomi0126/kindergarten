import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

export const path = `${SERVER_URL}/api/full`;

// 유치원소식 불러오기
export const getDetail = async ({ tno, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}?iFullNotice=${tno}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("자료 호출 에러입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 유치원소식 불러오기
export const getList = async ({ page, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}/listall?page=${page}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("자료 호출 에러입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
