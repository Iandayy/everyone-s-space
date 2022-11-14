import { useRecoilValue } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";
import Button from "../../../components/Button";

const Delete = ({ id }) => {
  const category = useRecoilValue(categoryState);

  const deleteHandler = () => {
    alert("Delete post");
    window.location.replace(`/posts/${category}`);
  };
  return (
    <form action={`/posts/${id}?_method=DELETE`} method="POST">
      <Button str="Delete" onClick={deleteHandler} />
    </form>
  );
};

export default Delete;
