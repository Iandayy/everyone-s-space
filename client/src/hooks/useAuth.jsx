import { useState } from "react";
import instance from "../service/request";

import Button from "../components/Button";

const useAuth = (props) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (inputValue.name.length === 0) return;

    const items = { name: inputValue.name, password: inputValue.password };

    try {
      const res = await instance.post(`/auth/${props.path}`, items);
      alert(res.data.message);
      if (props.path === "join") window.location.replace("/login");
      if (props.path === "login") window.location.replace("/posts/all");
      setInputValue({
        name: "",
        password: "",
      });

      console.log(res);
    } catch (err) {
      console.log("err", err);
      alert(err.response.data.message);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-80 p-6 my-10 border rounded-md shadow-md"
      >
        <h2 className="text-start text-4xl mb-12">{props.title}</h2>
        <section className="flex flex-col mb-6">
          <label htmlFor="name" className="text-lg text-gray-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={inputValue.name}
            onChange={inputValueChangeHandler}
            className="p-2 border rounded-md shadow"
          />
        </section>
        <section className="flex flex-col mb-8">
          <label htmlFor="password" className="text-lg text-gray-600">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={inputValue.password}
            onChange={inputValueChangeHandler}
            className="p-2 border rounded-md shadow"
          />
        </section>
        {props.check && (
          <section className="flex flex-col mb-8">
            <label htmlFor="check" className="text-lg mb-2 text-gray-600">
              Check
            </label>
            <input
              id="check"
              name="check"
              type="password"
              placeholder="Check Your Password"
              className="p-2 border rounded-md shadow"
            />
          </section>
        )}
        <Button str={props.title} onClick={props.onCategory} className="mt-4" />
      </form>
    </div>
  );
};

export default useAuth;
