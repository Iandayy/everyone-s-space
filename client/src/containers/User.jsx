import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { loginState } from "../recoil/atom/loginState";
import { Link } from "react-router-dom";
import Logout from "../pages/auth/Logout";

const User = () => {
  const [cookies] = useCookies();
  const isLogin = useRecoilValue(loginState);
  const setIsLogin = useSetRecoilState(loginState);
  const homePath = useLocation().pathname === "/";

  useEffect(() => {
    setIsLogin(!!cookies.login);
  }, [cookies, setIsLogin]);

  return (
    <>
      {!isLogin && (
        <article
          className={`${
            homePath ? "text-slate-50" : "text-blue-800"
          } flex items-center text-xl sm:text-lg s:text-base `}
        >
          <Link
            to="/login"
            className="absolute right-16 s:right-14 hover:font-semibold"
          >
            Login
          </Link>
          <Link
            to="/join"
            className="absolute right-0 mr-5 hover:font-semibold"
          >
            Join
          </Link>
        </article>
      )}
      {isLogin && (
        <article className="flex text-xl sm:text-lg s:text-base">
          <Logout />
        </article>
      )}
    </>
  );
};

export default User;
