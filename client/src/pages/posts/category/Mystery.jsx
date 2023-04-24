import { useRecoilValue } from "recoil";
import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";
import PostList from "../common/PostList";

const Mystery = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Mystery", posts);

  return <PostList title="Mystery" posts={filteredPosts} />;
};

export default Mystery;
