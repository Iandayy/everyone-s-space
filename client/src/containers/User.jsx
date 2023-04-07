import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { loginState } from "../recoil/atom/loginState";
import { Link } from "react-router-dom";
import Logout from "../pages/auth/Logout";

const User = () => {
  const [cookies] = useCookies();
  const isLogin = useRecoilValue(loginState);
  const setIsLogin = useSetRecoilState(loginState);

  useEffect(() => {
    setIsLogin(!!cookies.login);
  }, [cookies, setIsLogin]);

  return (
    <>
      {!isLogin && (
        <article className="text-xl sm:text-lg s:text-base">
          <Link to="/login" className="mr-2">
            Login
          </Link>
          <Link to="/join">Join</Link>
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
