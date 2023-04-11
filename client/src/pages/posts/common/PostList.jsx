import { Link } from "react-router-dom";
import Post from "./Post";
import NotPost from "./NotPost";

const PostList = ({ title, posts }) => {
  return (
    <>
      <section className="flex justify-between text-center pb-5">
        <h2 className="text-4xl s:text-3xl">{`${title} Posts`}</h2>
        <Link
          to="/posts/create"
          className="bg-blue-800 text-white s:text-xs rounded p-2 w-1/4 outline-blue-800 outline hover:outline-offset-4"
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
    </>
  );
};

export default PostList;
