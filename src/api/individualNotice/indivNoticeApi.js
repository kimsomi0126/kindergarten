import jwtAxios from "../../util/jwtUtil";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api`;

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
      `${path}/notice?page=${page}&ikid=${ikid}&year=${year}`,
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
      `${path}/notice?page=${page}&iclass=${iclass}&year=${year}`,
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
