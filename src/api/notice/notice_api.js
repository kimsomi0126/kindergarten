import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/full`;

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
export const postNotice = async ({ product, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post(`${path}`, product, header);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("글 등록 오류");
    }
  } catch (error) {
    const res = error.response.data;
    errorFn(res.message);
  }
};

// 유치원소식 게시글 삭제하기
export const deleteNotice = async ({ tno, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.delete(`${path}?iteacher=1&ifullNotice=${tno}`);
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
export const putNotice = async ({ data, tno, successFn, failFn, errorFn }) => {
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
