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

  // 어떤 값에 따라서 계속 변하는 상태이긴한데, 어떤 값에 의존할 때

  const to = useMemo(() => {
    if (location.pathname.startsWith("/posts")) return "posts";
    if (location.pathname.startsWith("/mypage")) return "mypage";

    return "";
  }, [location]);

  // on.pathname.startsWith("/posts")
  //   ? "posts"
  //   : location.pathname.startsWith("/mypage")
  //   ? "mypage"
  //   : "";

  return {
    categories,
    to,
  };
};
export default useNav;
