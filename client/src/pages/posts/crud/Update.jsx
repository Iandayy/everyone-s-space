import { useRecoilValue } from "recoil";
import { postReadState } from "../../../recoil/selector/postReadState";

import Rink from "../../../components/Rink";

const Update = () => {
  const post = useRecoilValue(postReadState);

  const categories = ["study", "hobby", "daily"];

  return (
    <div>
      <h2>Edit Post</h2>
      <form action={`/posts/${post._id}?_method=PATCH`} method="POST">
        <section>
          <label htmlFor="category">Category : </label>
          <select id="category" name="category" defaultValue={post.category}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </section>
        <section>
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
        <section>
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="date"
            defaultValue={post.date}
          />
        </section>
        <section>
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            defaultValue={post.name}
          />
        </section>
        <section>
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            defaultValue={post.title}
          />
        </section>
        <section>
          <label htmlFor="content">Content : </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            defaultValue={post.content}
          />
        </section>
        <Rink path="/read">Edit</Rink>
        <button>Complete</button>
      </form>
    </div>
  );
};

export default Update;
