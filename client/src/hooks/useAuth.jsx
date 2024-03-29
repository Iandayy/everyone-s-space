import { useState, useEffect } from "react";
import instance from "../service/request";

const DEFAULT_INPUT_VALUE = Object.freeze({
  name: "",
  password: "",
  check: "",
});

const useAuth = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_INPUT_VALUE);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, password, check } = inputValue;

    if (name === "" || password === "") {
      setIsValid(false);
      return;
    }

    const isJoinPage = window.location.pathname === "/join";

    if (isJoinPage && check === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }, [inputValue]);

  const inputValueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (path, successCallback, errorCallback) => {
    if (!isValid) return;

    if (path === "join" && inputValue.password !== inputValue.check) {
      alert("Check your password");
      return;
    }

    const items = { name: inputValue.name, password: inputValue.password };

    try {
      const res = await instance.post(`/auth/${path}`, items);
      alert(res.data.message);
      setInputValue(DEFAULT_INPUT_VALUE);
      successCallback();
    } catch (err) {
      alert(err.response.data.message);
      errorCallback(err);
    }
  };

  return {
    inputValue,
    inputValueChangeHandler,
    submitHandler,
    isValid,
  };
};

export default useAuth;
