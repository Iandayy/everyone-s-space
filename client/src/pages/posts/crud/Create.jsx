import { useRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";

import instance from "../../../service/request";
import usePost from "../../../hooks/usePost";
import PostForm from "../common/PostForm";

const Create = () => {
  const today = new Date().toISOString();
  const date = today.slice(0, 10);

  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  const { inputValue, category, onInputChange, onSubmit, isValid } = usePost({
    categoryName: `${currentCategory} Posts`,
    mood: 1,
    date: date,
    title: "",
    content: "",
    category: "universe",
    categoryNav: "all",
    currentNav: "/posts/all",
    postPath: "/posts",
    setCurrentCategory,
    method: instance.post,
  });

  return (
    <PostForm
      inputValue={inputValue}
      category={category}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={!isValid}
    />
  );
};

export default Create;
