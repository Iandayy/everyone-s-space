import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";

import Rink from "../../../components/Rink";
import Post from "../common/Post";
import NotPost from "../common/NotPost";

const All = () => {
  const posts = useRecoilValue(postsAllState);

  return (
    <div>
      <section className="flex justify-between content-center text-center pb-5">
        <h2 className="text-3xl">All Posts</h2>
        <Rink
          path="/create"
          className="bg-blue-800 text-white hover:bg-blue-500 rounded p-2 w-3/12"
        >
          Add Post
        </Rink>
      </section>
      {posts.length === 0 && <NotPost />}
      {posts.length > 0 && (
        <section className="flex flex-col-reverse py-5">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </section>
      )}
    </div>
  );
};

export default All;
