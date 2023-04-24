import { useRecoilValue, useSetRecoilState } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";
import { categoryState } from "../../../recoil/atom/categoryState";
import instance from "../../../service/request";
import usePost from "../../../hooks/usePost";
import PostForm from "../common/PostForm";

const Update = () => {
  const post = useRecoilValue(postReadState);
  const setCurrentCategory = useSetRecoilState(categoryState);

  const { inputValue, category, onInputChange, onSubmit } = usePost({
    categoryName: "Edit Posts",
    mood: post.mood,
    date: post.date,
    title: post.title,
    content: post.content,
    category: post.category,
    currentNav: "/posts/read",
    postPath: `/posts/${post._id}`,
    setCurrentCategory,
    method: instance.patch,
  });

  return (
    <PostForm
      inputValue={inputValue}
      category={category}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default Update;
