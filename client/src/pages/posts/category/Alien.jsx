import { useRecoilValue } from "recoil";
import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";
import PostList from "../common/PostList";

const Alien = () => {
  const posts = useRecoilValue(postsAllState);
  const filteredPosts = useCategory("Alien", posts);

  return <PostList title="Alien" posts={filteredPosts} />;
};

export default Alien;
