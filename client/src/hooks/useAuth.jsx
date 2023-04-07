import { useState } from "react";
import instance from "../service/request";

const useAuth = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    check: "",
  });

  const inputValueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (path, successCallback, errorCallback) => {
    if (inputValue.name.length === 0) {
      alert("Enter your name");
      return;
    }
    if (path === "Join" && inputValue.password !== inputValue.check) {
      alert("Check your password");
      return;
    }

    const items = { name: inputValue.name, password: inputValue.password };

    try {
      const res = await instance.post(`/auth/${path}`, items);
      alert(res.data.message);
      successCallback(res);
      setInputValue({
        name: "",
        password: "",
        check: "",
      });
    } catch (err) {
      alert(err.response.data.message);
      errorCallback(err);
    }
  };

  return {
    inputValue,
    inputValueChangeHandler,
    submitHandler,
  };
};

export default useAuth;
