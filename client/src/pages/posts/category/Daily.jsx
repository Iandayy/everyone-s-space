import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

import PostList from "../common/PostList";

const Daily = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Daily", posts);

  return <PostList title="Daily" posts={filteredPosts} />;
};

export default Daily;
