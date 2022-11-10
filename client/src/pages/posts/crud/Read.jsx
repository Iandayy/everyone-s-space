import { useRecoilValue } from "recoil";

import { postReadState } from "../../../recoil/selector/postReadState";
import Rink from "../../../components/Rink";
import Delete from "./Delete";

const Read = () => {
  const post = useRecoilValue(postReadState);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <strong>{post.name} </strong>
      <em>{post.date}</em>
      <p>5 / {post.mood}</p>
      <Rink path="/update">Edit</Rink>
      <Delete id={post._id} />
    </div>
  );
};

export default Read;
