import axios from "axios";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/teacher`;

export const getAdminParentList = async ({
  setParentList,
  successFn,
  failFn,
  errorFn,
  page,
  iclass,
}) => {
  try {
    const res = await axios.get(
      `${path}/parent?page=${page}&iclass=${iclass}}`,
    );
    setParentList(res.data);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("자료 호출 에러입니다.");
    }
  } catch (error) {
    const demo = await axios.get(`/guardian.json`);
    setParentList(demo.data);
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
