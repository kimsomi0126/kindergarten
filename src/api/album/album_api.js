import axios from "axios";
import { SERVER_URL } from "../config";
const path = `${SERVER_URL}/api/album`;

export const getList = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
