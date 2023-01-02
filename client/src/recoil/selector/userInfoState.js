import { selector } from "recoil";

import instance from "../../service/request";

import { postIdState } from "../atom/postIdState";

export const userInfoState = selector({
  key: "userInfoState",
  get: async ({ get }) => {
    const id = get(postIdState);
    try {
      const readPost = await instance.get(`/mypage/userInfo/${id}`);
      const data = await readPost.data;
      return data;
    } catch (err) {
      console.log("err", err);
    }
  },
});
