import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNav = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const postCategories = ["all", "universe", "alien", "mystery"];
    const mypageCategories = ["userInfo", "profile", "account"];

    if (location.pathname.startsWith("/posts")) {
      setCategories(postCategories);
    } else if (location.pathname.startsWith("/mypage")) {
      setCategories(mypageCategories);
    } else {
      setCategories([]);
    }
  }, [location]);

  const to = location.pathname.startsWith("/posts")
    ? "posts"
    : location.pathname.startsWith("/mypage")
    ? "mypage"
    : "";

  return {
    categories,
    to,
  };
};

export default useNav;
