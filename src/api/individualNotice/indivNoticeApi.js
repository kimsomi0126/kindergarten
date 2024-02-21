import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/notice`;

// 알림장 리스트(학부모)
export const getIndParentList = async ({
  page,
  year,
  ikid,
  fromTo,
  search,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}?page=${page}&ikid=${ikid}&year=${year}&fromTo=${fromTo}`,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    const res = error.response.data;
    errorFn(res.message);
  }
};
// 알림장 리스트(선생님)
export const getIndTeacherList = async ({
  page,
  year,
  iclass,
  fromTo,
  search,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}?page=${page}&iclass=${iclass}&year=${year}&fromTo=${fromTo}`,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    const res = error.response.data;
    errorFn(res.message);
  }
};

// 알림장 게시글 등록하기
export const postIndNotice = async ({
  product,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post(`${path}/tea`, product, header);
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

// 댓글 등록하기
export const postComment = async ({ product, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post(`${path}/comment`, product, header);
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

// 댓글 삭제하기
export const deleteComment = async ({
  inoticeComment,
  iteacher,
  iparent,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    // header 가 필요합니다.
    const res = await jwtAxios.delete(
      `${path}/comment/?$inoticeComment={inoticeComment}&iteacher=${iteacher}iparent={iparent}`,
    );

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn();
    }
  } catch (error) {
    errorFn(error);
  }
};

// 알림장 게시글 삭제하기
export const deleteIndDetail = async ({
  tno,
  successDelFn,
  failDelFn,
  errorDelFn,
}) => {
  try {
    const res = await jwtAxios.delete(`${path}?inotice=${tno}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successDelFn(res.data);
    } else {
      failDelFn(res.data);
    }
  } catch (error) {
    const res = error.response.data;
    errorDelFn(res.message);
  }
};

// 알림장 상세
export const getIndDetail = async ({ tno, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}/detail?inotice=${tno}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    const res = error.response.data;
    errorFn(res.message);
  }
};
