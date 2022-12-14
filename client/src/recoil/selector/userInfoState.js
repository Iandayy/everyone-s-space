import { selector } from "recoil";

import instance from "../../service/request";

import { postIdState } from "../atom/postIdState";

export const userInfoState = selector({
  key: "userInfoState",
  get: async ({ get }) => {
    const id = get(postIdState);
    const readPost = await instance.get(`/userInfo/${id}`);
    const data = await readPost.data;
    return data;
  },
});
