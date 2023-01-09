import { selector } from "recoil";
import instance from "../../service/request";

export const postsAllState = selector({
  key: "postsAllState",
  get: async () => {
    try {
      const allPosts = await instance.get("/posts");
      const data = await allPosts.data;
            console.log(allPosts);
      return data;
    } catch (err) {
      console.log("err", err);
    }
  },
});
