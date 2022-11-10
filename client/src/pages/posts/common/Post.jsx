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
        <li>
          <Rink path="/read" onClick={postIdHandler}>
            {`${post.title} - `} <strong>{post.name}</strong>
          </Rink>
        </li>
      </ul>
    </div>
  );
};

export default Post;
