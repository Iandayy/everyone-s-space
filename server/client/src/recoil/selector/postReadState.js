import { selector } from "recoil";
import instance from "../../service/request";

import { postIdState } from "../atom/postIdState";

export const postReadState = selector({
  key: "postReadState",
  get: async ({ get }) => {
    const id = get(postIdState);
    const readPost = await instance.get(`/posts/${id}`);
    const data = await readPost.data;
    return data;
  },
});
