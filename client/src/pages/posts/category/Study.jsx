import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

import PostList from "../common/PostList";

const Study = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Study", posts);

  return <PostList title="Study" posts={filteredPosts} />;
};

export default Study;
