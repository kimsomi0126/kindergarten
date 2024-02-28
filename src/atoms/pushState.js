import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
const pushState = atom({
  key: "pushState",
  default: { totalCnt: 0, pushList: {} },
  effects_UNSTABLE: [persistAtom],
});

export default pushState;
