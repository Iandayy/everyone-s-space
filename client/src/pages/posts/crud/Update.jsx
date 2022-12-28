import { useRecoilValue } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";

import usePost from "../../../hooks/usePost";
import instance from "../../../service/request";

const Update = () => {
  const post = useRecoilValue(postReadState);

  const editPost = usePost({
    categoryName: "Edit Posts",
    mood: post.mood,
    date: post.date,
    title: post.title,
    content: post.content,
    category: post.category,
    currentNav: "/posts/read",
    postPath: `/posts/${post._id}`,
    method: instance.patch,
  });

  return <>{editPost}</>;
};

export default Update;
