import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";

const usePost = (props) => {
  const category = useRecoilValue(categoryState);

  const [inputValue, setInputValue] = useState({
    category: props.category,
    mood: props.mood,
    date: props.date,
    title: props.title,
    content: props.content,
  });

  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (inputValue.title !== "" && inputValue.content !== "") {
      setIsDisable(() => false);
    } else setIsDisable(() => true);
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

    if (isDisable) return;

    try {
      const res = await props.method(props.postPath, inputValue);
      alert(res.data.message);

      if (props.categoryName.includes("Edit"))
        props.setCurrentCategory(inputValue.category);
      else props.setCurrentCategory(props.categoryNav);

      window.location.replace(props.currentNav);
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
    isDisable,
  };
};

export default usePost;
