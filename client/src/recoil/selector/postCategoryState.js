import { selector } from "recoil";
import instance from "../../service/request";

import { categoryState } from "../atom/categoryState";

export const postCategoryState = selector({
  key: "postCategoryState",
  get: async ({ get }) => {
    const categoryName = get(categoryState);
    try {
      const postCategory = await instance.get(
        `/posts/search?category=${categoryName}`
      );
      const data = await postCategory.data;
      return data;
    } catch (err) {
      console.log("err", err);
    }
  },
});
