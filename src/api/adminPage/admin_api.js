import axios from "axios";
import { SERVER_URL } from "../config";
import jwtAxios from "../../util/jwtUtil";
const path = `${SERVER_URL}/api/teacher`;

export const getAdminParentList = async ({
  successFn,
  failFn,
  errorFn,
  page,
  iclass,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}/parent?page=${page}&iclass=${iclass}`,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("res.data임 : ", res.data);
      successFn(res.data);
    } else {
      failFn("자료 호출 에러입니다.");
    }
  } catch (error) {
    const demo = await axios.get(`/guardian.json`);
    errorFn(demo.data);
    console.log(error);
  }
};

export const getAdminStudentList = async ({
  successFn,
  failFn,
  errorFn,
  page,
  kidCheck,
}) => {
  try {
    const res = await jwtAxios.get(
      `${path}/kid?page=${page}&kidCheck=${kidCheck}`,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("자료 호출 에러입니다.");
    }
  } catch (error) {
    const demo = await axios.get(`/student.json`);
    errorFn(demo.data);
    console.log(error);
  }
};
