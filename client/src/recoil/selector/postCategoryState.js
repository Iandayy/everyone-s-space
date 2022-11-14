import { selector } from "recoil";
import instance from "../../service/request";

import { categoryState } from "../atom/categoryState";

export const postCategoryState = selector({
  key: "postCategoryState",
  get: async ({ get }) => {
    const categoryName = get(categoryState);
    const postCategory = await instance.get(`/search?category=${categoryName}`);
    const data = await postCategory.data;
    return data;
  },
});
