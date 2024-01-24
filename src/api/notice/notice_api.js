import axios from "axios";

export const API_SERVER_URL = "http://112.222.157.156:5224";
const path = `${API_SERVER_URL}/api/full`;

// 유치원소식 불러오기
export const getDetail = async ({ tno, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${path}?iFullNotice=${tno}`);
    successFn(res.data);
  } catch (error) {
    errorFn(error);
  }
};

export const putProduct = async putResultAction => {
  const obj = {
    fullTitle: "string",
    fullContents: "string",
    writer: "string",
    createdAt: "string",
    pics: [""],
  };
  try {
    const 응답 = await axios.put(`${path}`, obj);
    putResultAction(응답.data.result);
  } catch (error) {
    putResultAction(-500);
  }
};

// {
//   "fullTitle": "사진여러개 넣어보기",
//   "fullContents": "테스트중입니당",
//   "writer": "원장님",
//   "createdAt": "2024-01-24 15:10:43",
//   "pics": [
//     "fca71443-134b-4e17-823a-d344930f288c.png",
//     "ce149a57-5ec6-455b-b50f-4cfe228828ce.png",
//     "59bc4f38-34e0-47d1-bf19-90e8770bcdd0.png"
//   ]
// }

// http://112.222.157.156:5224/api/full?iFullNotice=5
