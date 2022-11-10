import Button from "../../../components/Button";

const Delete = ({ id }) => {
  const deleteHandler = () => {
    alert("Delete post");
  };
  return (
    <form action={`/posts/${id}?_method=DELETE`} method="POST">
      <Button str="Delete" onClick={deleteHandler} />
    </form>
  );
};

export default Delete;
