import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";
import Button from "../../../components/Button";
import Delete from "./Delete";

const Read = () => {
  const post = useRecoilValue(postReadState);
  const [cookies] = useCookies();

  if (post === null) {
    window.location.replace("/posts/all");
    return;
  }

  const anonymPost = !post.member_id;
  const userPost =
    !anonymPost &&
    cookies.member_id &&
    cookies.member_id.includes(post.member_id);

  return (
    <div>
      <h2 className="text-2xl pb-5">{post.title}</h2>
      <p className="text-xl pb-5">{post.content}</p>
      <p className="pb-5">Today's mood : {post.mood}</p>
      <section className="pb-5">
        <strong>{post.name}</strong>
        <em>{post.date}</em>
      </section>
      {userPost && (
        <section className="flex justify-center">
          <Button
            str="Edit"
            onClick={() => window.location.replace("/posts/update")}
          />
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
