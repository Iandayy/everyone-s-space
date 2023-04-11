import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

import PostList from "../common/PostList";

const Universe = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Universe", posts);

  return <PostList title="Universe" posts={filteredPosts} />;
};

export default Universe;
