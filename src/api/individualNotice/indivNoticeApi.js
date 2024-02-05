import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/notice`;

export const getIndParentList = async ({
  page,
  year,
  ikid,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}?page=${page}&ikid=${ikid}&year=${year}`,
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
export const getIndTeacherList = async ({
  page,
  year,
  iclass,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}?page=${page}&iclass=${iclass}&year=${year}`,
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

// 알림장 게시글 삭제하기
export const deleteNotice = async ({ ikid, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.delete(`${path}?iteacher=1&ifullNotice=${ikid}`);
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
