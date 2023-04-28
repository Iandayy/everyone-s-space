import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const POST_CATEGORIES = ["all", "universe", "alien", "mystery"];
const MYPAGE_CATEGORIES = ["userInfo", "profile", "account"];

const useNav = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/posts")) {
      setCategories(POST_CATEGORIES);
      return;
    }

    if (location.pathname.startsWith("/mypage")) {
      setCategories(MYPAGE_CATEGORIES);
      return;
    }

    setCategories([]);
  }, [location]);

  const to = useMemo(() => {
    if (location.pathname.startsWith("/posts")) return "posts";
    if (location.pathname.startsWith("/mypage")) return "mypage";

    return "";
  }, [location]);

  return {
    categories,
    to,
  };
};
export default useNav;
