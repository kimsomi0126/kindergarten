import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

export const path = `${SERVER_URL}/api/full`;

// 유치원소식 불러오기
export const getDetail = async ({ tno, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}?iFullNotice=${tno}`);
    const header = { headers: { "Content-Type": "multipart/form-data" } };
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

// 유치원소식 리스트 불러오기
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

// 유치원소식 게시글 등록하기
export const createNotice = async ({
  postData,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.post(`${path}`, postData);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successFn(res.data); // 등록 성공 시, 서버 응답 데이터를 successFn으로 전달
    } else {
      failFn("등록 에러입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 유치원소식 게시글 삭제하기
export const deleteNotice = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.delete(`${path}`);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successFn();
    } else {
      failFn("삭제 에러입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 유치원소식 게시글 수정하기
export const putNotice = async ({ data, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.put(`${path}`, data, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("수정 에러입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
