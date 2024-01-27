import axios from "axios";
import { SERVER_URL } from "../config";
import jwtAxios from "../../util/jwtUtil";
const path = `${SERVER_URL}/api/teacher`;

// 학부모 관리 리스트 GET
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

// 원생 관리 리스트 GET
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
// 학부모 정보 수정 GET

// 학부모 정보 수정 PUT
export const editParentInfo = async ({
  parentInfo,
  successEditFn,
  failEditFn,
  errorEditFn,
}) => {
  try {
    const res = await jwtAxios.put(`${path}`, parentInfo);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      // 화면 처리용
      successEditFn(res.data);
      // RTK 업데이트 하기위해서는 리턴을 해서 값을 전달해야 해
      return res.data;
    } else {
      failEditFn("정보수정에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorEditFn(
      "정보수정에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.",
    );
  }
};

// 원생 등록 POST
export const postStudentCreate = async ({ successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post();
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
    } else {
      failFn();
    }
  } catch (error) {
    errorFn();
  }
};
