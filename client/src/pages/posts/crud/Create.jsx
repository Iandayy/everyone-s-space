import { useRecoilState } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";

import Rink from "../../../components/Rink";
import Button from "../../../components/Button";

const Create = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const [category, setCategory] = useRecoilState(categoryState);

  const categoryHandler = () => {
    setCategory("all");
  };

  return (
    <div>
      <h2 className="text-4xl mb-5">Add Posts</h2>
      <form action="/posts" method="post">
        <section className="mb-3">
          <label htmlFor="category">Category : </label>
          <select id="category" name="category">
            <option value="study">study</option>
            <option value="hobby">hobby</option>
            <option value="daily">daily</option>
          </select>
        </section>
        <section className="mb-5">
          <label htmlFor="mood">Today's Mood: </label>
          <input
            id="mood"
            name="mood"
            type="number"
            defaultValue={1}
            min="1"
            max="5"
            className="p-1"
          />
        </section>
        <section className="mb-5">
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={date}
            placeholder="date"
            className="p-1"
          />
        </section>
        <section className="mb-5">
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            className="p-1"
          />
        </section>
        <section className="flex mb-5">
          <label htmlFor="content">Content : </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            className="p-1"
          />
        </section>
        <section className="flex justify-center mb-5">
          <Rink
            path={`/posts/${category}`}
            className="bg-blue-800 text-white hover:bg-blue-500 rounded p-2"
          >
            Cancel
          </Rink>
          <Button str="Submit" onClick={categoryHandler} />
        </section>
      </form>
    </div>
  );
};

export default Create;
