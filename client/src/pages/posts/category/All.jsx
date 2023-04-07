import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

import PostList from "../common/PostList";

const All = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("All", posts);

  return <PostList title="All" posts={filteredPosts} />;
};

export default All;
