import { useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";

import { postReadState } from "../../../recoil/selector/postReadState";
import Rink from "../../../components/Rink";
import Delete from "./Delete";

const Read = () => {
  const post = useRecoilValue(postReadState);
  const [cookies] = useCookies();

  const anonymPost = post.member_id === undefined;

  return (
    <div>
      <h2 className="text-2xl pb-5">{post.title}</h2>
      <p className="text-xl pb-5">{post.content}</p>
      <p className="pb-5">today's mood : {post.mood}</p>
      <section className="pb-5">
        <strong>{post.name} </strong>
        <em>{post.date}</em>
      </section>
      {!anonymPost && post.member_id === cookies.member_id && (
        <section className="flex justify-center">
          <Rink
            path="/update"
            className="bg-blue-800 text-white hover:bg-blue-500 rounded p-2"
          >
            Edit
          </Rink>
          <Delete id={post._id} />
        </section>
      )}
      {anonymPost && (
        <section className="flex justify-center">
          <Delete id={post._id} />
        </section>
      )}
    </div>
  );
};

export default Read;
