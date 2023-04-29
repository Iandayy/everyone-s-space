import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";
import Button from "../../../components/Button";
import Delete from "./Delete";
import Moment from "react-moment";

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
    <>
      <h2 className="text-2xl s:text-xl font-medium pb-10">{post.title}</h2>
      <p className="text-xl s:text-lg pb-10">{post.content}</p>
      <section className="flex flex-col pb-10">
        <strong>{post.name}</strong>
        <Moment fromNow className="text-gray-500">
          {post.date}
        </Moment>
      </section>
      {userPost && (
        <section className="flex justify-center p-2">
          <Button
            str="Edit"
            onClick={() => window.location.replace("/posts/update")}
            className="mr-2"
          />
          <Delete id={post._id} />
        </section>
      )}
      {anonymPost && (
        <section className="flex justify-center p-2">
          <Delete id={post._id} />
        </section>
      )}
    </>
  );
};

export default Read;
