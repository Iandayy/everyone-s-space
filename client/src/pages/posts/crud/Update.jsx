import { useRecoilValue } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";

import Rink from "../../../components/Rink";
import Button from "../../../components/Button";

const Update = () => {
  const post = useRecoilValue(postReadState);

  const categories = ["study", "hobby", "daily"];

  return (
    <div>
      <h2 className="text-4xl mb-5">Edit Post</h2>
      <form action={`/posts/${post._id}?_method=PATCH`} method="POST">
        <section className="mb-5">
          <label htmlFor="category">Category : </label>
          <select id="category" name="category" defaultValue={post.category}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </section>
        <section className="mb-5">
          <label htmlFor="mood">Today's Mood: </label>
          <input
            id="mood"
            name="mood"
            type="number"
            min="1"
            max="5"
            defaultValue={post.mood}
          />
        </section>
        <section className="mb-5">
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="date"
            defaultValue={post.date}
          />
        </section>
        <section className="mb-5">
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            defaultValue={post.name}
          />
        </section>
        <section className="mb-5">
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            defaultValue={post.title}
          />
        </section>
        <section className="flex mb-5">
          <label htmlFor="content">Content : </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            defaultValue={post.content}
          />
        </section>
        <section className="flex justify-center mb-5">
          <Rink
            path="/posts/read"
            className="text-center text-white bg-blue-800 hover:bg-blue-500 rounded p-2"
          >
            Cancel
          </Rink>
          <Button str="Complete" />
        </section>
      </form>
    </div>
  );
};

export default Update;
