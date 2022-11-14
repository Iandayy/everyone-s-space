import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const postIdState = atom({
  key: "postIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
