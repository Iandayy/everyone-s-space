import { useSetRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";
import usePost from "../../../hooks/usePost";
import instance from "../../../service/request";

const Create = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const setCategory = useSetRecoilState(categoryState);

  const createPost = usePost({
    categoryName: "All Posts",
    mood: 1,
    date: date,
    title: "",
    content: "",
    category: "study",
    categoryNav: "all",
    currentNav: "/posts/all",
    postPath: "/posts",
    setCategory,
    method: instance.post,
  });

  return <>{createPost}</>;
};

export default Create;
