import axios from "axios";
import { SERVER_URL } from "./config";
const path = `${SERVER_URL}/api`;

// 메인 유치원소식
export const getMainNotice = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};

// 메인 활동앨범
export const getMainAlbum = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get();
  } catch (error) {
    errorFn("서버가 불안정합니다.다시 시도해주세요.");
  }
};
