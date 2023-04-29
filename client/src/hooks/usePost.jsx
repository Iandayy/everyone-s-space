import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";

const usePost = ({
  category: propsCategory,
  date,
  title,
  content,
  categoryName,
  categoryNav,
  setCurrentCategory,
  method,
  postPath,
  currentNav,
}) => {
  const category = useRecoilValue(categoryState);

  const [inputValue, setInputValue] = useState({
    category: propsCategory,
    date,
    title,
    content,
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (inputValue.title === "" || inputValue.content === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }, [inputValue.title, inputValue.content]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    try {
      const res = await method(postPath, inputValue);
      alert(res.data.message);

      if (categoryName.includes("Edit"))
        setCurrentCategory(inputValue.category);
      else setCurrentCategory(categoryNav);

      window.location.replace(currentNav);
    } catch (err) {
      console.log("err", err);
      alert(err.response.data.message);
    }
  };

  return {
    inputValue,
    category,
    onInputChange,
    onSubmit,
    isValid,
  };
};

export default usePost;
