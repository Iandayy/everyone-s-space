import { useRecoilValue } from "recoil";

import { postCategoryState } from "../../../recoil/selector/postCategoryState";

import Rink from "../../../components/Rink";
import Post from "../common/Post";
import NotPost from "../common/NotPost";

const Hobby = () => {
  const posts = useRecoilValue(postCategoryState);
  return (
    <div>
      <section className="flex justify-between content-center text-center pb-5">
        <h2 className="text-xl">Hobby Posts</h2>
        <Rink
          path="/create"
          className="bg-blue-800 text-white rounded p-2 w-3/12"
        >
          Add Post
        </Rink>
      </section>
      {posts.length === 0 && <NotPost />}
      {posts.length > 0 && (
        <section className="py-5">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Hobby;
