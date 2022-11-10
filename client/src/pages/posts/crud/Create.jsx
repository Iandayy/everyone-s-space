import { useRecoilValue } from "recoil";
import { categoryState } from "../../../recoil/atom/categoryState";
import Rink from "../../../components/Rink";

const Create = () => {
  const category = useRecoilValue(categoryState);
  return (
    <div>
      <h2>Add Posts</h2>
      <form action="/posts" method="POST">
        <section>
          <label htmlFor="category">Select Category : </label>
          <select id="category" name="category">
            <option value="study">study</option>
            <option value="hobby">hobby</option>
            <option value="daily">daily</option>
          </select>
        </section>
        <section>
          <label htmlFor="mood">Select Today's Mood: </label>
          <input id="mood" name="mood" type="number" min="1" max="5" />
        </section>
        <section>
          <label htmlFor="date">Create Date : </label>
          <input id="date" name="date" type="date" placeholder="date" />
        </section>
        <section>
          <label htmlFor="name">Create Name : </label>
          <input id="name" name="name" type="text" placeholder="name" />
        </section>
        <section>
          <label htmlFor="title">Create Title : </label>
          <input id="title" name="title" type="text" placeholder="title" />
        </section>
        <section>
          <label htmlFor="content">Create Content : </label>
          <textarea id="content" name="content" placeholder="content" />
        </section>
        <Rink path={`/${category}`}>Cancel</Rink>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
