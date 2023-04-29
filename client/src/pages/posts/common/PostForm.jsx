import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const PostForm = ({
  inputValue,
  category,
  onInputChange,
  onSubmit,
  disabled,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-4xl pb-5">{category}</h2>
      <form className="flex flex-col w-4/5 s:w-full">
        <section className="flex itmes-center pb-8">
          <label htmlFor="category" className="pt-2 w-1/3 s:w-2/5">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={inputValue.category}
            onChange={onInputChange}
            className="p-2 w-full border rounded-md shadow"
          >
            <option value="universe">universe</option>
            <option value="alien">alien</option>
            <option value="mystery">mystery</option>
          </select>
        </section>
        <section className="flex itmes-center pb-8">
          <label htmlFor="title" className="pt-2 w-1/3 s:w-2/5">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            value={inputValue.title}
            onChange={onInputChange}
            className="p-2 w-full border rounded-md shadow"
          />
        </section>
        <section className="flex itmes-center pb-8">
          <label htmlFor="content" className="pt-12 w-1/3 s:w-2/5">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            rows="5"
            value={inputValue.content}
            onChange={onInputChange}
            className="p-2 w-full border rounded-md shadow"
          />
        </section>
        <section className="flex justify-center pb-5">
          <Link
            to={`/posts/${category}`}
            className="bg-white text-blue-800 rounded p-2 m-1 outline-blue-800 outline hover:outline-offset-2"
          >
            Cancel
          </Link>
          <Button
            str="Submit"
            disabled={disabled}
            onClick={onSubmit}
            className="m-1"
          />
        </section>
      </form>
    </div>
  );
};

export default PostForm;
