import { useSetRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";
import instance from "../../../service/request";

import Button from "../../../components/Button";

const Delete = ({ id }) => {
  const setCategory = useSetRecoilState(categoryState);

  const deleteHandler = async (e) => {
    const isDelete = window.confirm(
      "Are you sure you want to delete the post?"
    );
    if (isDelete) {
      try {
        await instance.delete(`/posts/${id}`);
        setCategory("all");
      } catch (err) {
        console.error("Failed to delete post:", err);
      }
    } else e.preventDefault();
  };

  return (
    <form>
      <Button str="Delete" onClick={deleteHandler} />
    </form>
  );
};

export default Delete;
