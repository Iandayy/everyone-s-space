import { useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";

import Rink from "../components/Rink";
import Button from "../components/Button";

const usePost = (props) => {
  const [inputValue, setInputValue] = useState({
    category: props.category,
    mood: props.mood,
    date: props.date,
    title: props.title,
    content: props.content,
  });

  const category = useRecoilValue(categoryState);

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const items = {
      category: inputValue.category,
      mood: inputValue.mood,
      date: inputValue.date,
      title: inputValue.title,
      content: inputValue.content,
    };
    try {
      const res = await props.method(props.postPath, items);
      alert(res.data.message);
      window.location.replace(props.currentNav);
      props.setCategory(props.categoryNav);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <h2 className="text-4xl mb-5">{props.categoryName}</h2>
      <form>
        <section className="mb-3">
          <label htmlFor="category">Category : </label>
          <select
            id="category"
            name="category"
            value={inputValue.category}
            onChange={inputValueChangeHandler}
          >
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
            min="1"
            max="5"
            value={inputValue.mood}
            onChange={inputValueChangeHandler}
            className="p-1"
          />
        </section>
        <section className="mb-5">
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="date"
            value={inputValue.date}
            onChange={inputValueChangeHandler}
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
            value={inputValue.title}
            onChange={inputValueChangeHandler}
            className="p-1"
          />
        </section>
        <section className="flex mb-5">
          <label htmlFor="content">Content : </label>
          <textarea
            id="content"
            name="content"
            placeholder="content"
            value={inputValue.content}
            onChange={inputValueChangeHandler}
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
          <Button str="Submit" onClick={submitHandler} />
        </section>
      </form>
    </div>
  );
};

export default usePost;
