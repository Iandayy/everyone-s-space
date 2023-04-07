import { Link } from "react-router-dom";
import Post from "./Post";
import NotPost from "./NotPost";

const PostList = ({ title, posts }) => {
  return (
    <div>
      <section className="flex justify-between text-center pb-5">
        <h2 className="text-4xl">{`${title} Posts`}</h2>
        <Link
          to="/posts/create"
          className="bg-blue-800 text-white hover:bg-blue-500 rounded p-2 w-3/12"
        >
          Add Post
        </Link>
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

export default PostList;
