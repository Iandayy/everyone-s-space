import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const PostForm = ({
  inputValue,
  category,
  onInputChange,
  onSubmit,
  disabled,
}) => {
  return (
    <>
      <h2 className="text-4xl mb-5">{category}</h2>
      <form className="flex flex-col py-2">
        <section className="flex itmes-center mb-8">
          <label htmlFor="category" className="py-1 pr-1">
            Category :
          </label>
          <select
            id="category"
            name="category"
            value={inputValue.category}
            onChange={onInputChange}
            className="p-1 border rounded-md shadow"
          >
            <option value="universe">universe</option>
            <option value="alien">alien</option>
            <option value="mystery">mystery</option>
          </select>
        </section>
        <section className="flex itmes-center mb-8">
          <label htmlFor="mood" className="py-1 pr-1">
            Today's Mood :
          </label>
          <input
            id="mood"
            name="mood"
            type="number"
            min="1"
            max="5"
            value={inputValue.mood}
            onChange={onInputChange}
            className="p-1 border rounded-md shadow"
          />
        </section>
        <section className="flex itmes-center mb-8">
          <label htmlFor="date" className="py-1 pr-1">
            Date :
          </label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="date"
            value={inputValue.date}
            onChange={onInputChange}
            className="p-1 border rounded-md shadow"
          />
        </section>
        <section className="flex itmes-center mb-8">
          <label htmlFor="title" className="py-1 pr-1">
            Title :
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            value={inputValue.title}
            onChange={onInputChange}
            className="p-1 border rounded-md shadow"
          />
        </section>
        <section className="flex itmes-center mb-8">
          <label htmlFor="content" className="py-1 pr-1">
            Content :
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            value={inputValue.content}
            onChange={onInputChange}
            className="p-1 border rounded-md shadow"
          />
        </section>
        <section className="flex justify-center mb-5">
          <Link
            to={`/posts/${category}`}
            className="bg-blue-800 text-white rounded p-2 m-1 outline-blue-800 outline hover:outline-offset-2"
          >
            Cancel
          </Link>
          <Button
            str="Submit"
            disabled={disabled}
            onClick={onSubmit}
            className={`m-1`}
          />
        </section>
      </form>
    </>
  );
};

export default PostForm;
