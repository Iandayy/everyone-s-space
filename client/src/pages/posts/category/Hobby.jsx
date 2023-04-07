import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

import PostList from "../common/PostList";

const Hobby = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Hobby", posts);

  return <PostList title="Hobby" posts={filteredPosts} />;
};

export default Hobby;
