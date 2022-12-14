import { useSetRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";

import Button from "../../../components/Button";

const Delete = ({ id }) => {
  const setCategory = useSetRecoilState(categoryState);

  const deleteHandler = () => {
    alert("Delete post");
    setCategory("all");
  };

  return (
    <form action={`/posts/${id}?_method=DELETE`} method="POST">
      <Button str="Delete" onClick={deleteHandler} />
    </form>
  );
};

export default Delete;
