import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const PostForm = ({
  inputValue,
  category,
  onInputChange,
  onSubmit,
  disable,
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
            <option value="study">study</option>
            <option value="hobby">hobby</option>
            <option value="daily">daily</option>
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
            className="bg-blue-800 text-white hover:bg-blue-500 rounded p-2"
          >
            Cancel
          </Link>
          <Button
            str="Submit"
            onClick={onSubmit}
            className={
              !disable && "bg-gray-400 hover:bg-gray-400 cursor-default"
            }
          />
        </section>
      </form>
    </>
  );
};

export default PostForm;
