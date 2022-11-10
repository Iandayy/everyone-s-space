import Rink from "../../../components/Rink";
import { useSetRecoilState } from "recoil";

import { postIdState } from "../../../recoil/atom/postIdState";

const Post = ({ post }) => {
  const setPostId = useSetRecoilState(postIdState);

  const postIdHandler = () => {
    setPostId(post._id);
  };

  return (
    <div>
      <ul>
        <Rink path="/read" onClick={postIdHandler}>
          <li className="border-2 rounded-md p-5 mb-5 hover:bg-gray-100">
            <strong>{post.title}</strong> <em>{` - ${post.name} `}</em>
          </li>
        </Rink>
      </ul>
    </div>
  );
};

export default Post;
