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
    const res = await jwtAxios.get(`${path}/listall?page=1`);
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

export const getTitlesFromExternalAPI = async () => {
  try {
    const res = await jwtAxios.get(`${path}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // API가 제목의 배열을 반환한다고 가정하고, 실제 API 응답 구조에 따라 수정하세요.
      return res.data.map(item => item.fullTitle);
    } else {
      console.error("외부 API에서 제목을 가져오는 데 실패했습니다.");
      return [];
    }
  } catch (error) {
    console.error(
      "외부 API에서 제목을 가져오는 동안 오류가 발생했습니다:",
      error,
    );
    return [];
  }
};
