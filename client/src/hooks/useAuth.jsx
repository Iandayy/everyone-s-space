import { useState, useEffect } from "react";
import instance from "../service/request";

const useAuth = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    check: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (inputValue.name !== "" && inputValue.password !== "") {
      if (window.location.pathname === "/join") {
        if (inputValue.check !== "") setIsValid(() => true);
        else setIsValid(() => false);
      } else setIsValid(() => true);
    } else setIsValid(() => false);
  }, [inputValue.name, inputValue.password, inputValue.check]);

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
      setInputValue(() => ({
        name: "",
        password: "",
        check: "",
      }));
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
