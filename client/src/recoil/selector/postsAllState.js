import { selector } from "recoil";
import instance from "../../service/request";

export const postsAllState = selector({
  key: "postsAllState",
  get: async () => {
    const allPosts = await instance.get("/posts");
    const data = await allPosts.data;
    return data;
  },
});
