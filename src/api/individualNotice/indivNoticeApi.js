import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api`;

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
      `${path}/notice?page=${page}&ikid=${ikid}&year=${year}`,
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
