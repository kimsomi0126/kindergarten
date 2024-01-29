import axios from "axios";
import { SERVER_URL } from "../config";
import jwtAxios from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

// 부모님 로그인
export const postParentLogin = async ({
  loginParam,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "application/json" } };

    const formData = new FormData();
    // formData.append("이름", "값")
    formData.append("uid", loginParam.uid);
    formData.append("upw", loginParam.upw);

    const res = await axios.post(`${path}/parent/signin`, formData, header);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn(res.data);
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. \n 다시 시도해주세요.");
  }
};

// 선생님 로그인
export const postTeacherLogin = async ({
  loginParam,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "application/json" } };

    const formData = new FormData();
    // formData.append("이름", "값")
    formData.append("teacherUid", loginParam.uid);
    formData.append("teacherUpw", loginParam.upw);

    const res = await axios.post(`${path}/teacher/signin`, formData, header);

    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn(res.data);
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. \n 다시 시도해주세요.");
  }
};

// 부모님 회원가입 - 식별코드체크
export const getCheckCode = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
// 부모닙 회원가입 - 아이디 중복체크
export const getCheckId = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
// 부모님 회원가입 - 회원가입 정보
export const postParentSigup = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.post();

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn("서버가 불안정합니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};

// 부모님 - 원생 마이페이지
export const getMypage = async ({ year, ikid, successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}/kid/${year}/${ikid}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn("서버가 불안정합니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};

// 부모님 - 정보가져오기
export const getParentInfo = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(`${path}/parent/edit`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failFn("서버가 불안정합니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};

// 부모님 - 정보수정하기
export const putParentInfo = async ({
  obj,
  successEditFn,
  failEditFn,
  errorEditFn,
}) => {
  try {
    const res = await jwtAxios.put(`${path}/parent/putparent`, obj);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면처리용
      successEditFn(res.data);
      // RTK 업데이트 처리를 위해 값 전달
      return res.data;
    } else {
      failEditFn(res.data);
    }
  } catch (error) {
    errorEditFn("수정에 실패했습니다. 다시 시도해주세요.");
  }
};
