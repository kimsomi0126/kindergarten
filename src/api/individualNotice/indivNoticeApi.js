import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/notice`;

export const getIndList = async ({
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
      failFn("서버가 불안정합니다. 다시 시도해주세요.");
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
