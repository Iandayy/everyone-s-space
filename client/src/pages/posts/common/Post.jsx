import { useSetRecoilState } from "recoil";

import { postIdState } from "../../../recoil/atom/postIdState";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const setPostId = useSetRecoilState(postIdState);

  const postIdHandler = () => {
    setPostId(post._id);
  };

  return (
    <ul>
      <Link to="/posts/read" onClick={postIdHandler}>
        <li className="border rounded-md p-5 mb-5 hover:bg-gray-100 shadow">
          <strong>{post.title}</strong> <em>{` - ${post.name} `}</em>
        </li>
      </Link>
    </ul>
  );
};

export default Post;
